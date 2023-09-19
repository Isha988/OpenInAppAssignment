import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export const Layout = () => {
  return (
    <div className="p-6 grid grid-rows-6 gap-4 h-full">
      <Sidebar className="row-span-full" />
      <TopBar className="col-start-2 col-span-11 " />
      <div className="col-start-2 col-span-11">
        <Outlet />
      </div>
    </div>
  );
};
