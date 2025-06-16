import { useMemo, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Searchbar = ({ books }) => {
  const [searchTerms, setSearchTerms] = useState("");

  const filterdBooks = useMemo(() => {
    if (!searchTerms) return null;
    return books
      .filter((book) => {
        const title = book.title.toLowerCase();
        const author = book.author.toLowerCase();
        const search = searchTerms.toLowerCase();
        return title.includes(search) || author.includes(search);
      })
      .splice(0, 5);
  }, [books, searchTerms]);

  return (
    <div className="bg-base-100 mb-5 flex rounded-md shadow-md relative ">
      <input
        value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)}
        className="w-full py-2 px-4 border-none  outline-none"
        type="text"
        placeholder="Search..."
      />
      <div className="p-2 text-neutral">
        <IoSearchSharp size={24} />
      </div>

      <div className="flex flex-col absolute top-9 bg-neutral-content w-full">
        {filterdBooks &&
          filterdBooks.length > 0 &&
          filterdBooks.map((book) => (
            <Link
              to={`/books/${book.category}/${book._id}`}
              key={book._id}
              className="p-2 hover:bg-info"
            >
              {book.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Searchbar;
