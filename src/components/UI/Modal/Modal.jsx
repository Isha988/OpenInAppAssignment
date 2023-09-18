import clsx from "clsx";
import { Card } from "../Card";

export const Modal = ({ isOpen, onClose, children }) => {
  return (
    <section
      className={clsx(
        "fixed top-0 right-0 left-0 bottom-0",
        "flex justify-center items-center",
        "z-10",
      )}
    >
      <div
        className={clsx(
          "bg-text-300 opacity-80",
          "absolute top-0 right-0 left-0 bottom-0 z-20",
        )}
      />
      <Card className="z-30">
        <div onClick={onClose} className="cursor-pointer">
          X
        </div>
        {children}
      </Card>
    </section>
  );
};
