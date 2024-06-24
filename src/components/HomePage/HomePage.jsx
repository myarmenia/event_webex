import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Responsev.css";
import "./HomePage.css";
import WavyBackground from "./WavyBackground";
import HomePageModal from "./HomePageModal";
import { useDispatch, useSelector } from "react-redux";
import { getHomePage, getPromoCode } from "../../store/slices/HomePageSlice/HomePageApi";
import { homePageSelector, selectPromoCode } from "../../store/slices/HomePageSlice/HomePageSlice";
import { useNavigate } from "react-router-dom";
import { Frame, Slaq,  Foto, Footer1, Slide3, Slide4, Slide5, Slide6 } from "./images";

const sliderData = [
  { id: 1, img: Frame, title: "Welcome To Our Gift Shop", description: "Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit." },
  { id: 3, img: Slide3, title: "Shop Now", description: "Perspiciatis enim, accusantium perferendis." },
  { id: 4, img: Slide4, title: "Shop Now", description: "Perspiciatis enim, accusantium perferendis." },
  { id: 5, img: Slide5, title: "Shop Now", description: "Perspiciatis enim, accusantium perferendis." },
  { id: 6, img: Slide6, title: "Shop Now", description: "Perspiciatis enim, accusantium perferendis." },
];

const tarifs = [
  { id: 1, className: 'tarifPlan1', textHead: 'BASIC', color: "#F18165",  step: "1 invitation card | 4950 AMD You can create one invitation that includes", step2: "1. you will automatically create the appropriate one for you", step3: "2. You will be able to quickly distribute invitations via Qr code", step4: "3. You will receive the guest list on the phone number you sent" },
  { id: 2, className: 'tarifPlan2', textHead: 'PREMIUM', color: "#8EBD58",   step: "3 months + 1 month free | 35000 AMDYou can create one invitation", step2: "1. you will automatically create the appropriate one for you", step3: "2. You will be able to quickly distribute invitations via Qr code", step4: "3. You will receive the guest list on the phone number you sent" },
  { id: 3, className: 'tarifPlan3', textHead: 'ULTIMAT',   color: "#126EA3", step: "ULTIMAT 1 year + 3 months free | 73000 AMD  You can create one invitation", step2: "1. you will automatically create the appropriate one for you", step3: "2. You will be able to quickly distribute invitations via Qr code", step4: "3. You will receive the guest list on the phone number you sent" },
];

const tarifsh = [{ id: 1, h1: "Tarif plan" }];

