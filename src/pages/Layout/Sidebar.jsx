import { Link } from "../../components";
import { AiOutlinePieChart } from "react-icons/ai";
export const Sidebar = ({ className }) => {
  return (
    <div
      className={`bg-primary-100 px-8 py-10 rounded-xl flex flex-col justify-between max-w-[240px] ${className}`}
    >
      <div className="grid gap-8">
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
        <Link text="Help" className="text-xs !justify-start" />
        <Link text="Contact Us" className="text-xs !justify-start" />
      </div>
    </div>
  );
};
