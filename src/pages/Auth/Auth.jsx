import { Outlet } from "react-router-dom";

export const Auth = () => {
  return (
    <div>
      <div>Hello</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
