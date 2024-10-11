import ColTextRow from "./ColTextRow";
import { ReactNode } from "react";
import CreditButton from "./CreditButton";
import UpgradeBox from "./UpgradeBox";

interface SideProps {
  icon?: ReactNode; // Keep icon as optional
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
    <div>
      <div className="flex flex-col">
        {items.map((item, index) => (
          <ColTextRow
            key={index}
            leftSide={item.leftSide}
            rightSide={item.rightSide}
          />
        ))}
      </div>
      <CreditButton />
      <UpgradeBox />
    </div>
  );
};

export default ColBottomContainer;
