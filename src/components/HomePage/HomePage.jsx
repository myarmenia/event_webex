
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Responsev.css";
import "./HomePage.css";
import WavyBackground from "./WavyBackground";
import { Harsaniq3, Slaq, Slod } from "./images";
import HomePageModal from "./HomePageModal";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { getHomePage } from "../../store/slices/HomePageSlice/HomePageApi";
import {
  Harsaniq,
  Harsaniq1,
  Harsaniq2,
  Foto,
  Footer1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
} from "./images";


const dataProduct = [
  {
    img: Harsaniq,
    name: "View",
    price: "Create",
    pric1: "AMD 9000",
    category: "wedding",
    name1: "BRTHDAY",
  },
  {
    img: Harsaniq1,
    name: "View",
    price: "Create",
    pric1: "AMD 12000",
    category: "engagement",
    name1: "BRTHDAY",
  },
  {
    img: Harsaniq2,
    name: "View",
    price: "Create",
    pric1: "AMD 12000",
    category: "anniversary",
    name1: "BRTHDAY",
  },
  {
    img: Harsaniq3,
    name: "View",
    price: "Create",
    pric1: "AMD 15000",
    category: "wedding",
    name1: "BRTHDAY",
  },
  {
    img: Harsaniq1,
    name: "View",
    price: "Create",
    pric1: "AMD 15000",
    category: "engagement",
    name1: "BRTHDAY",
  },
  {
    img: Harsaniq2,
    name: "View",
    price: "Create",
    pric1: "AMD 20000",
    category: "anniversary",
    name1: "BRTHDAY",
  },
];

const sliderData = [
  {
    id: 1,
    img: Slod,
    title: "Welcome To Our Gift Shop",
    description:
      "Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit.",
  },
  {
    id: 2,
    img: Slide2,
    title: "Discover Amazing Gifts",
    description:
      "Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum.",
  },
  {
    id: 3,
    img: Slide3,
    title: "Shop Now",
    description: "Perspiciatis enim, accusantium perferendis.",
  },
  {
    id: 4,
    img: Slide4,
    title: "Shop Now",
    description: "Perspiciatis enim, accusantium perferendis.",
  },
  {
    id: 5,
    img: Slide5,
    title: "Shop Now",
    description: "Perspiciatis enim, accusantium perferendis.",
  },
  {
    id: 6,
    img: Slide6,
    title: "Shop Now",
    description: "Perspiciatis enim, accusantium perferendis.",
  },
];

const parsePrice = (priceString) => {
  return parseInt(priceString.replace("AMD ", "").replace(",", ""));
};

