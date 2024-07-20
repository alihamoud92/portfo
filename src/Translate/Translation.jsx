import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import { useContextTranslate } from "./ContextProvider"

function Translation() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { reverse, changeLanguage, changeLanguage2 } = useContextTranslate();
  return (
    <div>
      <div
        className="relative cursor-pointer"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <div
          className={`flex items-center justify-center gap-1 ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          <MdLanguage color="#000" className="" size={30} />
          <RiArrowDownSLine
            color="#000"
            size={20}
            className={`${
              toggleMenu
                ? "rotate-180 transition-all"
                : "rotate-0 transition-all"
            }`}
          />
        </div>
        <ul
          className={`${
            toggleMenu
              ? "flex-col absolute top-8 rounded-xl text-center bg-gray-500 text-white z-50 w-24 overflow-hidden"
              : "hidden"
          }`}
        >
          <li
            className="pt-1 pb-2 rounded-b-xl cursor-pointer hover:bg-[#FCD68B] hover:text-[#375499]"
            onClick={changeLanguage2}
          >
            English
          </li>
          <li
            className="border-b pb-1 pt-2 rounded-t-xl cursor-pointer hover:bg-[#FCD68B] hover:text-[#375499]"
            onClick={changeLanguage}
          >
            العربية
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Translation;
