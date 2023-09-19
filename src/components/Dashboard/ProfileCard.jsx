import { BsWhatsapp } from "react-icons/bs";
import { Card } from "../UI";

export const ProfileCard = ({
  name,
  phone,
  email,
  instagram,
  youtube,
  className,
}) => {
  return (
    <Card className={`p-6 px-8 rpunded-xl ${className}`}>
      <h2 className="font-bold text-lg mb-8 capitalize">{name}</h2>
      <div className="flex flex-wrap gap-4">
        {/* phone and email */}
        <div className="flex-1">
          <div className="mb-4 flex gap-4 items-center">
            <div className="bg-green-100 w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <BsWhatsapp className="text-text-50" />
            </div>
            <p className="underline">{phone}</p>
          </div>
          <div className="mb-4 flex gap-4 items-center">
            <div className="bg-purple-100 w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <BsWhatsapp className="text-text-50" />
            </div>
            <p className="underline">{email}</p>
          </div>
        </div>
        {/* youtube and instagram */}
        <div className="flex-1">
          <div className="mb-4 flex gap-4 items-center">
            <div className="bg-red-100 w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <BsWhatsapp className="text-text-50" />
            </div>
            <p className="underline">{instagram ? instagram : "--"}</p>
          </div>
          <div className="mb-4 flex gap-4 items-center">
            <div className="bg-yellow-100 w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <BsWhatsapp className="text-text-50" />
            </div>
            <p className="underline">{youtube ? youtube : "--"}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
