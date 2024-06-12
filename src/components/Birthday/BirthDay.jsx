import React, { memo, useEffect } from "react";
import { Header, Section1, Section2, Footer, MiniFooter } from "./index";
import "./birthday.css";
import { setEdit } from "../../store/slices/BirthDaySlice/BirthDaySlice";
function BirthDay() {
  // useEffect(() => {
  //   if (localStorage.getItem("activeInputs") === "true") {
  //     setEdit(true);
  //   }

  //   console.log(localStorage.getItem("activeInputs"));
  // }, [localStorage.getItem("activeInputs")]);

  return (
    <div className="birthday">
      <Header />
      <Section1 />
      <Section2 />
      <Footer />
      <MiniFooter />
    </div>
  );
}

export default memo(BirthDay);
