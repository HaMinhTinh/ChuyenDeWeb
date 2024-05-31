import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import "../styles/product-details.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { cartActions } from "../store/shopping-cart/cartSlice";
import "../styles/product-card.css";
import CurrencyFormatter from "../components/CurrencyFormatter";

const ProductsDetails = () => {
    const [tab, setTab] = useState("desc");
    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [reviewMsg, setReviewMsg] = useState("");
    const [selectedSize, setSelectedSize] = useState(null); // State to manage selected size
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const id = new URLSearchParams(window.location.search).get("id");
                const response = await fetch(`http://localhost:8080/api/products/detailProduct/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setProductDetail(data);
                    console.log(data);
                } else {
                    console.error("Error fetching product detail");
                }
            } catch (error) {
                console.error("Error fetching product detail:", error);
            }
        };
        fetchProductDetail();
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(enteredName, enteredEmail, reviewMsg, selectedSize);
    };

    const addToCart = () => {
        // Your addToCart logic here
    };

    return (
        <Helmet title="Product-details">
            {productDetail && (
                <section>
                    <Container>
                        <Row>
                            <div className="product-detail-container">
                                <div className="product-image-container">
                                    <img src={productDetail.imageUrl} alt="" className="product-image" />
                                </div>

                                <div className="product-info-container">
                                    <h2 className="product__title mb-3">{productDetail.name}</h2>
                                    <p className="product__price">
                                        Giá: <span><CurrencyFormatter value={productDetail.price}/> VNĐ </span>
                                    </p>

                                    <div className="size-selection mb-3">
                                        <h6>Chọn size giày:</h6>
                                        <div className="size-buttons">
                                            {[37, 38, 39, 40, 41].map((size) => (
                                                <button
                                                    key={size}
                                                    style={{
                                                        padding: "10px 15px",
                                                        margin: "5px",
                                                        border: "1px solid #ccc",
                                                        borderRadius: "5px",
                                                        cursor: "pointer",
                                                        transition: "background 0.3s ease",
                                                        ...(selectedSize === size ? { background: "#4BB543", color: "white" } : {}),
                                                    }}
                                                    onClick={() => setSelectedSize(size)}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="addTOCart__btn" onClick={addToCart}>
                                        Thêm vào giỏ hàng
                                    </button>

                                    <div className="tabs d-flex align-items-center gap-5 py-3">
                                        <h6 className={` ${tab === "desc" ? "tab__active" : ""}`} onClick={() => setTab("desc")}>
                                            Mô tả
                                        </h6>
                                        <h6 className={` ${tab === "rev" ? "tab__active" : ""}`} onClick={() => setTab("rev")}>
                                            Đánh giá
                                        </h6>
                                    </div>

                                    {tab === "desc" ? (
                                        <div className="tab__content">
                                            <p>{productDetail.description}</p>
                                        </div>
                                    ) : (
                                        <div className="tab__form mb-3" style={{
                                            background: "#f9f9f9",
                                            padding: "20px",
                                            borderRadius: "10px",
                                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                            maxWidth: "600px",
                                            margin: "0 auto",
                                        }}>
                                            <form className="form" onSubmit={submitHandler}>
                                                <div className="form__group" style={{ marginBottom: "15px" }}>
                                                    <input
                                                        type="text"
                                                        placeholder="Nhập tên của bạn"
                                                        onChange={(e) => setEnteredName(e.target.value)}
                                                        required
                                                        style={{
                                                            width: "100%",
                                                            padding: "10px",
                                                            border: "1px solid #ccc",
                                                            borderRadius: "5px",
                                                            fontSize: "1rem",
                                                            marginBottom: "15px",
                                                        }}
                                                    />
                                                </div>

                                                <div className="form__group" style={{ marginBottom: "15px" }}>
                                                    <input
                                                        type="text"
                                                        placeholder="Nhập email của bạn"
                                                        onChange={(e) => setEnteredEmail(e.target.value)}
                                                        required
                                                        style={{
                                                            width: "100%",
                                                            padding: "10px",
                                                            border: "1px solid #ccc",
                                                            borderRadius: "5px",
                                                            fontSize: "1rem",
                                                            marginBottom: "15px",
                                                        }}
                                                    />
                                                </div>

                                                <div className="form__group" style={{ marginBottom: "15px" }}>
                                                    <textarea
                                                        rows={5}
                                                        placeholder="Viết thông điệp"
                                                        onChange={(e) => setReviewMsg(e.target.value)}
                                                        required
                                                        style={{
                                                            width: "100%",
                                                            padding: "10px",
                                                            border: "1px solid #ccc",
                                                            borderRadius: "5px",
                                                            fontSize: "1rem",
                                                            marginBottom: "15px",
                                                        }}
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="addTOCart__btn"
                                                    style={{
                                                        background: "#4BB543",
                                                        color: "white",
                                                        padding: "10px 15px",
                                                        border: "none",
                                                        borderRadius: "5px",
                                                        fontSize: "1rem",
                                                        cursor: "pointer",
                                                        transition: "background 0.3s ease",
                                                    }}
                                                    onMouseOver={(e) => e.target.style.background = "#3a9e36"}
                                                    onMouseOut={(e) => e.target.style.background = "#4BB543"}
                                                >
                                                    Gửi
                                                </button>
                                            </form>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Row>

                        <Row>
                            <Col lg="12" className="mb-5 mt-4">
                                <h2 className="related__Product-title">Các sản phẩm liên quan</h2>
                            </Col>
                        </Row>
                    </Container>
                </section>
            )}
        </Helmet>
    );
};

export default ProductsDetails;
