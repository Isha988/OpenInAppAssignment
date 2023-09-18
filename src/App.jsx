import { RouterProvider } from "react-router-dom";
import { PieChart } from "./components/Dashboard/PieChart";
import { AuthProvider } from "./context";
import { router } from "./routes";

const App = () => {
  return (
    <AuthProvider>
      <PieChart />
      {/* <RouterProvider router={router} /> */}
    </AuthProvider>
  );
};

export default App;