function HomePage() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(20000);
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((c) => c !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const filteredProducts = dataProduct.filter((product) => {
    const categoryIncluded =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const priceInRange = parsePrice(product.pric1) <= priceRange;
    return categoryIncluded && priceInRange;
  });

  const handleModalShow = () => {
    setShowModal(true);

  };

  const handleModalClose = () => {
    setShowModal(false);
  };


  useEffect(() => {
    dispatch(getHomePage())
  }, []);

  return (
    <div>
      <div className="hero_area">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {sliderData.map((slide, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={slide.id}
              >
                <img
                  src={slide.img}
                  className="d-block w-100"
                  alt={slide.title}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{slide.title}</h5>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="userName">
        <button onClick={handleModalShow}>
          Contact us <img src={Slaq} alt="" />
        </button>
      </div>
      {t("tandz")}
      <div className="container-mt-2">
        <h1>Occasion</h1>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="categoryWedding"
            value="wedding"
            onChange={() => handleCategoryChange("wedding")}
          />
          <h5 className="form-check-label" htmlFor="categoryWedding">
            Birthday
          </h5>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="categoryEngagement"
            value="engagement"
            onChange={() => handleCategoryChange("engagement")}
          />
          <h5 className="form-check-label" htmlFor="categoryEngagement">
            Birth of child
          </h5>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="categoryAnniversary"
            value="anniversary"
            onChange={() => handleCategoryChange("anniversary")}
          />
          <h5 className="form-check-label" htmlFor="categoryAnniversary">
            Graduation Night
          </h5>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="categoryBaptism"
            value="baptism"
            onChange={() => handleCategoryChange("baptism")}
          />
          <h5 className="form-check-label" htmlFor="categoryBaptism">
            Baptism
          </h5>
        </div>
      </div>
      <div className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center"></div>
          <div className="sec_loh">
            <h1>Popular Products</h1>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </span>
            <span className="loh_span">
              Lorem Ipsum has been the industry's standard dummy
            </span>
          </div>
          <div className="row">
            {filteredProducts.map((product, index) => (
              <div className="box" key={index}>
                <div className="img-box">
                  <img src={product.img} alt={product.name} />
                </div>
                <div>
                  <p className="puk">{product.name1}</p>
                  <p className="puk">{product.pric1}</p>
                </div>
                <div className="detail-box">
                  <button style={{ border: "none", outline: "none" }}>
                    {product.name}
                  </button>
                  <h6>
                    <button
                      style={{
                        background: "#5EBEA3",
                        borderColor: "#5EBEA3",
                        border: "none",
                        outline: "none",
                      }}
                    >
                      {product.price}
                    </button>
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section_buy">
        <div className="section_buy1">
          <img src={Foto} alt="" className="section_buyimg" />
        </div>
      </div>
      <div className="Coment">
        <div className="Coment_h1">
          <h1>Great Words From People</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been{" "}
          </p>
          <span className="spo">the industry's standard dummy</span>
        </div>
        <div className="Coment_img">
          <div className="Coment_img1">
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
              saepe?
            </span>
          </div>
          <div className="Coment_img1">
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
              saepe?
            </span>
          </div>
          <div className="Coment_img1">
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
              saepe?
            </span>
          </div>
        </div>
      </div>
      <div className="Section_foot">
        <div className="Foot1">
          <div className="tarifPlan">
            <div className="tarif_h1">
              <h1 style={{color:"white"}}>Tariff plan</h1>
            </div>
            <div className="tarifPlann">
              <div className="tarifPlan1">
                <div className="tarifPlan1">
                  <WavyBackground fill="#F9B627" height="325px" text="BASIC" />
                  <div className="tarif_plan1">
                  <h4>1 invitation card | 4950 AMD </h4>
                  <h4>You can create one invitation that includes</h4>
                  <h6>
                    1. you will automatically create the appropriate one for you
                  </h6>
                  <h6>
                    2. You will be able to quickly distribute invitations via Qr
                    code
                  </h6>
                  <h6>
                    3. You will receive the guest list on the phone number you
                    sent
                  </h6>
                  </div>
                  <button
                    className="tarif_button"
                    style={{
                      background: "#F9B627",
                      color: "white",
                      border: "none",
                      outline: "none",
                      fontSize: "18px",
                      textAlign: "center",
                      marginTop: "92px",
                    }}
                  >
                    BUY NOW
                  </button>
                </div>
              </div>

              <div className="tarifPlan2">
                <WavyBackground fill="#9CC04B" height="325px" text1="PREMIUM" />
                <div className="tarif_plan2">
                <h4>3 months + 1 month free | 35000 AMD </h4> 
                  <h4>You can create one invitation that includes
․
 As part of this package you will receive a code with which you will generate</h4>
                  <h6>
                  1. you will automatically create the appropriate one for you
                  </h6>
                  <h6>
                  2. You will be able to quickly distribute invitations via Qr code

                  </h6>
                  <h6>
                  3. You will receive the guest list on the phone number you sent
                  </h6>
                  </div>
                <button
                  className="tarif_button"
                  style={{
                    background: "#9CC04B",
                    color: "white",
                    border: "none",
                    outline: "none",
                    marginLeft: "95px",
                    marginTop: "30px",
                  }}
                >
                  BUY NOW
                </button>
              </div>
              <div className="tarifPlan3">
                <WavyBackground fill="#1271A6" height="325px" text2="ULTIMAT" />
                <div className="tarif_plan2">
                <h4>1 year + 3 months free| 73000 AMD  </h4> 
                  <h4>You can create one invitation that includes.
                  As part of this package you will receive a code with which you will generate
                  invitation cards as part of the package
                  </h4>
                  <h6>
                  1. you will automatically create the appropriate one for you
                  </h6>
                  <h6>
                  2. You will be able to quickly distribute invitations via Qr code

                  </h6>
                  <h6>
                  3. You will receive the guest list on the phone number you sent                  </h6>
                  </div>
                <button
                  className="tarif_button"
                  style={{
                    background: "#1271A6",
                    color: "white",
                    border: "none",
                    outline: "none",
                    marginLeft: "95px",
                    marginTop: "10px",
                  }}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img style={{ marginTop: "120px" }} src={Footer1} alt="" />
        </div>
      </div>
      <HomePageModal show={showModal} handleClose={handleModalClose} />
    </div>
  );
}

export default HomePage;
