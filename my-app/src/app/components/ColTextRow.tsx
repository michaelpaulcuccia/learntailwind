import { ReactNode } from "react";

type ColTextRowProps = {
  leftSide?: { icon?: ReactNode; text: string };
  rightSide?: { icon?: ReactNode; text: string };
};

const ColTextRow = ({ leftSide, rightSide }: ColTextRowProps) => {
  return (
    <div className="flex justify-between items-center px-2 pr-5 mb-5">
      {leftSide && (
        <div className="flex items-center">
          <span className="ml-5 mr-5">{leftSide.text}</span>
          {leftSide.icon}
        </div>
      )}
      {rightSide && (
        <div className="flex items-center">
          <span className="ml-5">{rightSide.text}</span>
          {rightSide.icon}
        </div>
      )}
    </div>
  );
};

export default ColTextRow;
