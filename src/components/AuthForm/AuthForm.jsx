import { OAuthProviders } from "./OAuthProviders";

export const AuthForm = ({
  heading,
  subheading,
  onSubmit,
  footertext,
  footerLink,
}) => {
  return (
    <section>
      <h1>{heading}</h1>
      <p>{subheading}</p>
      <OAuthProviders />
      {/* <EmailAuthForm onSubmit={onSubmit} /> */}
      <p>
        {footertext}
        {footerLink}
      </p>
    </section>
  );
};
