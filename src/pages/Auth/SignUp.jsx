import { useContext } from "react";
import { AuthContext } from "../../context";
import { AuthForm, Link } from "../../components";

export const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  return (
    <AuthForm
      heading="sign up"
      subheading="Create your new account"
      onSubmit={signUp}
      submitButtonText="Sign Up"
      footertext="Already have an account?"
      footerLink={
        <Link
          href="/auth/signin"
          variant="primary"
          text="Login here"
          className="font-lato hover:underline hover:font-normal"
        />
      }
    />
  );
};
