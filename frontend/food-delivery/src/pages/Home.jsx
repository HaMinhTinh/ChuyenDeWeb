import React, { useState, useEffect, useCallback } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category.jsx";
import ProductCart from "../components/UI/product-card/ProductCard.jsx";
import heroImg from "../assets/images/phong.jpg";
import featureImg01 from "../assets/images/iconcamketchinhhang.png";
import featureImg02 from "../assets/images/icongiaohanghoatoc.png";
import featureImg03 from "../assets/images/iconhotro.png";
import "../styles/hero-section.css";
import "../styles/home.css";
import "../styles/all-foods.css";
import "../styles/pagination.css";

const featureData = [
  {
    title: "CAM KẾT CHÍNH HÃNG",
    imgUrl: featureImg01,
    desc:
      "100 % Authentic\n" +
      "\n" +
      "Cam kết sản phẩm chính hãng từ Châu Âu, Châu Mỹ...",
  },
  {
    title: "GIAO HÀNG HỎA TỐC",
    imgUrl: featureImg02,
    desc:
      "Express delivery\n" +
      "\n" +
      "SHIP hỏa tốc 1h nhận hàng trong nội thành HCM",
  },
  {
    title: "HỖ TRỢ 24/24",
    imgUrl: featureImg03,
    desc: "Supporting 24/24\n" + "\n" + "Gọi ngay 0909300746",
  },
];

const Home = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8082/api/products/productByStatus?status=new"
        );
        const data = await response.json();
        setNewProducts(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching new products:", error);
      }
    };

    const fetchDiscountedProducts = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8082/api/products/productByDiscount?discount=1"
        );
        const data = await response.json();
        setDiscountedProducts(data);
        setProducts((prevProducts) => [...prevProducts, ...data]);
      } catch (error) {
        console.error("Error fetching discounted products:", error);
      }
    };

    fetchNewProducts();
    fetchDiscountedProducts();
  }, []);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h1 className="mb-4 hero__title">
                  <span>Thời trang</span> Giới trẻ
                  <br /> Luôn đồng hành
                  <span> cùng bạn</span>
                </h1>

                <p>Quý khách có thể đặt hàng trực tuyến ở website Sneaker</p>

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
            <Col lg="12" className="text-center"></Col>

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
              <h2>Giày mới ra mắt</h2>
            </Col>
            {newProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCart item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Giày giảm giá</h2>
            </Col>
            {discountedProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCart item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
