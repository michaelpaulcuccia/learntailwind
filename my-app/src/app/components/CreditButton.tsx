import React from "react";

const CreditButton = () => {
  return (
    <>
      <div className="border border-white rounded-lg py-3 mt-8 mb-6 mx-auto w-[calc(100%-40px)] text-center text-white cursor-pointer">
        <strong>Buy more credits</strong>
      </div>
      <div
        className="border-b-2 border-gray-400 mx-auto mb-6"
        style={{ width: "calc(100% - 40px)", padding: "0 20px" }}
      />
    </>
  );
};

export default CreditButton;
