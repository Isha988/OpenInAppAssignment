import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { clsx } from "clsx";
import { AuthContext } from "../../context";
import { Link, Loader } from "../../components/UI";

export const Auth = () => {
  const { isLoading } = useContext(AuthContext);
  return (
    <section
      className={clsx(
        "flex flex-col items-center justify-center gap-6 ",
        "h-full p-6 overflow-hidden",
        "md:flex-row-reverse md:p-0",
      )}
    >
      {/* forms */}
      <div className="md:flex-1 w-full md:pr-8">
        <div className="w-full max-w-[420px] m-auto md:m-0">
          {isLoading && <Loader />}
          <Outlet />
        </div>
      </div>

      {/* side box */}
      <div className={clsx("relative", "md:flex-1 md:h-full")}>
        {/* blue overlay */}
        <div
          className={clsx(
            "md:bg-primary-90",
            "md:absolute md:left-0 md:right-0 md:top-0 md:bottom-0",
            "md:rotate-12 md:-translate-x-[57%] md:-translate-y-[30%] md:h-[200%] md:w-[200%]",
          )}
        />
        {/* text */}
        <div className="z-10 relative md:h-full md:w-[75%] md:flex md:flex-col md: justify-between md:py-10 md:px-4 lg:px-10 ">
          <p className="font-bold text-xl heading md:text-text-50 hidden md:block">
            LOGO
          </p>
          <p
            className={clsx(
              "font-bold text-4xl text-center heading",
              "md:text-text-50 md:text-7xl",
            )}
          >
            Board.
          </p>
          <div className="flex gap-4 mt-4 justify-center md:gap-8">
            <Link
              LeftElement={
                <BsGithub className="text-text-300 text-2xl md:text-text-50" />
              }
            />
            <Link
              LeftElement={
                <BsGithub className="text-text-300 text-2xl md:text-text-50" />
              }
            />
            <Link
              LeftElement={
                <BsGithub className="text-text-300 text-2xl md:text-text-50" />
              }
            />
            <Link
              LeftElement={
                <BsGithub className="text-text-300 text-2xl md:text-text-50" />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
