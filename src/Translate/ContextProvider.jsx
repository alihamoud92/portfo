import React, { createContext, useContext, useEffect, useState } from "react";
import Translate from "./translate.json";
import { useFETCH } from "../Tools/APIs";
const ContextAPI = createContext({});

window.localStorage.getItem("language")
  ? window.localStorage.getItem("language")
  : window.localStorage.setItem("language", "en");

const ContextProvider = ({ children }) => {
  const [translat, setTranslat] = useState(
    window.localStorage.getItem("language")
  );
  const [content, setContent] = useState({});
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("language") === "ar") {
      document.body.style.direction = "rtl";
      setContent(Translate.ar);
    }
    if (window.localStorage.getItem("language") === "en") {
      document.body.style.direction = "ltr";
      setContent(Translate.en);
    }
  }, [translat, content]);

  const changeLanguage = () => {
    setTranslat("ar");
    window.localStorage.setItem("language", "ar");
    window.location.reload();
  };
  const changeLanguage2 = () => {
    setTranslat("en");
    window.localStorage.setItem("language", "en");
    window.location.reload();
  };
  const { data, isLoading } = useFETCH(
    `get_all_site_infos?local=${localStorage.getItem("language")}`
  );
  let dataAll = data?.data.data;
  return (
    <ContextAPI.Provider
      value={{
        showPopUp,
        content,
        setShowPopUp,
        changeLanguage,
        changeLanguage2,
        isLoading,
        dataAll,
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
};

export default ContextProvider;

export const useContextTranslate = () => {
  return useContext(ContextAPI);
};
