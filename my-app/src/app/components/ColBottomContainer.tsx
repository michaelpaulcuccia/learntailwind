import ColTextRow from "./ColTextRow";
import { ReactNode } from "react";

interface SideProps {
  icon?: ReactNode;
  text: string;
}

interface BottomItem {
  leftSide?: SideProps;
  rightSide?: SideProps;
}

interface ColBottomContainerProps {
  items: BottomItem[];
}

const ColBottomContainer = ({ items }: ColBottomContainerProps) => {
  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <ColTextRow
          key={index}
          leftSide={item.leftSide}
          rightSide={item.rightSide}
        />
      ))}
    </div>
  );
};

export default ColBottomContainer;
