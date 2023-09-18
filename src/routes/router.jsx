import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivatedRoute";
import { SignIn, SignUp, Auth } from "../pages/Auth";
import {Dashboard, Layout } from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={
        <PrivateRoute><Layout/></PrivateRoute>
      }>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Route>
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
      </Route>
    </Route>
  ),
);
