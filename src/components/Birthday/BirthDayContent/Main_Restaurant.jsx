import React, { memo, useEffect, useRef, useState } from "react";
import { restImg } from "../images";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddress_Link,
  setImages,
} from "../../../store/slices/BirthDaySlice/BirthDaySlice";
import { convertToBase64 } from "../../../utils/helperFunck";
import { galeriaIcon } from "../../../iconsFolder/icons";
function Main_Restaurant() {
  const { t, i18n } = useTranslation();
  const [restaurantDisplay, setRestaurantDisplay] = useState(false);
  const restaurantRef = useRef(null);
  const [img, setImg] = useState([]);
  const [image, setImage] = useState("");
  const [address1, setAddress1] = useState("");
  const dispatch = useDispatch();
  const { images, full_name, address_link, view, edit } = useSelector(
    (store) => store.birthDay
  );
  const images1 = images.length ? images : restImg;
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (
        restaurantRef.current &&
        offset > restaurantRef.current.offsetTop - 500
      ) {
        setRestaurantDisplay(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (view) {
      dispatch(setAddress_Link(address1));
      dispatch(setImages(img));
      setImg([]);
      setAddress1("");
    }
  }, [view]);
  useEffect(() => {
    if (!view) {
      dispatch(setAddress_Link(""));
      dispatch(setImages([]));
    }
  }, [view]);

  const handleChange = (e) => {
    if (e.target.value) {
      convertToBase64(e.target.files[0]).then((base64) =>
        setImg([...img, base64])
      );
    }
  };
  return (
    <div
      className="main_restaurant"
      ref={restaurantRef}
      style={{
        minHeight: view && images.length === 0 && !address_link && 0,
        padding: view && images.length === 0 && !address_link && 0,
      }}
    >
      <div className="container">
        <div className="main_restaurant_content">
          {image.length !== 0 || (!edit && !view) || edit ? (
            <h1>{full_name ? full_name : t("main_restaurant.0")}</h1>
          ) : (
            ""
          )}
          <div className="restaurant_navigate">
            {edit || (!edit && !view) || (view && images.length !== 0) ? (
              <div className="restaurant" style={{ alignItems: "center" }}>
                {restaurantDisplay && (
                  <div className="restaurant_1">
                    <div>
                      <img src={images1[0]} alt="not found" />
                    </div>
                  </div>
                )}
                {restaurantDisplay && images1.length > 1 && (
                  <div className="restaurant_2_3">
                    <div
                      style={{
                        maxWidth: images1.length <= 2 ? "720px" : "",
                      }}
                    >
                      <img src={images1[1]} alt="not found" />
                    </div>
                    {images1.length === 3 && (
                      <div>
                        <img src={images1[2]} alt="not found" />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
            {edit && (
              <div>
                <label>
                  <div className="galeria-icon">
                    {galeriaIcon} / {img.length}
                  </div>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    disabled={img.length === 3 ? true : false}
                    onChange={handleChange}
                  />
                </label>
              </div>
            )}
            {(!edit && !view) || (view && address_link) ? (
              <a
                href={
                  address_link
                    ? address_link
                    : "https://yandex.by/maps/10262/yerevan/?ll=44.552196%2C40.187364&mode=routes&rtext=40.195515%2C44.494510~40.177638%2C44.529983&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D175194505852&z=13"
                }
                target="blank"
                style={{ marginTop: images.length === 0 ? "50px" : "" }}
              >
                <button className="get">{t("main_restaurant.1")}</button>
              </a>
            ) : (
              ""
            )}

            {edit && (
              <p>
                <input
                  type="text"
                  placeholder={`${t("placholderBirthday.2")}`}
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Main_Restaurant);
