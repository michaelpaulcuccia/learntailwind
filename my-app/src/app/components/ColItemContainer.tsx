import IconWithText from "./IconWithText";
import { ColItemContainerProps } from "../constants/types";

const ColItemContainer = ({ items }: ColItemContainerProps) => {
  return (
    <>
      {items.map((section, index) => (
        <div className="flex flex-col items-start border-b-2 border-gray-500 px-2 mt-16 pb-2">
          <div key={index} className="mb-4">
            {section.headline && (
              <h2 className="text-lg font-semibold mb-2">{section.headline}</h2>
            )}
            {section.items.map((item, itemIndex) => (
              <IconWithText key={itemIndex} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ColItemContainer;
