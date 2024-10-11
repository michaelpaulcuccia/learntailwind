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
    <>
      <div className="flex h-screen showContent">
        <LeftColumn />
        <RightScreen headerProps={headerInfo} />
      </div>
      <div className="showUseDesktop">
        This application is meant to be viewed on a desktop
      </div>
    </>
  );
}
