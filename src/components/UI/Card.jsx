import clsx from "clsx";

const Card = ({ children, className, variant = "normal", ...rest }) => {
  return (
    <div
      className={clsx(
        "bg-bg-10 rounded-lg py-16",
        variant == "shadow" && ["shadow-lg"],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
