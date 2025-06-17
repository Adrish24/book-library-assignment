import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputItem } from "../components";
import { useNavigate } from "react-router-dom";
import { addBook } from "../context/bookListSlice";
import { v4 as uuidv4 } from "uuid";

const Add = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    years: "",
    category: "",
    coverImage: null,
    description: "",
    ratings: 0,
  });
  const books = useSelector((state) => state.books.books);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Memoized categories and popular books
  const categories = useMemo(() => {
    return books.reduce((acc, book) => {
      if (!acc.includes(book.category)) {
        acc.push(book.category);
      }
      return acc;
    }, []);
  }, [books]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const newForm = {
        ...form,
        _id: uuidv4(),
        coverImage: URL.createObjectURL(form.coverImage),
      };
      try {
        dispatch(addBook(newForm));
      } catch (error) {
        console.log(error);
      } finally {
        navigate(`/books`);
      }
    },
    [dispatch, form, navigate]
  );

  return (
    <div className="hero bg-base-200 min-h-screen">
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Book details</legend>

          <InputItem
            label="Title"
            type="text"
            placeholder="Book Name"
            required={true}
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <InputItem
            label="Author"
            type="text"
            placeholder="Author Name"
            required={true}
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
          />

          <InputItem
            label="Year"
            type="date"
            required={true}
            value={form.years}
            onChange={(e) => setForm({ ...form, years: e.target.value })}
          />

          <label className="label">Category</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="select"
            required
          >
            <option value="" disabled={true}>
              Pick a category
            </option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>

          <label className="label">Cover Image</label>
          <input
            onChange={(e) =>
              setForm({ ...form, coverImage: e.target.files[0] })
            }
            type="file"
            className="file-input"
          />

          <label className="label">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="textarea"
            placeholder="Bio"
            required
          ></textarea>

          <button type="submit" className="btn btn-sm btn-info">
            Add Book
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Add;
