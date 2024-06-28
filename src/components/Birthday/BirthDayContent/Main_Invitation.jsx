import React, { useEffect, useRef, useState, memo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { phone, galeriaIcon } from "../../../iconsFolder/icons";
import { invitation1 } from "../images";
import { convertToBase64 } from "../../../utils/helperFunck";
import {
  setDate,
  setTime,
  setFull_name,
  setAddress,
  setTell,
  setInvitation,
  setText,
  setName,
} from "../../../store/slices/BirthDaySlice/BirthDaySlice";
function Main_Invitation() {
  const { t, i18n } = useTranslation();
  const {
    view,
    text,
    invitation,
    date,
    time,
    full_name,
    address,
    edit,
    test,
    name,
  } = useSelector((store) => store.birthDay);
  const [invitationDisplay, setInvitationDisplay] = useState(false);
  const invitationRef = useRef(null);
  const [img, setImg] = useState([]);
  const [date1, setDate1] = useState("");
  const [time1, setTime1] = useState("");
  const [full_name1, setFull_Name1] = useState("");
  const [tell1, setTell1] = useState("");
  const [name1, setName1] = useState("");
  const day = new Date().getDate();
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const now = `${year}-${month <= 8 ? `0${month + 1}` : `${month + 1}`}-${day}`;
  const [address1, setAddress1] = useState("");
  const dispatch = useDispatch();
  const date2 = "24-08-03";
  const [text1, setText1] = useState();
  const dateArray = date
    ? date.split("-")
    : // : date1
      // ? date1.split("-")
      date2.split("-");
  const invitationImg = invitation.length ? invitation : invitation1;
  console.log(invitationImg, "lllll");
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
    if (date) {
      setDate1(date);
    }
  }, [date]);
  useEffect(() => {
    if (date1) {
      dispatch(setDate(date1));
    }
  }, [date1]);
  useEffect(() => {
    if (view) {
      dispatch(setText(text1));
      dispatch(setFull_name(full_name1));
      dispatch(setAddress(address1));
      dispatch(setTime(time1));
      dispatch(setTell(tell1));
      dispatch(setInvitation(img));
      dispatch(setName(name1));
      setText1("");
      setFull_Name1("");
      setAddress1("");
      setTime1("");
      setTell1("");
      setImg([]);
      setName1("");
      setDate1("");
    }
  }, [view]);
  useEffect(() => {
    if (!view) {
      dispatch(setText(""));
      dispatch(setFull_name(""));
      dispatch(setAddress(""));
      dispatch(setTime(""));
      dispatch(setTell(""));
      dispatch(setInvitation(""));
      dispatch(setName(""));
      dispatch(setDate(""));
    }
  }, [view]);

  function handleChange(e) {
    if (e.target.value) {
      convertToBase64(e.target.files[0]).then((base64) => {
        setImg([...img, base64]);
      });
    }
  }

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
                      className="textarea"
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
              justifyContent: invitation.length || !view ? "" : "center",
              gap: invitation.length === 0 && view ? "" : "160px",
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
                        <img
                          src={
                            invitationImg[index].path || invitationImg[index]
                          }
                          alt="not found"
                        />
                      </div>
                    ))
                  : ""}
              </div>
            )}
            {edit && (
              <>
                <label>
                  <div className="galeria-icon">
                    {galeriaIcon} /{img.length}
                  </div>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    // value={addImg}
                    onChange={handleChange}
                    disabled={img.length === 3 ? true : false}
                  />
                </label>
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
                        value={date1 ? date1 : date2}
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
                          placeholder={`${t("main_invitation.7")}`}
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
                        <textarea
                          placeholder={`${t("placholderBirthday.0")}`}
                        ></textarea>
                      </p>
                      <p style={{ position: "relative", width: "300px" }}>
                        <input
                          type="text"
                          placeholder={`${t("placholderBirthday.1")}`}
                          value={tell1}
                          onChange={(e) =>
                            setTell1(
                              e.target.value
                                .split("")
                                .filter((char) => /^[0-9+\(\)]$/.test(char))
                                .join("")
                            )
                          }
                          style={{ paddingLeft: "40px" }}
                        />
                        <span className="phone">{phone}</span>
                      </p>
                    </>
                  )}

                  {/* <span></span> */}

                  {edit ? (
                    <>
                      {" "}
                      <span className="autor_text">
                        {t("main_invitation.9")}
                      </span>{" "}
                      <input
                        type="text"
                        value={name1}
                        placeholder={`${t("main_invitation.10")}`}
                        onChange={(e) => setName1(e.target.value)}
                      />
                    </>
                  ) : !view ? (
                    <>
                      {" "}
                      <span className="autor_text">
                        {t("main_invitation.9")}
                      </span>
                      <span className="autor_text">
                        {t("main_invitation.10")}
                      </span>
                    </>
                  ) : name ? (
                    <>
                      {" "}
                      <span className="autor_text">
                        {t("main_invitation.9")}
                      </span>
                      <span className="autor_text">{name}</span>
                    </>
                  ) : (
                    ""
                  )}
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
