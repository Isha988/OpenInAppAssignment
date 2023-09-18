import { AuthProvider } from "./context";
import { SignIn, SignUp } from "./pages/Auth";

const App = () => {
  return (
    <AuthProvider>
      <SignIn />
      <SignUp />
    </AuthProvider>
  );
};

export default App;
