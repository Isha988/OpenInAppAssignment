import { useContext } from "react";
import { AuthContext } from "../../context";
import { Button } from "../UI";
import googleLogo from "../../assests/google.svg";
import appleLogo from "../../assests/apple.svg";

export const OAuthProviders = () => {
  const { googleSignIn } = useContext(AuthContext);
  return (
    <div className="flex gap-4">
      <Button
        LeftElement={<img src={googleLogo} className="w-3.5 h-3.5" />}
        text="Sign in with Google"
        onClick={googleSignIn}
        variant="secondary"
        className="text-xs"
      />
      <Button
        LeftElement={<img src={appleLogo} className="w-3.5 h-3.5" />}
        text="Sign in with Apple"
        onClick={googleSignIn}
        variant="secondary"
        className="text-xs"
      />
    </div>
  );
};
