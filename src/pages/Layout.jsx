import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <div>layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
