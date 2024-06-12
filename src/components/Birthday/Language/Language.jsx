import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  setEdit,
  setModal,
} from "../../../store/slices/BirthDaySlice/BirthDaySlice";
import i18n from "../../../translatedFolder/i18n";
import { useDispatch } from "react-redux";
import { circle, check } from "../../../iconsFolder/icons";
const languageArray = [
  { lang: "am", name: "Armenian" },
  { lang: "ru", name: "Russian" },
  { lang: "en", name: "English" },
];
function Language() {
  const { t, i18n } = useTranslation();
  const dispath = useDispatch();
  const checkLang = localStorage.getItem("lang");
  // const prevLng = localStorage.getItem("lang");
  const changelanguage = (lng) => {
    const prevLng = localStorage.getItem("lang");
    i18n.changeLanguage(lng);
    const pathName = window.location.pathname;
    const result = pathName.replace("/" + prevLng, "/" + lng);
    localStorage.setItem("lang", lng);
    dispath(setModal(false));
    window.location.href = result;
    localStorage.setItem("activeInputs", "true");
  };

  return (
    <div className="menu_language1">
      {/* <input
        className="toggle"
        id="menu"
        type="checkbox"
        placeholder="Language"
      /> */}
      {/* <label className="style" htmlFor="menu"> */}
      <p className="fa fa-bars">LANGUAGE</p>
      <p>Select the language of the invitation card</p>
      {/* </label> */}
      {languageArray.map((el, index) => (
        <p
          key={index}
          className="tab1"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "start",
            width: "100px",
            margin: "0 auto",
          }}
        >
          <span
            className="round"
            id={el.lang}
            onClick={(e) => {
              changelanguage(e.target.id);
              // localStorage.setItem("leng", JSON.stringify(el.lang));
            }}
          >
            {checkLang === el.lang && check}
          </span>
          <span> {el.name}</span>
        </p>
      ))}

      {/* <div className="tab1">
        <p id="am" onClick={(e) => changelanguage(e.target.id)}>
          Arm
        </p>
      </div>
      <div className="tab1">
        <p id="ru" onClick={(e) => changelanguage(e.target.id)}>
          Ru
        </p>
      </div>
      <div className="tab1">
        <p id="en" onClick={(e) => changelanguage(e.target.id)}>
          Eng
        </p>
      </div> */}
    </div>
  );
}

export default memo(Language);
