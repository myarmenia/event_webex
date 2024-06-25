import React, { memo, useEffect } from "react";
import {
  Header,
  BirthDaySection1,
  BirthDaySection2,
  Footer,
  MiniFooter,
} from "./index";
import "./birthday.css";
import BirthDayModal from "./modal/BirthDayModal";
import { sectiosData } from "../../dataFolder/data";
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
} from "../../store/slices/BirthDaySlice/BirthDaySlice";
import { useDispatch, useSelector } from "react-redux";
function BirthDay() {
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
    modal,
  } = useSelector((store) => store.birthDay);
  const dispatch = useDispatch();
  const editModal = localStorage.getItem("edit");
  useEffect(() => {
    if (modal === false && !editModal) {
      dispatch(setModal(false));
    }

    setTimeout(() => {
      localStorage.removeItem("edit");
    }, 2000);
  }, [modal]);
  // useEffect(() => {
  //   sectiosData.date && dispatch(setDate(sectiosData.date));
  //   sectiosData.age && dispatch(setAge(sectiosData.age));
  //   sectiosData.invitation_name &&
  //     dispatch(setName(sectiosData.invitation_name));
  //   sectiosData.sections &&
  //     sectiosData?.sections[0].time &&
  //     dispatch(setTime(sectiosData.sections[0].time));
  //   sectiosData.sections &&
  //     sectiosData?.sections[0].text &&
  //     dispatch(setText(sectiosData.sections[0].text));
  //   sectiosData.sections &&
  //     sectiosData?.sections[0].full_name &&
  //     dispatch(setFull_name(sectiosData.sections[0].full_name));
  //   sectiosData.sections &&
  //     sectiosData?.sections[0].address &&
  //     dispatch(setAddress(sectiosData.sections[0].address));
  //   sectiosData.sections &&
  //     sectiosData?.sections[0].images &&
  //     dispatch(setInvitation(sectiosData.sections[0].images));
  //   sectiosData.sections &&
  //     sectiosData?.sections[1].address_link &&
  //     dispatch(setAddress_Link(sectiosData.sections[1].address_link));
  //   sectiosData.sections &&
  //     sectiosData?.sections[1].images &&
  //     dispatch(setImages(sectiosData.sections[1].images));
  // }, [sectiosData]);
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
