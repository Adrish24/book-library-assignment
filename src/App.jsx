import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Browser, BookDetails, Add, ErrorPage } from "./pages";
import RootLayout from "./layout/RootLayout";
import BrowseLayout from "./layout/BrowseLayout";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBooks } from "./context/bookListSlice";
import { Loader } from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const fetchBooks = useCallback(async () => {
    console.log("fetching books....");
    const url = import.meta.env.VITE_BOOKS_LIBRARY_URL;
    try {
      const res = await axios.get(url);
      if (!res.status === 200) {
        throw new Error("No books found");
      }
      dispatch(setBooks(res.data.Books));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={isLoading ? <Loader /> : <Home />} />
          <Route path="books" element={<BrowseLayout />}>
            <Route index element={<Browser />} />
            <Route path=":category" element={<Browser />} />
          </Route>
          <Route path="books/:category/:id" element={<BookDetails />} />
          <Route path="add-book" element={<Add />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
