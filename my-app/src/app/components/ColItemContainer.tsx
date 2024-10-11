import IconWithText from "./IconWithText";
import { ColItemContainerProps } from "../constants/types";

const ColItemContainer = ({ items }: ColItemContainerProps) => {
  return (
    <>
      {items.map((section, index) => (
        <div key={index} className="flex flex-col items-start px-2 mt-10 pb-2">
          <div className="mb-4">
            {section.headline && (
              <h2 className="text-lg font-semibold mb-4">{section.headline}</h2>
            )}
            {section.items.map((item, itemIndex) => (
              <IconWithText key={itemIndex} icon={item.icon} text={item.text} />
            ))}
          </div>
          {(index === 0 || index === 1) && (
            <div
              className="border-b-2 border-gray-400 mx-auto"
              style={{ width: "calc(100% - 40px)", padding: "0 20px" }}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default ColItemContainer;
