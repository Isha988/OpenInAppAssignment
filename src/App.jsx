import { RouterProvider } from "react-router-dom";
import { BarChart } from "./components/Dashboard/BarChart";
import { PieChart } from "./components/Dashboard/PieChart";
import { AuthProvider } from "./context";
import { router } from "./routes";

const App = () => {
  return (
    <AuthProvider>
      {/* <PieChart />
      <BarChart /> */}
      {/* <RouterProvider router={router} /> */}
    </AuthProvider>
  );
};

export default App;
