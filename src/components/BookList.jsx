import BookItem from "./BookItem";

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-4 grid-row-2 gap-5">
      {books.map((book) => (
        <BookItem key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
