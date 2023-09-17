import clsx from "clsx";

const Link = ({
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

export default Link;
