import clsx from "clsx";

export const Card = ({ children, className, variant = "shadow", ...rest }) => {
  return (
    <div
      className={clsx(
        "bg-bg-10 rounded-lg p-4",
        variant == "shadow" && ["shadow-md"],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
