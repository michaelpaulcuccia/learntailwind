import React from "react";

const UpgradeBox = () => {
  return (
    <div className="bg-sky-700 rounded-lg mt-1 mb-4 mx-5 p-4 flex flex-col items-center text-white">
      <h2 className="text-lg font-bold mb-2">Upgrade Your Plan</h2>
      <p className="mb-2">
        Your trial ends in:{" "}
        <span className="bg-sky-400 text-black px-2 py-1 rounded">
          <strong>7 days</strong>
        </span>
      </p>
      <div className="bg-white text-black rounded-lg w-full mx-2 my-2 p-2 text-center">
        <strong>Upgrade Plan</strong>
      </div>
    </div>
  );
};

export default UpgradeBox;
