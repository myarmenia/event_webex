import React, { useEffect, useRef, useState, memo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { phone } from "../../../iconsFolder/icons";
import { invitation1 } from "../images";
import {
  setDate,
  setTime,
  setFull_name,
  setAddress,
  setTell,
  setInvitation,
  setText,
} from "../../../store/slices/BirthDaySlice/BirthDaySlice";
function Main_Invitation() {
  const { t, i18n } = useTranslation();
  const { view, text, invitation, date, time, full_name, address, edit, test } =
    useSelector((store) => store.birthDay);
  const [invitationDisplay, setInvitationDisplay] = useState(false);
  const invitationRef = useRef(null);
  const [img, setImg] = useState([]);
  const [addImg, setAddImg] = useState("");
  const [date1, setDate1] = useState("");
  const [time1, setTime1] = useState("");
  const [full_name1, setFull_Name1] = useState("");
  const [tell1, setTell1] = useState("");
  const day = new Date().getDate();
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const now = `${year}-${month <= 8 ? `0${month + 1}` : `${month + 1}`}-${day}`;
  // const date2 = "2024-08-03";
  const [address1, setAddress1] = useState("");
  const dispatch = useDispatch();
  const [text1, setText1] = useState();
  // const dateArray = date ? date.split("-") : date2.split("-");
  const dateArray = date ? date.split("-") : date1.split("-");
  const invitationImg = invitation.length ? invitation : invitation1;
  useEffect(() => {
    if (addImg) {
      setImg([...img, addImg]);
    }
  }, [addImg]);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (
        invitationRef.current &&
        offset > invitationRef.current.offsetTop - 500
      ) {
        setInvitationDisplay(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setDate1(date);
  }, [date]);
  useEffect(() => {
    if (view) {
      dispatch(setText(text1));
      dispatch(setFull_name(full_name1));
      dispatch(setAddress(address1));
      dispatch(setTime(time1));
      dispatch(setTell(tell1));
      dispatch(setInvitation(img));
      dispatch(setDate(date1));
    }
  }, [view]);
  useEffect(() => {
    if (view) {
      setText1("");
      setFull_Name1("");
      setAddress1("");
      setTime1("");
      setTell1("");
      setImg([]);
      setAddImg("");
      // dispatch(setDate(date1));
    }
  }, [view]);
  return (
    <div className="main_invitation" ref={invitationRef}>
      <div className="container">
        <div className="main_invitation_content">
          {(edit || (!edit && !view) || text) && (
            <>
              <div className="invintation_text">
                <h1>{t("main_invitation.0")}</h1>
                {edit ? (
                  <p>
                    <textarea
                      value={text1 ? text1 : `${t("main_invitation.0")}`}
                      onChange={(e) => setText1(e.target.value)}
                    ></textarea>
                  </p>
                ) : !edit && !view ? (
                  <p>
                    {t("main_invitation.1")} {t("main_invitation.2")}
                  </p>
                ) : !edit && view ? (
                  <p>{text}</p>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
          <div
            className="invitation_box"
            style={{
              justifyContent: view && invitation.length === 0 && "center",
            }}
          >
            {invitationImg.length && (
              <div className="invitation_image">
                {invitationDisplay &&
                (edit || (!edit && !view) || (view && invitation.length !== 0))
                  ? invitationImg.map((el, index) => (
                      <div
                        className={`invitation_image_${index + 1}`}
                        key={index}
                      >
                        <img src={invitationImg[index]} alt="not found" />
                      </div>
                    ))
                  : ""}
              </div>
            )}
            {edit && (
              <>
                <input
                  type="file"
                  value={addImg}
                  onChange={(e) => setAddImg(e.target.value)}
                  disabled={img.length === 3 ? true : false}
                />
              </>
            )}
            {invitationDisplay && (
              <div className="invitation_blank">
                <h1>{t("main_invitation.3")}</h1>
                <div>
                  {((!edit && !view) || (view && date) || edit) && (
                    <>
                      <span>{t("main_invitation.4")}</span>
                      {((!edit && !view) || (view && date)) && (
                        <span>
                          {dateArray[1]}.{dateArray[2]}.{dateArray[0]}
                        </span>
                      )}
                    </>
                  )}
                  {edit && (
                    <p>
                      <input
                        type="date"
                        value={date1}
                        min={now}
                        onChange={(e) => setDate1(e.target.value)}
                      />
                    </p>
                  )}
                </div>
                <div>
                  {(edit || time || !view) && (
                    <span>{t("main_invitation.5")}</span>
                  )}
                  {!edit && !view && <span>17:00</span>}
                  {!edit && time && <span>{time}</span>}

                  {edit && (
                    <p>
                      <input
                        type="time"
                        value={time1}
                        onChange={(e) => setTime1(e.target.value)}
                      />
                    </p>
                  )}
                </div>
                {((!edit && !view) || full_name || edit) && (
                  <div>
                    <span>{t("main_invitation.6")}</span>
                    {!edit ? (
                      <span>
                        {full_name ? full_name : t("main_invitation.7")}
                      </span>
                    ) : (
                      <p>
                        <input
                          type="text"
                          value={full_name1}
                          placeholder="restaurant name"
                          onChange={(e) => setFull_Name1(e.target.value)}
                        />
                      </p>
                    )}
                  </div>
                )}
                <div>
                  {((!edit && !view) || address) && (
                    <span className="adress_text">
                      {address ? address : t("main_invitation.8")}
                    </span>
                  )}
                  {edit && (
                    <>
                      <p>
                        <textarea placeholder="address"></textarea>
                      </p>
                      <p style={{ position: "relative", width: "300px" }}>
                        <input
                          type="text"
                          placeholder="phone number"
                          value={tell1}
                          onChange={(e) => setTell1(e.target.value)}
                          style={{ paddingLeft: "40px" }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            top: "40%",
                            left: "10px",
                          }}
                        >
                          {phone}
                        </span>
                      </p>
                    </>
                  )}

                  <span></span>
                  {/* <span className="autor_text">{t("main_invitation.9")}</span> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Main_Invitation);
