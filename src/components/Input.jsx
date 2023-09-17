import clsx from "clsx";

const Input = ({
  label,
  type = "text",
  name,
  placeholder,
  variant = "outline",
  className,
  //   field,
  //   form,
  //   meta,
  ...rest
}) => {
  return (
    <div>
      <label
        className="text-base text-text-300 capitalize block"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={clsx(
          "rounded-lg py-2 px-4 border-[1px]",
          "text-text-300 outline-none",
          variant == "outline" && ["bg-bg-10 border-text-100"],
          variant == "secondary" && ["bg-bg-100 border-bg-100 focus:bg-bg-200"],
          className,
        )}
        name={name}
        placeholder={placeholder}
        {...field}
        {...rest}
      />
      {meta.error && meta.touched ? <div>{error}</div> : null}
    </div>
  );
};

export default Input;
