import React from "react";
import "./ModalPrivate.css";
import { rightIconArrow } from "../../iconsFolder/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModalPrivate,
  modalPrivateSelectorType,
} from "../../store/slices/ModalPrivate/ModalPrivateSlice";
import { selectDefaultData } from "../../store/slices/Tikets/tiketsSlice";
import { postPrivateProject } from "../../store/slices/privateProjectSlice/privateProjectApi";
import { allInfoSelector } from "../../store/slices/ChangeInfoSlice/ChangeInfoSlice";
import { selectProjectLoading } from "../../store/slices/GetProjectSlice/GetProjectSlice";

function ModalPrivate() {
  const dispatch = useDispatch();
  const allInfoPromNight = useSelector(selectDefaultData);
  const selectTypeModal = useSelector(modalPrivateSelectorType);
  const allInfo = useSelector(allInfoSelector);
  const loadSpinner = useSelector(selectProjectLoading);

  const tarifData = [
    {
      id: "1",
      name: "Basic",
      price: "4950 AMD",
      desc: "1 invitation card",
      infoTitle: "You can create one invitation that includes",
      infoText: "",
      infoItems: [
        "1. you will automatically create the appropriate one for you",
        "2. You will be able to quickly distribute invitations via Qr code",
        "3)  You will receive the guest list on the phone number you sent",
      ],
    },
    {
      id: "2",
      name: "Standart",
      price: "35000 AMD",
      desc: "3 months + 1 month free",
      infoTitle: "You can create one invitation that include",
      infoText:
        " As part of this package you will receive a code with which you will generate invitation cards as part of the package.",
      infoItems: [
        "1. you will automatically create the appropriate one for you",
        "2. You will be able to quickly distribute invitations via Qr code",
        "3)  You will receive the guest list on the phone number you sent",
      ],
    },
    {
      id: "3",
      name: "Premium",
      price: "73000 AMD",
      desc: "1 year + 3 months free",
      infoTitle: "You can create one invitation that includes",
      infoText:
        " As part of this package you will receive a code with which you will generate invitation cards as part of the package.",
      infoItems: [
        "1. you will automatically create the appropriate one for you",
        "2. You will be able to quickly distribute invitations via Qr code",
        "3)  You will receive the guest list on the phone number you sent",
      ],
    },
  ];

  const privateProject = (id) => {
    if (selectTypeModal === "promNight") {
      if (allInfoPromNight.feedBack !== "" && allInfoPromNight.date !== "") {
        const resultObj = {
          template_id: "2",
          template_route: "/tikets",
          date: allInfoPromNight.date,
          feedback: allInfoPromNight.feedback,
          invitation_name: allInfoPromNight.invitation_name,
          tariff_id: id,
          sections: [
            {
              section_number: 1,
              ...(allInfoPromNight.section_1_time && {
                time: allInfoPromNight.section_1_time,
              }),
            },

            {
              section_number: 2,
              ...(allInfoPromNight.section_2_text && {
                text: allInfoPromNight.section_2_text,
              }),
              ...(allInfoPromNight.section_2_addressLink && {
                address_link: allInfoPromNight.section_2_addressLink,
              }),
              ...(allInfoPromNight.section_2_images.length > 0 && {
                images: allInfoPromNight.section_2_images,
              }),
            },

            {
              section_number: 3,
              ...(allInfoPromNight.section_3_text && {
                text: allInfoPromNight.section_3_text,
              }),
              ...(allInfoPromNight.section_3_images.length > 0 && {
                images: allInfoPromNight.section_3_images,
              }),
            },
          ].filter((item) => Object.keys(item).length !== 1),
        };

        dispatch(postPrivateProject(resultObj)).then((res) => {
          if (res.payload.data) {
            window.location.href = res.payload.data.redirect_url;
          }
        });
      }
    } else if (selectTypeModal === "wedding1") {
      if (allInfo.feedBack !== "" && allInfo.date !== "") {
        const resultObj = {
          template_id: "1",
          template_route: "/wedding1",
          date: allInfo.date,
          sound_path: allInfo.music_path,
          feedback: allInfo.feedback,
          invitation_name: allInfo.nameBoy + "-" + allInfo.nameGirl,
          tariff_id: id,
          sections: [
            {
              section_number: 1,
              ...(allInfo.nameBoy && { name_1: allInfo.nameBoy }),
              ...(allInfo.nameGirl && { name_2: allInfo.nameGirl }),
            },

            {
              section_number: 2,
              ...(allInfo.eventTime && { time: allInfo.eventTime }),
              ...(allInfo.eventText && { text: allInfo.eventText }),
              ...(allInfo.eventAddres && { address: allInfo.eventAddres }),
              ...(allInfo.event_addres_link && {
                address_link: allInfo.event_addres_link,
              }),
              ...(allInfo.event_imgs.length > 0 && {
                images: allInfo.event_imgs,
              }),
            },

            {
              section_number: 3,
              ...(allInfo.churchesTime && { time: allInfo.churchesTime }),
              ...(allInfo.chrchesText && { text: allInfo.chrchesText }),
              ...(allInfo.chrchesAddres && { address: allInfo.chrchesAddres }),
              ...(allInfo.churches_addres_link && {
                address_link: allInfo.churches_addres_link,
              }),
              ...(allInfo.churches_imgs.length > 0 && {
                images: allInfo.churches_imgs,
              }),
            },

            {
              section_number: 4,
              ...(allInfo.registryTime && { time: allInfo.registryTime }),
              ...(allInfo.registryText && { text: allInfo.registryText }),
              ...(allInfo.registryAddres && {
                address: allInfo.registryAddres,
              }),
              ...(allInfo.registry_addres_link && {
                address_link: allInfo.registry_addres_link,
              }),
              ...(allInfo.registry_imgs.length > 0 && {
                images: allInfo.registry_imgs,
              }),
            },

            {
              section_number: 5,
              ...(allInfo.banquetTime && { time: allInfo.banquetTime }),
              ...(allInfo.banquetText && { text: allInfo.banquetText }),
              ...(allInfo.banquetAddres && { address: allInfo.banquetAddres }),
              ...(allInfo.banquet_addres_link && {
                address_link: allInfo.banquet_addres_link,
              }),
              ...(allInfo.banquet_imgs.length > 0 && {
                images: allInfo.banquet_imgs,
              }),
            },
          ].filter((item) => Object.keys(item).length !== 1),
        };

        dispatch(postPrivateProject(resultObj)).then((res) => {
          if (res.payload.data) {
            window.location.href = res.payload.data.redirect_url;
          }
        });
      }
    } else if (selectTypeModal === "birth-day") {
      const obj = {
        template_id: "2",
        template_route: "/birthDay",
        date: date,
        feedback: tell,
        age: age,
        invitation_name: name,
        sections: [
          {
            section_number: 1,
            ...(text && { text: text }),
            ...(time && { time: time }),
            ...(full_name && { full_name: full_name }),
            ...(address && { address: address }),
            ...(invitation && { images: invitation }),
          },
          {
            section_number: 2,
            ...(address_link && { address_link: address_link }),
            ...(images && { images: images }),
          },
        ].filter((item) => Object.keys(item).length !== 1),
      };

      //   dispatch(postPrivateProject(obj)).then((res) => {
      //     if (res.payload.data) {
      //       window.location.href = res.payload.data.redirect_url;
      //       dispatch(setTest(true));
      //       // dispatch(setDate(res.payload.data.date));
      //       // dispatch(setAge(res.payload.data.age));
      //       // dispatch(setName(res.payload.data.invitation_name));
      //       // dispatch(setTime(res.payload.data.sections[0].time));
      //       // dispatch(setText(res.payload.data.sections[0].text));
      //       // dispatch(setFull_name(res.payload.data.sections[0].full_name));
      //       // dispatch(setAddress(res.payload.data.sections[0].address));
      //       // dispatch(setInvitation(res.payload.data.sections[0].images));
      //       // dispatch(setAddress_Link(res.payload.data.sections[1].address_link));
      //       // dispatch(setImages(res.payload.data.sections[1].images));

      //     }
      //   });
    }
  };

  return (
    <div className="modal_private">
      <div className="modal_private_block">
        <span
          className="modal_private_block_close"
          onClick={() => dispatch(closeModalPrivate("promNight"))}
        >
          X
        </span>
        <div className="modal_private_block_top">
          <h3>Enter the promo code</h3>
          <p>
            A word or set of letters and numbers that you can use to get a
            discount
          </p>

          <div className="modal_private_block_top_input">
            <div className="modal_private_block_top_input_div">
              <span>promo code/coupon</span>
              <input type="text" placeholder="FRN3" />
            </div>

            <span>{rightIconArrow}</span>
          </div>
        </div>

        <div className="modal_private_block_bottom">
          {tarifData.map((el) => (
            <div className="modal_private_block_bottom_item" key={el.id}>
              <div className="modal_private_block_bottom_item_top">
                <h3>{el.desc}</h3>
                <span className="modal_private_block_bottom_item_top_price">
                  {el.price}
                </span>
              </div>
              <span className="modal_private_block_bottom_item_top_info_title">
                {el.infoTitle}
              </span>
              <div>
                <span className="modal_private_block_bottom_item_info_text">
                  {el.infoText}
                </span>
                <ul className="modal_private_block_bottom_item_info_list">
                  {el.infoItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <button
                className="modal_private_block_bottom_item_btn"
                onClick={() => privateProject(el.id)}
              >
                Pay
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModalPrivate;
