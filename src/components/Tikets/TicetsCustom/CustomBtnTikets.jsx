const CustomBtnTikets = ({ handleClick = () => {}, btnText }) => {
   return (
      <button className="customBtnTokets" onClick={handleClick}>
         {btnText}
      </button>
   );
};

export default CustomBtnTikets;
