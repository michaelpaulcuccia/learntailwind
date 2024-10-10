import { ReactNode } from "react";

type LeftColumnProps = {
  children: ReactNode;
};

const LeftColumn = ({ children }: LeftColumnProps) => {
  return (
    <div className="w-1/5 flex flex-col bg-black text-white">{children}</div>
  );
};

export default LeftColumn;
