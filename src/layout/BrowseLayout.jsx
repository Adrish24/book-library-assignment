import { Sidebar } from "../components";
import { Outlet } from "react-router-dom";

const BrowseLayout = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-1">
      <Sidebar />
      <div className="col-span-4 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default BrowseLayout;
