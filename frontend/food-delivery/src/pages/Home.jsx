import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/phong.jpg";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/iconcamketchinhhang.png";
import featureImg02 from "../assets/images/icongiaohanghoatoc.png";
import featureImg03 from "../assets/images/iconhotro.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/sneakerbanchay.png";
import foodCategoryImg02 from "../assets/images/nikebanchay.png";
import foodCategoryImg03 from "../assets/images/bootbanchay.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "CAM KẾT CHÍNH HÃNG",
    imgUrl: featureImg01,
    desc: "100 % Authentic\n" +
          "\n" +
          "Cam kết sản phẩm chính hãng từ Châu Âu, Châu Mỹ...",
  },

  {
    title: "GIAO HÀNG HỎA TỐC",
    imgUrl: featureImg02,
    desc: "Express delivery\n" +
        "\n" +
        "SHIP hỏa tốc 1h nhận hàng trong nội thành HCM",
  },
  {
    title: "HỖ TRỢ 24/24",
    imgUrl: featureImg03,
    desc: "Supporting 24/24\n" +
        "\n" +
        "Gọi ngay 0909300746",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "Tất cả") {
      setAllProducts(products);
    }

    if (category === "Bánh Hamburger") {
      const filteredProducts = products.filter(
          (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
          (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Bánh mì") {
      const filteredProducts = products.filter(
          (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
      <Helmet title="Home">
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero__content  ">
                  <h1 className="mb-4 hero__title">
                    <span>Thời trang</span> Giới trẻ<br /> Luôn đồng hành
                    <span> cùng bạn</span>
                  </h1>

                  <p>
                    Quý khách có thể đặt hàng trực tuyến ở website Sneaker
                  </p>

                  <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className="order__btn d-flex align-items-center justify-content-between">
                      Đặt ngay<i class="ri-arrow-right-s-line"></i>
                    </button>

                    <button className="all__foods-btn">
                      <Link to="/foods">Xem tất cả</Link>
                    </button>
                  </div>

                  <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                    <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                      Miễn phí vẫn chuyển
                    </p>

                    <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                      CAM KẾT CHÍNH HÃNG 100 %
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg="6" md="6">
                <div className="hero__img">
                  <img src={heroImg} alt="hero-img" className="w-100" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pt-0">
          <Category />
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                {/*<p className="mb-1 mt-4 feature__text">*/}
                {/*  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,*/}
                {/*  officiis?*/}
                {/*</p>*/}
                {/*<p className="feature__text">*/}
                {/*  Lorem ipsum dolor sit amet consectetur adipisicing elit.*/}
                {/*  Aperiam, eius.{" "}*/}
                {/*</p>*/}
              </Col>

              {featureData.map((item, index) => (
                  <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                    <div className="feature__item text-center px-5 py-3">
                      <img
                          src={item.imgUrl}
                          alt="feature-img"
                          className="w-25 mb-3"
                      />
                      <h5 className=" fw-bold mb-3">{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2>Giày bán chạy</h2>
              </Col>

              <Col lg="12">
                <div className="food__category d-flex align-items-center justify-content-center gap-4">
                  <button
                      className={`all__btn  ${
                          category === "ALL" ? "foodBtnActive" : ""
                      } `}
                      onClick={() => setCategory("ALL")}
                  > Tất cả
                  </button>
                  <button
                      className={`d-flex align-items-center gap-2 ${
                          category === "BURGER" ? "foodBtnActive" : ""
                      } `}
                      onClick={() => setCategory("BURGER")}
                  >
                    <img src={foodCategoryImg01} alt="" />Sneaker
                  </button>

                  <button
                      className={`d-flex align-items-center gap-2 ${
                          category === "PIZZA" ? "foodBtnActive" : ""
                      } `}
                      onClick={() => setCategory("PIZZA")}
                  >
                    <img src={foodCategoryImg02} alt="" /> Nike
                  </button>

                  <button
                      className={`d-flex align-items-center gap-2 ${
                          category === "BREAD" ? "foodBtnActive" : ""
                      } `}
                      onClick={() => setCategory("BREAD")}
                  >
                    <img src={foodCategoryImg03} alt="" /> Boot
                  </button>
                </div>
              </Col>

              {allProducts.map((item) => (
                  <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                    <ProductCard item={item} />
                  </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="pt-0">
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5 ">
                <h2>Giày nữ hot trong tuần</h2>
              </Col>

              {hotPizza.map((item) => (
                  <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                    <ProductCard item={item} />
                  </Col>
              ))}
            </Row>
          </Container>
        </section>
      </Helmet>
  );
};

export default Home;