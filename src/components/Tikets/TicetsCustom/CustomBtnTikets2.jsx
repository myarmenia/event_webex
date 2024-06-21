import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { openModalPrivate } from "../../../store/slices/ModalPrivate/ModalPrivateSlice";

const CustomBtnTikets2 = ({ handleClick = () => {}, btnText, background = '#c93789', customClass = '', handleOpenLengModal = () => {} }) => {
   const [count, setCount] = useState(1);
    const handleBtnClick = () => {
        handleClick();
        if (btnText === 'View') {
            setCount(count + 1);
            console.log(count, 'count');
        }
        if (count === 1 && btnText === 'Edit') {
            handleOpenLengModal();
            console.log(count, 'test');
        }
    };

    return (
        <button
            style={{ backgroundColor: `${background}` }}
            className={`customBtnTokets2 ${customClass}`}
            onClick={handleBtnClick}
        >
            {btnText}
        </button>
    );
};

export default CustomBtnTikets2;
