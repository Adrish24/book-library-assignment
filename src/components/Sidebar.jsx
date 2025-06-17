import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Searchbar from "./Searchbar";
import { setLogo } from "../utils";
import { Link, useParams } from "react-router-dom";

const Sidebar = () => {
  const params = useParams();
  const [activeCategory, setActiveCategory] = useState(null);

  //Get books from the Redux store
  const books = useSelector((state) => state.books.books);
  //Memoized categories and popular books
  const categories = useMemo(() => {
    return books.reduce((acc, book) => {
      if (!acc.includes(book.category)) {
        acc.push(book.category);
      }
      return acc;
    }, []);
  }, [books]);

  useEffect(() => {
    if (!params.category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(params.category);
    }
  }, [params.category]);

  return (
    <div className="bg-base-200 h-screen p-4">
      <Searchbar books={books} />
      <div className="flex flex-col gap-2 ">
        {categories.map((category) => (
          <Link
            onClick={() => setActiveCategory(category)}
            to={`${category}`}
            key={category}
            className={`p-4 rounded-lg  ${
              activeCategory === category ? "bg-primary" : "bg-neutral"
            }`}
          >
            <span className="mr-2">{setLogo(category)}</span>
            <span className="font-semibold text-neutral-content">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
