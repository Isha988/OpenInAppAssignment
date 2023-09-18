import { RouterProvider } from "react-router-dom";
import { BarChart } from "./components/Dashboard/BarChart";
import { PieChart } from "./components/Dashboard/PieChart";
import { Modal } from "./components/UI/Modal";
import { AuthProvider } from "./context";
import { router } from "./routes";

const App = () => {
  return (
    <AuthProvider>
      {/* <PieChart />
      <BarChart /> */}
      {/* <RouterProvider router={router} /> */}
      {/* <Modal heading="add New profile" isOpen={isOpen} onClose={onClose}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
          error soluta excepturi repellat doloremque asperiores consectetur
          sapiente, expedita facilis tenetur, delectus unde deserunt autem
          saepe! Ipsum tenetur tempora dignissimos dolores.
        </p>
      </Modal> */}
    </AuthProvider>
  );
};

export default App;
