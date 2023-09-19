import { clsx } from "clsx";
import { Card, useModal } from "../UI";
import { AddProfileForm } from "./AddProfileForm";

export const AddProfileCard = ({ className, setProfiles }) => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <>
      <Card
        className={`p-6 px-8 rpunded-xl flex justify-center items-center flex-col ${className}`}
      >
        <div
          className={clsx(
            "w-20 h-20 rounded-full mb-2",
            "bg-bg-100 cursor-pointer",
            "flex justify-center items-center",
          )}
          onClick={onOpen}
        >
          <p className="text-text-100 font-light text-6xl">+</p>
        </div>
        <p className="text-text-200 font-medium">Add Profile</p>
      </Card>
      {isOpen && (
        <AddProfileForm
          isOpen={isOpen}
          onClose={onClose}
          setProfiles={setProfiles}
        />
      )}
    </>
  );
};
