import { Field } from "formik";
import clsx from "clsx";

export const Input = ({
  label,
  type = "text",
  name,
  placeholder,
  variant = "outline",
  className,
  error,
  touched,
  ...rest
}) => {
  return (
    <div>
      <label
        className="text-base text-text-300 capitalize block mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className={clsx(
          "rounded-lg py-2 px-4 w-full border-[1px]",
          "text-text-300 outline-none",
          variant == "outline" && ["bg-bg-10 border-text-100"],
          variant == "secondary" && ["bg-bg-100 border-bg-100 focus:bg-bg-200"],
          className,
        )}
        {...rest}
      />
      {error && touched ? (
        <p className="text-xs text-error mb-2">{error}</p>
      ) : null}
    </div>
  );
};