const coments1 = [{ comentTitle: "Great Words From People", comentSpan: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been", comentSpan1: "the industry's standard dummy" }];

const coments2 = [
  { id: 1, comentdiv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { id: 2, comentdiv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { id: 3, comentdiv: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
];

const vernagirs1 = [{ id: 1, ver1: "Popular Products", ver2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", ver3: "Lorem Ipsum has been the industry's standard dummy" }];

const proms = [{ id: 1, pro1: "Enter the promo code", pro2: "A word or set of letters and numbers that you can use to get a discount", pro3: "Promo code /coupon", pro4: "Apply" }];

function HomePage() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showPromoMessage, setShowPromoMessage] = useState(false);
  const dispatch = useDispatch();
  const respHomeData = useSelector(homePageSelector);
  const resPromoCode = useSelector(selectPromoCode);
  const leng = localStorage.getItem('lang') != null ? localStorage.getItem('lang') : 'am';

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getHomePage([]));
  }, [dispatch]);

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories(prevSelected => {
      const isSelected = prevSelected.includes(categoryId);
      if (isSelected) {
        return prevSelected.filter(id => id !== categoryId);
      } else {
        return [...prevSelected, categoryId];
      }
    });
  };

  useEffect(() => {
    dispatch(getHomePage(selectedCategories));
  }, [selectedCategories, dispatch]);

  const handleSendPromoCode = (e) => {
    e.preventDefault();
    dispatch(getPromoCode(e.target[0].value));
    e.target.reset();
    setShowPromoMessage(true);
  };

  useEffect(() => {
    if (showPromoMessage && resPromoCode?.success) {
      const timer = setTimeout(() => {
        setShowPromoMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showPromoMessage, resPromoCode]);

  return (
    <div>
      <div className="hero_area">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {sliderData.map((slide, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={slide.id}>
                <img src={slide.img} className="d-block w-100" alt={slide.title} />
                <div className="carousel-caption 5">
                  <h5>{slide.title}</h5>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="userName">
        <button onClick={handleModalShow}>
          Contact us <img src={Slaq} alt="" />
        </button>
      </div>

      <h1 style={{ marginLeft: "60px" }} className="hoqs">Ocation</h1>

      {respHomeData?.data?.categories.map((category) => (
        <div key={category.id} className="category_home">
          <label onClick={() => handleCategoryChange(category.id)}>
            <input type="checkbox" checked={selectedCategories.includes(category.id)} />
            <span>{category.name}</span>
          </label>
        </div>
      ))}

      <div className="shop_section layout_padding">
        <div className="container15">
          <div className="heading_container heading_center"></div>
          <div className="sec_loh">
            {vernagirs1.map((vernagir, index) => (
              <div key={index} className="sec_loh1">
                <h1>{vernagir.ver1}</h1>
                <span>{vernagir.ver2}</span>
                <span>{vernagir.ver3}</span>
              </div>
            ))}
          </div>
          <div className="row">
            {respHomeData?.data?.templates.map((product) => (
              <div className="box" key={product.id}>
                <div className="img-box">
                  <img src={product.image_path} alt={product.name} />
                </div>
                <div>
                  <p className="puk">{product.name}</p>
                  <p className="puk">{product.price}</p>
                </div>
                <div className="detail-box">
                  <button style={{ border: "none", outline: "none" }} onClick={() => navigate(`/${leng + product.route}`)}>View</button>
                  <h6>
                    <button
                      style={{ background: "#5EBEA3", borderColor: "#5EBEA3", border: "none", outline: "none" }}
                      onClick={() => navigate(`/${leng + product.route}`)}
                    >
                      Create
                    </button>
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="prom_code">
        {proms.map((prom1, index) => (
          <div key={index}>
            <h1>{prom1.pro1}</h1>
            <span>{prom1.pro2}</span>
            <form onSubmit={handleSendPromoCode}>
              <h5>{prom1.pro3}</h5>
              <input type="text" placeholder="FN3" />
              <button>{prom1.pro4}</button>
            </form>
            {showPromoMessage && <p style={{ color: resPromoCode?.success ? 'green' : 'red' }}>{resPromoCode?.message}</p>}
          </div>
        ))}
      </div>

      <div className="section_buy">
        <div className="section_buy1">
          <img src={Foto} alt="" className="section_buyimg" />
        </div>
      </div>

      <div className="Coment">
        <div className="Coment_h1">
          {coments1.map((comenti, index) => (
            <div key={index} className="Coment_map">
              <h1>{comenti.comentTitle}</h1>
              <span>{comenti.comentSpan}</span>
              <span>{comenti.comentSpan1}</span>
            </div>
          ))}
        </div>
        <div className="Coment_img">
          <div className="Coment_h1">
            {coments2.map((comment) => (
              <div key={comment.id} className="comment">
                <p>{comment.comentdiv}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Section_foot">
        <div className="Foot1">
          <div className="tarifPlan">
            <div className="tarif_h1">
              {tarifsh.map((tarifss, index) => (
                <div key={index} className="tatif-genaeral-opps">
                  <h1>{tarifss.h1}</h1>
                </div>
              ))}
            </div>
            <div className="tarifPlann">
              {tarifs.map((tarif) => (
                <div key={tarif.id} className={`tarif-plan-general ${tarif.className}`}>
                  <WavyBackground fill={tarif.color} height="325px" text1={tarif.textHead} />
                  <div className="tarif_plan2">
                    <h4>{tarif.step}</h4>
                    <h6>{tarif.step2}</h6>
                    <h6>{tarif.step3}</h6>
                    <h6>{tarif.step4}</h6>
                  </div>
                  <button
                  onClick={() => navigate(`/${leng + tarifs.route}`)}
              
                    className="tarif_button"
                    style={{ background: tarif.color, fontSize: "14px", color: "white", border: "none", outline: "none", marginLeft: "95px", marginTop: "50px", boxShadow: tarif.boxShadow }}
                  >
                    Buy now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <img style={{ marginTop: "120px", maxwidth: "100px" }} src={Footer1} alt="" />
        </div>
      </div>

      <HomePageModal show={showModal} handleClose={handleModalClose} />
    </div>
  );
}

export default HomePage;
