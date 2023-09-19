import { BiLoaderCircle } from "react-icons/bi";

export const Loader = () => {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-bg-10 flex justify-center items-center opacity-10">
      <BiLoaderCircle className="text-7xl" />
    </div>
  );
};
