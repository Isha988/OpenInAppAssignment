import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { SignIn, SignUp, Auth } from "../pages/Auth";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="auth"
      element={
        <PublicRoute>
          <Auth />
        </PublicRoute>
      }
    >
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />
    </Route>,
  ),
);
