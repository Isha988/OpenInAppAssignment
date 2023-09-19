import { useState } from "react";
import clsx from "clsx";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { Button, Link } from "../../components";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiUpArrow } from "react-icons/bi";

export const Sidebar = ({ className }) => {
  const { signOut } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* sidebar */}
      <div
        className={clsx(
          "bg-primary-100 px-8 py-10 rounded-xl overflow-auto hideScrollbar",
          "flex-col justify-between w-[240px] absolute",
          !isOpen && ["hidden"],
          isOpen && ["flex h-[95%] shadow-2xl z-10"],
          "lg:!relative lg:!flex",
          className,
        )}
      >
        <div className="grid gap-8 mb-10">
          <p className="heading text-text-50 font-bold text-4xl">Board.</p>
          <Link
            text="Dashboard"
            LeftElement={<AiOutlinePieChart className="text-xl mr-1" />}
            className="font-bold !justify-start"
          />
          <Link
            text="Transactions"
            LeftElement={<AiOutlinePieChart className="text-xl mr-1" />}
            className="!justify-start"
          />
          <Link
            text="Schedule"
            LeftElement={<AiOutlinePieChart className="text-xl mr-1" />}
            className="!justify-start"
          />
          <Link
            text="Users"
            LeftElement={<AiOutlinePieChart className="text-xl mr-1" />}
            className="!justify-start"
          />
          <Link
            text="Settings"
            LeftElement={<AiOutlinePieChart className="text-xl mr-1" />}
            className="!justify-start"
          />
        </div>
        <div className="grid gap-2 float-bottom">
          <div
            className="text-sm !justify-start cursor-pointer text-text-50"
            onClick={signOut}
          >
            Sign Out
          </div>
          <Link text="Help" className="text-xs !justify-start" />
          <Link text="Contact Us" className="text-xs !justify-start" />
        </div>
      </div>

      {/* open button */}
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="lg:hidden absolute bottom-10 right-10 z-10 !rounded-full w-[50px] h-[50px]"
        LeftElement={<BiUpArrow className="text-4xl" />}
      />

      {/* overlay */}
      <div
        className={clsx(
          "fixed top-0 right-0 bottom-0 left-0 bg-text-300 opacity-5 z-5",
          isOpen && ["block"],
          !isOpen && ["hidden"],
        )}
      />
    </>
  );
};
