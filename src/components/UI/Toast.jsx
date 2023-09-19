import clsx from "clsx";
import { useState } from "react";
import { Card } from "./Card";

export const Toast = ({ message }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <Card
          className={clsx(
            "p-4 w-[90%] max-w-[400px] rounded border-b-2 border-error",
            "fixed right-6 top-6 z-[100]",
          )}
        >
          <div
            onClick={() => {
              setShow(false);
            }}
            className="cursor-pointer text-error hover:text-red-200 float-right"
          >
            X
          </div>
          <p className="text-error">{message}</p>
        </Card>
      )}
    </>
  );
};
