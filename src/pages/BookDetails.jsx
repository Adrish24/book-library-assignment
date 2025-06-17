import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from "../components";
import { setBgColor } from "../utils";

const BookDetails = () => {
  const { category, id } = useParams();

  const navigate = useNavigate();

  const books = useSelector((state) => state.books.books);

  // Funtion to get selected book data
  const bookDetails = useMemo(() => {
    return books.find((book) => book._id === id);
  }, [books, id]);

  return (
    <div className="hero bg-base-200 min-h-screen">
      {bookDetails ? (
        <div className="hero-content flex-col lg:flex-row relative">
          <img
            src={bookDetails.coverImage}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h2 className="text-4xl font-bold">{bookDetails.title}</h2>
            <p className="text-neutral">Writen by {bookDetails.author}</p>
            <p className="text-neutral">Published in {bookDetails.years}</p>
            <Rating rating={bookDetails.ratings} />
            <p className="py-6">{bookDetails.description}</p>
          </div>
          <button
            onClick={() => navigate(`/books/${category}`)}
            className={`absolute top-0 right-0 btn btn-xs ${setBgColor(
              category
            )}`}
          >
            ❮❮ Back to Browse
          </button>
        </div>
      ) : (
        <p>No details available for this book.</p>
      )}
    </div>
  );
};

export default BookDetails;
