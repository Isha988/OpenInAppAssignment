import clsx from "clsx";
import { Card } from "../Card";
import { Button } from "../Button";

export const Modal = ({ isOpen, onClose, heading, children, className }) => {
  return (
    <section
      className={clsx(
        "fixed top-0 right-0 left-0 bottom-0",
        "flex justify-center items-center",
        "z-10 p-4",
        isOpen && ["block"],
        !isOpen && ["hidden"],
      )}
    >
      <div
        className={clsx(
          "bg-text-300 opacity-80",
          "absolute top-0 right-0 left-0 bottom-0 z-20",
        )}
      />
      <Card className={clsx("z-30", className)}>
        <div className="flex items-center justify-between gap-4 pb-2 mb-4 border-b-2 border-bg-200">
          <p className="capitalize text-xl font-medium">{heading}</p>
          <Button
            onClick={onClose}
            variant="secondary"
            text="X"
            className="hover:text-text-300 shadow-none"
          />
        </div>
        {children}
      </Card>
    </section>
  );
};
