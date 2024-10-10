import { ReactNode } from "react";

type BodyProps = {
  children?: ReactNode;
};

const Body = ({ children }: BodyProps) => {
  return <main className="flex-1 p-4 bg-white">{children}</main>;
};

export default Body;
