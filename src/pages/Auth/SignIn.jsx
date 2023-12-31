import { useContext } from "react";
import { AuthContext } from "../../context";
import { AuthForm, Link, Toast } from "../../components";

export const SignIn = () => {
  const { signIn, error, isLoading } = useContext(AuthContext);
  return (
    <>
      <AuthForm
        heading="sign in"
        subheading="Sign in to your account"
        onSubmit={signIn}
        submitButtonText="Sign In"
        footertext="Don't have an account?"
        footerLink={
          <Link
            href="/auth/signup"
            variant="primary"
            text="Register here"
            className="font-lato hover:underline hover:font-normal"
          />
        }
      />
      {error && <Toast message={error} />}
    </>
  );
};
