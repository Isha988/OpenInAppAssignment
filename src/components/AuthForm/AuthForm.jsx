import { OAuthProviders } from "./OAuthProviders";
import { EmailAuthForm } from "./EmailAuthForm";

export const AuthForm = ({
  heading,
  subheading,
  onSubmit,
  submitButtonText,
  footertext,
  footerLink,
}) => {
  return (
    <section className="grid gap-5">
      <div>
        <h1 className="font-bold text-4xl mb-1 capitalize">{heading}</h1>
        <p>{subheading}</p>
      </div>
      <OAuthProviders />
      <EmailAuthForm onSubmit={onSubmit} submitButtonText={submitButtonText} />
      <p className="text-text-100 text-center">
        {footertext} {footerLink}
      </p>
    </section>
  );
};
