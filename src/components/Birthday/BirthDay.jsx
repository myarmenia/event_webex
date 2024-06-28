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
import { selectProjectData } from "../../store/slices/GetProjectSlice/GetProjectSlice";
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
  const respProjectData = useSelector(selectProjectData);
  useEffect(() => {
    if (modal === false && !editModal) {
      dispatch(setModal(false));
    }

    setTimeout(() => {
      localStorage.removeItem("edit");
    }, 2000);
  }, [modal]);
  useEffect(() => {
    respProjectData?.data && dispatch(setDate(respProjectData?.data?.date));
    sectiosData.age && dispatch(setAge(sectiosData.age));
    respProjectData?.data?.invitation_name &&
      dispatch(setName(sectiosData.invitation_name));
    respProjectData?.data?.sections &&
      respProjectData?.data?.sections[0].time &&
      dispatch(setTime(respProjectData?.data?.sections[0].time));
    respProjectData?.data?.sections &&
      respProjectData?.data?.sections[0].text &&
      dispatch(setText(respProjectData?.data.sections[0].text));
    respProjectData?.data?.sections &&
      respProjectData?.data?.sections[0].full_name &&
      dispatch(setFull_name(respProjectData?.data.sections[0].full_name));
    respProjectData?.data?.sections &&
      respProjectData?.data?.sections[0].address &&
      dispatch(setAddress(respProjectData?.data?.sections[0].address));
    respProjectData?.data?.sections &&
      respProjectData?.data?.sections[0].images &&
      dispatch(setInvitation(respProjectData.data?.sections[0].images));
    respProjectData?.data?.sections &&
      respProjectData?.data?.sections[1].address_link &&
      dispatch(
        setAddress_Link(respProjectData?.data?.sections[1].address_link)
      );
    respProjectData?.data?.sections &&
      respProjectData?.data?.sections[1].images &&
      dispatch(setImages(respProjectData?.data?.sections[1].images));
  }, [respProjectData.data]);

  console.log(respProjectData.data, "9999");
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
