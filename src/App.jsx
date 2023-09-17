import { AuthForm } from "./components/AuthForm/AuthForm";
import { AuthProvider } from "./context";

const App = () => {
  return (
    <AuthProvider>
      <AuthForm />
    </AuthProvider>
  );
};

export default App;
