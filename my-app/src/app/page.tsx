import React from "react";
import LeftColumn from "./components/LeftColumn";
import RightScreen from "./components/RightScreen";

const headerInfo = {
  documentType: "Demand Letter",
  user: {
    userName: "Johnnie Cochran",
    userId: "jc001",
    userPhoto: "/images/johnny.jpg",
  },
};

export default function Page() {
  return (
    <div className="flex h-screen">
      <LeftColumn />
      <RightScreen headerProps={headerInfo} />
    </div>
  );
}
