import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-12 scroll-t-16 grid min-h-screen overflow-y-auto">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
