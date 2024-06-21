import React, { memo } from "react";
import {
  Header,
  BirthDaySection1,
  BirthDaySection2,
  Footer,
  MiniFooter,
} from "./index";
import "./birthday.css";
import BirthDayModal from "./modal/BirthDayModal";
function BirthDay() {
  return (
    <div className="birthday">
      <Header />
      <BirthDaySection1 />
      <BirthDaySection2 />
      <Footer />
      <MiniFooter />
      <BirthDayModal />
    </div>
  );
}

export default memo(BirthDay);
