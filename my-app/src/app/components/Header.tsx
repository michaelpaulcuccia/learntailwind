import { HeaderProps } from "../constants/types";
import { FaRegBell } from "react-icons/fa6";
import { PiCaretDown } from "react-icons/pi";

const Header = ({ documentType, user }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center h-16 px-6 bg-white border-b-[3px] border-gray-200">
      <div className="flex items-center min-h-[30px]">
        <h1 className="text-lg font-bold ">{documentType}</h1>
      </div>
      <div className="flex items-center gap-5">
        <FaRegBell className="text-lg" />
        <img
          src={user.userPhoto}
          alt={user.userName}
          className="w-8 h-8 rounded-full"
        />
        <p className="text-sm m-0">{user.userName}</p>
        <PiCaretDown className="text-lg" />
      </div>
    </header>
  );
};

export default Header;
