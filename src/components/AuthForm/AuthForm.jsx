import { OAuthProviders } from "./OAuthProviders";
import { EmailAuthForm } from "./EmailAuthForm";

export const AuthForm = ({
  heading,
  subheading,
  onSubmit,
  footertext,
  footerLink,
}) => {
  return (
    <section className="grid gap-5">
      <h1>{heading}</h1>
      <p>{subheading}</p>
      <OAuthProviders />
      <EmailAuthForm onSubmit={onSubmit}/>
      <p>
        {footertext}
        {footerLink}
      </p>
    </section>
  );
};
