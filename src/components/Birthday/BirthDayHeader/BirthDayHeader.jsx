import React, { useEffect, useState, memo } from "react";
import { useTranslation } from "react-i18next";
import {
  setDate,
  setModal,
  setView,
  setTest,
} from "../../../store/slices/BirthDaySlice/BirthDaySlice";
// import Language from "../../language/Language";
import { background, balloons } from "../../../images/BirthDayImg";
import CustomCanvas from "../../../hooks/CustomCanvas";
import {
  setEdit,
  setAge,
} from "../../../store/slices/BirthDaySlice/BirthDaySlice";
import Timer from "../../timer/Timer";
import {
  number0,
  number1,
  number2,
  number3,
  number4,
  number5,
  number6,
  number7,
  number8,
  number9,
} from "../../../asets/3d_models";
import { useDispatch, useSelector } from "react-redux";
const numberArray = [
  number0,
  number1,
  number2,
  number3,
  number4,
  number5,
  number6,
  number7,
  number8,
  number9,
];
function BirthDayHeader() {
  const { t, i18n } = useTranslation();
  const [headerDisplay, setHeaderDisplay] = useState(false);
  const dispatch = useDispatch();
  const [date1, setDate1] = useState("2024-08-03");
  const [age1, setAge1] = useState("50");
  const day = new Date().getDate();
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const now = `${year}-${month <= 8 ? `0${month + 1}` : `${month + 1}`}-${day}`;
  // console.log(now);
  const { age, date, edit, tell, view, test } = useSelector(
    (store) => store.birthDay
  );
  const [ageArray, setAgeArray] = useState([]);
  // const age2 = "50";
  // const ageArray2 = age2.split("");
  // const date2 = "2024-08-03";
  // const dateArray = date ? date.split("-") : date2.split("-");
  const dateArray = date.split("-");
  useEffect(() => {
    setTimeout(() => {
      setHeaderDisplay(true);
    }, 500);

    console.log("barev");
  }, []);
  useEffect(() => {
    dispatch(setAge(age1));
    if (age.length > age1.length) {
      setAgeArray(ageArray.pop());
    }
    setAgeArray(age1.split(""));

    // setAgeArray([...new Array(age1.length)]);
  }, [age1]);
  useEffect(() => {
    dispatch(setDate(date1));
  }, [date1]);
  useEffect(() => {
    if (!view) {
      setDate1("2024-08-03");
      setAge1("50");
    }
  }, [edit]);

  return (
    <div
      className="birthday_header"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="header_content">
        <div className="button_parent">
          {!edit && (
            <button
              className="button"
              onClick={() => {
                dispatch(setEdit(true));
                dispatch(setModal(true));
                dispatch(setView(false));
              }}
            >
              Edit Template
            </button>
          )}
          {edit && (
            <div>
              <button
                className="view button"
                onClick={(e) => {
                  dispatch(setEdit(false));
                  dispatch(setView(true));
                }}
              >
                View
              </button>
            </div>
          )}
          {tell && date && <button className="button save">Save</button>}
        </div>
        {headerDisplay && (
          <div
            className="birthday_box"
            style={{ marginTop: view && !date && "150px" }}
          >
            <h1>{t("birthDayHeaderTitle.0")}</h1>
            <h2>{t("birthDayHeaderTitle.1")}</h2>
            <div className="round">
              <div className="age">
                {ageArray.length !== 0 &&
                  ageArray.map((el, index) => (
                    <div className="test1" key={index}>
                      {/* <CustomCanvas
                      imgUrl={numberArray.find((_, ind) => ind === +age[index])}
                    /> */}
                      {numberArray.map((elem, ind) =>
                        +el === ind ? (
                          <CustomCanvas imgUrl={elem} key={ind} />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    //   ))
                    // : ageArray2.map((el, index) => (
                    //     <div className="test1" key={index}>
                    //       {numberArray.map((elem, ind) =>
                    //         +el === ind ? (
                    //           <CustomCanvas imgUrl={elem} key={ind} />
                    //         ) : (
                    //           ""
                    //         )
                    //       )}
                    //     </div>
                  ))}
              </div>
            </div>
            {edit && (
              <p>
                <input
                  type="number"
                  value={age1}
                  onChange={(e) => setAge1(e.target.value)}
                />
              </p>
            )}
            {((!edit && !view) || (view && date)) && (
              <span>
                {dateArray[1]} . {dateArray[2]} . {dateArray[0]}
              </span>
            )}
            {edit && (
              <p>
                <input
                  type="date"
                  required
                  value={date1}
                  min={now}
                  onChange={(e) => setDate1(e.target.value)}
                />
              </p>
            )}
            {((!edit && !view) || edit || (view && date)) && (
              <>
                <p style={{ color: "white", fontSize: "32px" }}>
                  {t("birthDay.0")}
                </p>
                <Timer />
              </>
            )}

            {headerDisplay && (
              <div className="balloons">
                <img src={balloons} alt="not found" />
              </div>
            )}
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  );
}

export default memo(BirthDayHeader);
