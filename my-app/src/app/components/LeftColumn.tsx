import ColItemContainer from "./ColItemContainer";
import { IoHomeOutline } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";
import { MdOutlineMedicalServices } from "react-icons/md";
import { LuMailOpen } from "react-icons/lu";
import { PiChats } from "react-icons/pi";

const LeftColumn = () => {
  const newItems = [
    {
      items: [
        { icon: <IoHomeOutline fontSize={24} />, text: "Home" },
        { icon: <GoChecklist fontSize={24} />, text: "Matter" },
      ],
    },
    {
      headline: "Create Draft",
      items: [
        {
          icon: <MdOutlineMedicalServices fontSize={24} />,
          text: "Medical Chronology",
        },
        { icon: <LuMailOpen fontSize={24} />, text: "Demand Letter" },
      ],
    },
    {
      headline: "Chat",
      items: [{ icon: <PiChats fontSize={24} />, text: "Doc Chat" }],
    },
  ];

  return (
    <div className="w-1/5 flex flex-col bg-black text-white">
      <img
        src="/images/novo.svg"
        alt="Novo"
        className="w-[116px] h-[38px] mx-auto mt-5 mb-5"
      />
      <ColItemContainer items={newItems} />
    </div>
  );
};

export default LeftColumn;
