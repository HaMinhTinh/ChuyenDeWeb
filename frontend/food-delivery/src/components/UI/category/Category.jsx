import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/iconnewbalence1.jpg";
import categoryImg02 from "../../../assets/images/iconnike.webp";
import categoryImg03 from "../../../assets/images/iconmlb2.webp";
import categoryImg04 from "../../../assets/images/iconadidas.jpg";

import "../../../styles/category.css";

const categoryData = [
    {
        display: "New Balance",
        imgUrl: categoryImg01,
    },
    {
        display: "Nike",
        imgUrl: categoryImg02,
    },
    {
        display: "MLB",
        imgUrl: categoryImg03,
    },

    {
        display: "Adidas",
        imgUrl: categoryImg04,
    },
];

const Category = () => {
    return (
        <Container>
            <Row>
                {categoryData.map((item, index) => (
                    <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
                        <div className="category__item d-flex align-items-center gap-3">
                            <div className="category__img">
                                <img src={item.imgUrl} alt="category__item" />
                            </div>
                            <h6>{item.display}</h6>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Category;