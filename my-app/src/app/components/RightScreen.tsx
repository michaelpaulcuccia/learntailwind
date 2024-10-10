import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { UserInfoProps } from "../constants/types";

const RightScreen = ({ headerProps }: UserInfoProps) => {
  return (
    <div className="w-4/5 flex flex-col h-screen">
      <Header {...headerProps} />
      <Body />
      <Footer />
    </div>
  );
};

export default RightScreen;
