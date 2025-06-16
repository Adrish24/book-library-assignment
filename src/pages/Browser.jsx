import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BookList } from "../components";
import { useMemo } from "react";

const Browser = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);

  const filterdBooks = useMemo(() => {
    if (!category) return books;
    return books.filter((book) => book.category === category);
  }, [books, category]);
  return (
    <div className="my-4">
      <section>
        <BookList books={filterdBooks} />
      </section>
    </div>
  );
};

export default Browser;
