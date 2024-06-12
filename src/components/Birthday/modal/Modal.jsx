import React from "react";
import Language from "../Language/Language";
import { useSelector } from "react-redux";

function Modal() {
  const { modal } = useSelector((store) => store.birthDay);
  return (
    <>
      {modal && (
        <div className="birth_day_modal_bacground">
          <div className="birth_day_modal_block">
            <Language />
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
