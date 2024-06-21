import React from "react";
import Language from "../Language/Language";
import { useSelector } from "react-redux";

function BirthDayModal() {
  const { modal } = useSelector((store) => store.birthDay);
  return (
    <>
      {modal && (
        <div className="birthday_modal">
          <Language />
        </div>
      )}
    </>
  );
}

export default BirthDayModal;
