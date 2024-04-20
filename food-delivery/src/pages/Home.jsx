import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import payment from "../assets/images/payment.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Giao hàng nhanh",
    imgUrl: featureImg01,
    desc: "Hóa đơn từ 300.000đ trở lên, miễn phí vận chuyển trong phạm vi 5km trong khung giờ 7h:00 - 15h:00",
  },

  {
    title: "Thanh toán",
    imgUrl: payment,
    desc: "Cung cấp nhiều hình thức thanh toán",
  },
  {
    title: "Đặt hàng dễ dàng",
    imgUrl: featureImg03,
    desc: "Đặt hàng trực tiếp trên website hoặc gọi vào số hotline",
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
                  <h5 className="mb-3">Cách dễ dàng để đặt một đơn đặt hàng</h5>
                  <h1 className="mb-4 hero__title">
                    <span>Thời trang</span> giới trẻ <br /> Luôn đồng hành
                    <span> cùng bạn</span>
                  </h1>

                  <p>
                    Quý khách có thể đặt hàng trực tuyến ở website TastyCake
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
                      100% Thanh toán an toàn
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
                <h5 className="feature__subtitle mb-4">Những gì chúng tôi phục vụ</h5>
                <h2 className="feature__title">Chỉ cần ngồi tại nhà</h2>
                <h2 className="feature__title">
                  chúng tôi sẽ <span>phục vụ</span>
                </h2>
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
                    <img src={foodCategoryImg01} alt="" />Giày sneaker
                  </button>

                  <button
                      className={`d-flex align-items-center gap-2 ${
                          category === "PIZZA" ? "foodBtnActive" : ""
                      } `}
                      onClick={() => setCategory("PIZZA")}
                  >
                    <img src={foodCategoryImg02} alt="" /> giày thể thao
                  </button>

                  <button
                      className={`d-flex align-items-center gap-2 ${
                          category === "BREAD" ? "foodBtnActive" : ""
                      } `}
                      onClick={() => setCategory("BREAD")}
                  >
                    <img  alt="" /> Giày Oxford
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

        <section className="why__choose-us">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <img src={whyImg} alt="why-tasty-treat" className="w-100" />
              </Col>

              <Col lg="6" md="6">
                <div className="why__tasty-treat">
                  <h2 className="tasty__treat-title mb-4">
                    Tại sao chọn <span>Tasty Cake?</span>
                  </h2>
                  <p className="tasty__treat-desc">
                    Đặt tiêu chí “Chất lượng” là ưu tiên hàng đầu, Savouré không ngừng cải tiến,
                    phát triển và hoàn thiện bằng những hành động rõ ràng và cụ thể như – Cơ sở vật chất khang trang,
                    nhà xưởng hiện đại và đạt tiêu chuẩn qua những chứng nhận có giá trị ISO – HACCP.
                    Và trên hết, là sự công nhận tin yêu ngày càng lớn của Bạn đối với Savouré.
                  </p>

                  <ListGroup className="mt-4">
                    <ListGroupItem className="border-0 ps-0">
                      <p className=" choose__us-title d-flex align-items-center gap-2 ">
                        <i class="ri-checkbox-circle-line"></i> An toàn thực phẩm
                      </p>
                      <p className="choose__us-desc">
                        Luôn xem chất lượng sản sản phẩm & an toàn thực phẩm là mục tiêu hàng đầu của công ty
                      </p>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 ps-0">
                      <p className="choose__us-title d-flex align-items-center gap-2 ">
                        <i class="ri-checkbox-circle-line"></i> Hỗ trợ
                      </p>
                      <p className="choose__us-desc">
                        Cung cấp cho khách hàng sự trợ giúp trực tiếp ở bất cứ lúc nào mà khách hàng cần hỗ trợ.
                      </p>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 ps-0">
                      <p className="choose__us-title d-flex align-items-center gap-2 ">
                        <i class="ri-checkbox-circle-line"></i>Đặt hàng ở bất cứ đâu{" "}
                      </p>
                      <p className="choose__us-desc">
                        Tasty Cake nhận ship đến tận nơi với các đơn hàng có giá trị từ 200.000VNĐ trở lên
                      </p>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pt-0">
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5 ">
                <h2>Hot Pizza</h2>
              </Col>

              {hotPizza.map((item) => (
                  <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                    <ProductCard item={item} />
                  </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="testimonial ">
                  <h5 className="testimonial__subtitle mb-4">Đánh giá</h5>
                  <h2 className="testimonial__title mb-4">
                    <span>Khách hàng</span> nói gì về chúng tôi
                  </h2>
                  <p className="testimonial__desc">
                    Cảm ơn bạn đã dành sự quan tâm và mua sản phẩm của Tasty Cake.
                    Hãy chia sẻ những sản phẩm để bạn bè, gia đình và  người thân yêu cùng thưởng thức nhé ạ!
                  </p>

                  <TestimonialSlider />
                </div>
              </Col>

              <Col lg="6" md="6">
                <img src={networkImg} alt="testimonial-img" className="w-100" />
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
  );
};

export default Home;