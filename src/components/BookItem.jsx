import {  useNavigate } from "react-router-dom";
import Rating from "./Rating";

const BookItem = ({ book }) => {
  const navigate = useNavigate();
  return (
    <div className="card card-sm bg-base-100 shadow-sm">
      <figure>
        <img className="w-full h-80" src={book.coverImage} alt={book.title} />
      </figure>
      <div className="card-body justify-between gap-0">
        <h2 className="card-title">{book.title}</h2>
        <Rating rating={book.ratings} />
        <div className="card-actions justify-end">
          <a
            className="text-info font-bold cursor-pointer hover:underline hover:text-primary"
            onClick={() => navigate(`/books/${book.category}/${book._id}`)}
          >
            View more
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
