import { Outlet } from "react-router-dom";
import { TopBar } from "./TopBar";

export const Layout = () => {
  return (
    <div className="p-6">
      <TopBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
