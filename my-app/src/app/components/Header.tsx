import { FaRegBell } from "react-icons/fa6";
import { HeaderProps } from "../constants/types";

const Header = ({ documentType, user }: HeaderProps) => {
  return (
    <header className="flex justify-between h-[5%] p-4 bg-white border-b-[3px] border-gray-200">
      <div>
        <h1 className="text-lg font-bold">{documentType}</h1>
      </div>
      <div className="flex items-center gap-5">
        <FaRegBell />
        <img
          src={user.userPhoto}
          alt={user.userName}
          className="w-8 h-8 rounded-full"
        />
        <p className="text-sm">{user.userName}</p>
      </div>
    </header>
  );
};

export default Header;
