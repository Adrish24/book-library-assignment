import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();

  console.log(id);

  const books = useSelector((state) => state.books.books);

  const bookDetails = useMemo(() => {
    return books.find((book) => book._id === id);
  }, [books, id]);

  return (
    <div>
      <h2>Book Details</h2>
      {bookDetails ? (
        <div className="book-details">
          <h3>{bookDetails.title}</h3>
          <p>
            <strong>Author:</strong> {bookDetails.author}
          </p>
          <p>
            <strong>Category:</strong> {bookDetails.category}
          </p>
          <p>
            <strong>Description:</strong> {bookDetails.description}
          </p>
          <p>
            <strong>Ratings:</strong> {bookDetails.ratings}
          </p>
        </div>
      ) : (
        <p>No details available for this book.</p>
      )}
    </div>
  );
};

export default BookDetails;
