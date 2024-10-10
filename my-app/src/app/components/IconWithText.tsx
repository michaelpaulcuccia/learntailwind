import { ReactNode } from "react";

type IconWithTextProps = {
  icon: ReactNode;
  text: string;
};

const IconWithText = ({ icon, text }: IconWithTextProps) => {
  return (
    <div className="flex items-center mb-5 ml-5">
      <span className="mr-5">{icon}</span>
      <span className="text-xl">{text}</span>
    </div>
  );
};

export default IconWithText;
