import React, { useEffect, useState, memo } from "react";
import { postPrivateProject } from "../../../store/slices/privateProjectSlice/privateProjectApi";
import { useTranslation } from "react-i18next";
import {
  setDate,
  setModal,
  setView,
  setTest,
  setEdit,
  setAge,
  setTime,
  setName,
  setText,
  setFull_name,
  setAddress,
  setInvitation,
  setAddress_Link,
  setImages,
} from "../../../store/slices/BirthDaySlice/BirthDaySlice";
import { background, balloons } from "../../../images/BirthDayImg";
import CustomCanvas from "../../../hooks/CustomCanvas";
import { numberArray } from "../../../asets/3d_model";
import Timer from "../../timer/Timer";
import { useDispatch, useSelector } from "react-redux";
import { sectiosData } from "../../../dataFolder/data";
import { openModalPrivate } from "../../../store/slices/ModalPrivate/ModalPrivateSlice";
function BirthDayHeader() {
  const { t, i18n } = useTranslation();
  const [headerDisplay, setHeaderDisplay] = useState(false);
  const dispatch = useDispatch();
  const [date1, setDate1] = useState("");
  const [age1, setAge1] = useState("50");
  const day = new Date().getDate();
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const date2 = "2024-08-03";
  const now = `${year}-${month <= 8 ? `0${month + 1}` : `${month + 1}`}-${
    day + 1
  }`;
  const {
    age,
    date,
    edit,
    tell,
    view,
    name,
    time,
    full_name,
    address,
    address_link,
    invitation,
    images,
    text,
    test,
  } = useSelector((store) => store.birthDay);
  const [ageArray, setAgeArray] = useState([]);
  const lang = localStorage.getItem("lang");
  const dateArray = date ? date.split("-") : date2.split("-");
  useEffect(() => {
    setTimeout(() => {
      setHeaderDisplay(true);
    }, 500);
  }, []);
  useEffect(() => {
    const a = localStorage.getItem("edit");
    if (a === "true") {
      dispatch(setEdit(a));
    }
  }, []);

  useEffect(() => {
    dispatch(setAge(age1));
    if (age.length > age1.length) {
      setAgeArray(ageArray.pop());
    }
    setAgeArray(age1.split(""));
  }, [age1]);
  useEffect(() => {
    if (date1) {
      dispatch(setDate(date1));
    }
  }, [date1]);
  useEffect(() => {
    if (date) {
      setDate1(date);
    }
  }, [date]);
  useEffect(() => {
    if (!view) {
      setDate1("");
      setAge1("50");
    }
  }, [edit]);
  const EditClick = () => {
    // localStorage.setItem("edit", true);
    dispatch(setEdit(true));
    dispatch(setModal(true));
    dispatch(setView(false));
  };
  const viewClick = () => {
    // localStorage.setItem("edit", false);
    dispatch(setEdit(false));
    dispatch(setView(true));
  };
  const saveClick = () => {
    //   // const obj = {
    //   //   template_id: "2",
    //   //   template_route: "/birthDay",
    //   //   date: date,
    //   //   feedback: tell,
    //   //   age: age,
    //   //   invitation_name: name,
    //   //   sections: [
    //   //     {
    //   //       section_number: 1,
    //   //       ...(text && { text: text }),
    //   //       ...(time && { time: time }),
    //   //       ...(full_name && { full_name: full_name }),
    //   //       ...(address && { address: address }),
    //   //       ...(invitation && { images: invitation }),
    //   //     },
    //   //     {
    //   //       section_number: 2,
    //   //       ...(address_link && { address_link: address_link }),
    //   //       ...(images && { images: images }),
    //   //     },
    //   //   ].filter((item) => Object.keys(item).length !== 1),
    //   // };
    //   // console.log(obj);
    //   // dispatch(postPrivateProject(obj)).then((res) => {
    //   //   if (res.payload.data) {
    //   //     window.location.href = res.payload.data.redirect_url;
    //   //     dispatch(setTest(true));
    //   //     // dispatch(setDate(res.payload.data.date));
    //   //     // dispatch(setAge(res.payload.data.age));
    //   //     // dispatch(setName(res.payload.data.invitation_name));
    //   //     // dispatch(setTime(res.payload.data.sections[0].time));
    //   //     // dispatch(setText(res.payload.data.sections[0].text));
    //   //     // dispatch(setFull_name(res.payload.data.sections[0].full_name));
    //   //     // dispatch(setAddress(res.payload.data.sections[0].address));
    //   //     // dispatch(setInvitation(res.payload.data.sections[0].images));
    //   //     // dispatch(setAddress_Link(res.payload.data.sections[1].address_link));
    //   //     // dispatch(setImages(res.payload.data.sections[1].images));

    //   //     // sectiosData.date && dispatch(setDate(sectiosData.date));
    //   //     // sectiosData.age && dispatch(setAge(sectiosData.age));
    //   //     // sectiosData.invitation_name &&
    //   //     //   dispatch(setName(sectiosData.invitation_name));
    //   //     // sectiosData.sections[0].time &&
    //   //     //   dispatch(setTime(sectiosData.sections[0].time));
    //   //     // sectiosData.sections[0].text &&
    //   //     //   dispatch(setText(sectiosData.sections[0].text));
    //   //     // sectiosData.sections[0].full_name &&
    //   //     //   dispatch(setFull_name(sectiosData.sections[0].full_name));
    //   //     // sectiosData.sections[0].address &&
    //   //     //   dispatch(setAddress(sectiosData.sections[0].address));
    //   //     // sectiosData.sections[0].images &&
    //   //     //   dispatch(setInvitation(sectiosData.sections[0].images));
    //   //     // sectiosData.sections[1].address_link &&
    //   //     //   dispatch(setAddress_Link(sectiosData.sections[1].address_link));
    //   //     // sectiosData.sections[1].images &&
    //   //     //   dispatch(setImages(sectiosData.sections[1].images));
    //   //   }

    //   //   dispatch(openModalPrivate("birth-day"));
    //   // });
    dispatch(openModalPrivate("birth-day"));
  };
  return (
    <div
      className="birthday_header"
      style={{
        backgroundImage: `url(${background})`,
        height: "auto",
      }}
    >
      <div className="header_content">
        <div className="button_parent">
          {!edit && !test && (
            <button className="button" onClick={EditClick}>
              Edit Template
            </button>
          )}
          {edit && (
            <div>
              <button className="view button" onClick={viewClick}>
                View
              </button>
            </div>
          )}
          {tell && date && name && (
            <button className="button save" onClick={saveClick}>
              Save
            </button>
          )}
        </div>
        {headerDisplay && (
          <div className="birthday_box">
            <h1>{t("birthDayHeaderTitle.0")}</h1>
            <h2>{t("birthDayHeaderTitle.1")}</h2>
            <div className="round">
              <div className="age">
                {ageArray.length !== 0 &&
                  ageArray.map((el, index) => (
                    <div className="test1" key={index}>
                      {numberArray.map((elem, ind) =>
                        +el === ind ? (
                          <CustomCanvas
                            imgUrl={elem}
                            key={ind}
                            style={
                              age.length > 2
                                ? {
                                    width: "60px",
                                    height: "60px",
                                    background: "transparent",
                                  }
                                : {
                                    width: "100px",
                                    height: "100px",
                                    background: "transparent",
                                  }
                            }
                          />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                  ))}
              </div>
            </div>
            {edit && (
              <p>
                <input
                  type="number"
                  value={age1.length <= 5 ? age1 : setAge1("")}
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
              <p style={{ zIndex: "999999999" }}>
                <input
                  type="date"
                  value={date1 ? date1 : date2}
                  min={now}
                  onChange={(e) => setDate1(e.target.value)}
                />
              </p>
            )}

            {(date || !view) && (
              <>
                {" "}
                <p style={{ color: "white", fontSize: "32px", zIndex: "9999" }}>
                  {t("birthDay.0")}
                </p>
                <Timer allInfo={{ date: date || date2 }} />
              </>
            )}

            {headerDisplay && (
              <div
                className="balloons"
                style={{ bottom: lang === "ru" ? "-35px" : "" }}
              >
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
