import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BookList } from "../components";
import { setBgColor, setLogo } from "../utils";

const POPULARRATING_THRESHOLD = 4.6; // Minimum rating to be considered popular

const Home = () => {
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

  const popularBooks = useMemo(() => {
    return books.filter((book) => book.ratings >= POPULARRATING_THRESHOLD);
  }, [books]);

  return (
    <div className="mx-auto flex flex-col my-10 max-w-6xl">
      <header className="w-full text-center mb-10">
        <h1 className="text-4xl font-bold">Welcome to the Book Library</h1>
        <p className="text-xl font-semibold">Discover your favorite book</p>
      </header>

      <section>
        <h2 className="font-semibold mb-2">Browse Categories</h2>
        <div className="grid grid-cols-2 gap-2 mb-10">
          {categories.map((category) => (
            <Link
              to={`books/${category}`}
              key={category}
              className={`p-4 rounded-lg ${setBgColor(category)}`}
            >
              <span className="mr-2">{setLogo(category)}</span>
              <span className="font-semibold text-neutral-content">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-semibold mb-2">Popular Books</h2>
        <BookList books={popularBooks} />
      </section>
    </div>
  );
};

export default Home;
