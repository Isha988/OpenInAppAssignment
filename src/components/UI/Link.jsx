import clsx from "clsx";

export const Link = ({
  LeftElement,
  text,
  RightElement,
  href = "#",
  className,
  variant = "secondary",
  ...rest
}) => {
  return (
    <a
      href={href}
      className={clsx(
        "inline-flex items-center justify-around gap-1",
        "hover:font-bold",
        variant == "primary" && ["text-primary-100"],
        variant == "secondary" && ["text-text-50"],
        className,
      )}
      {...rest}
    >
      {LeftElement && LeftElement}
      {text && text}
      {RightElement && RightElement}
    </a>
  );
};
