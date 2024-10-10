import ColItemContainer from "./ColItemContainer";
import { IoHomeOutline } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";

const LeftColumn = () => {
  const newItems = [
    {
      items: [
        { icon: <IoHomeOutline fontSize={35} />, text: "Home" },
        { icon: <GoChecklist fontSize={35} />, text: "Matter" },
      ],
    },
    {
      headline: "Create Draft",
      items: [
        { icon: <IoHomeOutline fontSize={35} />, text: "Home" },
        { icon: <GoChecklist fontSize={35} />, text: "Matter" },
      ],
    },
    {
      headline: "Chat",
      items: [
        { icon: <IoHomeOutline fontSize={35} />, text: "Home" },
        { icon: <GoChecklist fontSize={35} />, text: "Matter" },
      ],
    },
  ];

  return (
    <div className="w-1/5 flex flex-col bg-black text-white">
      <img
        src="/images/novo.svg"
        alt="Novo"
        className="w-[116px] h-[38px] mx-auto mt-5"
      />
      <ColItemContainer items={newItems} />
    </div>
  );
};

export default LeftColumn;
