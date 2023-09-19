import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../context";

export const TopBar = ({ className }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className={`flex gap-4 items-center ${className}`}>
      <h1 className="font-bold text-2xl flex-1">Dashboard</h1>
      <div className="hidden sm:flex bg-bg-10 gap-2 px-6 py-2 rounded-lg">
        <input className="bg-transparent outline-none" placeholder="search.." />
        <IoSearchOutline className="text-xl text-text-100" />
      </div>
      <IoMdNotificationsOutline className="text-2xl" />
      <img
        src={
          user.photoURL
            ? user.photoURL
            : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
        }
        className="w-[30px] h-[30px] rounded-full"
      />
    </div>
  );
};
