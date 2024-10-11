import ColItemContainer from "./ColItemContainer";
import ColBottomContainer from "./ColBottomContainer";
import { IoHomeOutline } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";
import { MdOutlineMedicalServices } from "react-icons/md";
import { LuMailOpen } from "react-icons/lu";
import { PiChats } from "react-icons/pi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RxCaretRight } from "react-icons/rx";

const LeftColumn = () => {
  const topItems = [
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

  const bottomItems = [
    {
      leftSide: { text: "Trial limits" },
      rightSide: { text: "Usage", icon: <RxCaretRight fontSize={20} /> },
    },
    {
      leftSide: {
        text: "Credits",
        icon: <IoIosInformationCircleOutline fontSize={20} />,
      },
      rightSide: { text: "100" },
    },
  ];

  return (
    <div className="w-1/5 flex flex-col bg-black text-gray-400 justify-between">
      <div>
        <img
          src="/images/novo.svg"
          alt="Novo"
          className="w-[116px] h-[38px] mx-auto mt-5 mb-5"
        />
        <ColItemContainer items={topItems} />
      </div>
      <ColBottomContainer items={bottomItems} />
    </div>
  );
};

export default LeftColumn;
