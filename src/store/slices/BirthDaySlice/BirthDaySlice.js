import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  edit: false,
  defaultData: {},
  age: "",
  tell: "",
  date: "",
  time: "",
  full_name: "",
  text: "",
  test: false,
  invitation: [],
  images: [],
  address_link: "",
  address: "",
  lang: "am",
  view: false,
  modal: false,
  object: {
    name: "",
    number: null,
    message: "",
    go: "",
  },
  responseDada: {},
};
const birthDaySlice = createSlice({
  name: "birthday",
  initialState,
  reducers: {
    setEdit: (state, { payload }) => {
      state.edit = payload;
    },
    setAge: (state, { payload }) => {
      state.age = payload;
    },
    setDate: (state, { payload }) => {
      state.date = payload;
    },
    setTime: (state, { payload }) => {
      state.time = payload;
    },
    setFull_name: (state, { payload }) => {
      state.full_name = payload;
    },
    setModal: (state, { payload }) => {
      state.modal = payload;
    },
    setView: (state, { payload }) => {
      state.view = payload;
    },
    setTest: (state, { payload }) => {
      state.test = payload;
    },
    setAddress: (state, { payload }) => {
      state.address = payload;
    },
    setAddress_Link: (state, { payload }) => {
      state.address_link = payload;
    },
    setText: (state, { payload }) => {
      state.text = payload;
    },
    setInvitation: (state, { payload }) => {
      state.invitation = payload;
    },
    setImages: (state, { payload }) => {
      state.images = payload;
    },
    setTell: (state, { payload }) => {
      state.tell = payload;
    },
  },
});
export const {
  setEdit,
  setAge,
  setDate,
  setTime,
  setFull_name,
  setModal,
  setView,
  setTest,
  setAddress,
  setAddress_Link,
  setText,
  setInvitation,
  setImages,
  setTell,
} = birthDaySlice.actions;
export default birthDaySlice;
