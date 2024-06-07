const CustomBtnTikets2 = ({ handleClick = () => {}, btnText, background = '#c93789' }) => {
   return (
      <button
         style={{ backgroundColor: `${background}` }}
         className="customBtnTokets2"
         onClick={handleClick}>
         {btnText}
      </button>
   );
};

export default CustomBtnTikets2;
