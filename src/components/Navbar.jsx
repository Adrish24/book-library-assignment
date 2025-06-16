import { Link } from "react-router-dom";

const tabs = [
  { name: "Home", path: "/" },
  { name: "Browse Books", path: "books" },
  { name: "Add Book", path: "add-book" },
];

const Navbar = () => {
  return (
    <header
      className="
    fixed 
    top-0 left-0 
    bg-base-300 
    w-full
    z-50 py-2 
    flex justify-center-safe gap-2
    "
    >
      {tabs.map((tab) => (
        <Link
          className="py-1 px-4 hover:bg-accent hover:text-accent-content rounded-sm"
          key={tab.name}
          to={tab.path}
        >
          {tab.name}
        </Link>
      ))}
    </header>
  );
};

export default Navbar;
