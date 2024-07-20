import React from "react";
import MainButton from "./MainButton";

const Back = ({ name, onClick, link }) => {
  return (
    <div className=" gap-5  ">
      <MainButton
        link={link || ""}
        onClick={onClick}
        name={name}
        className={`bg-yellow-700 px-4 text-white hover:bg-opacity-75 rounded-full  ${
          name ? "" : "hidden"
        }`}
      />
      <MainButton
        className="py-2 px-5 bg-yellow-700 !w-full rounded-full "
        name="تراجع"
        onClick={() => window.history.go(-1)}
      />
    </div>
  );
};

export default Back;
