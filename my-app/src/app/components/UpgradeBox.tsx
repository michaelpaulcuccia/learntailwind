import React from "react";

const Box = () => {
  return (
    <div className="bg-sky-700 rounded-lg mt-1 mb-2 mx-5 p-4 flex flex-col items-center text-white">
      <h2 className="text-lg font-bold mb-1">Upgrade Your Plan</h2>
      <p className="flex items-center">
        Your trial ends in:
        <span className="bg-sky-400 text-black rounded px-2 py-1 ml-2">
          7 days
        </span>
      </p>
    </div>
  );
};

export default Box;
