import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { UserInfoProps } from "../constants/types";

const RightScreen = ({ headerProps }: UserInfoProps) => {
  return (
    <div className="w-full flex flex-col h-screen">
      {" "}
      <Header {...headerProps} />
      <Body />
      <Footer />
    </div>
  );
};

export default RightScreen;
