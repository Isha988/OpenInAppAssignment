import clsx from "clsx";

export const Button = ({
  LeftElement,
  text,
  RightElement,
  onClick,
  className,
  variant = "primary",
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-lg py-2 px-4 border-[1px]",
        "flex items-center gap-3",
        "shadow hover:scale-[0.99] active:shadow-none",
        variant == "primary" && [
          "bg-primary-100 border-primary-100 text-text-50 font-bold shadow-md",
        ],
        variant == "outline" && ["bg-bg-10 border-text-100 text-text-300"],
        variant == "secondary" && ["bg-bg-10 border-bg-10 text-text-200"],
        className,
      )}
      {...rest}
    >
      {LeftElement && LeftElement}
      {text}
      {RightElement && RightElement}
    </button>
  );
};
