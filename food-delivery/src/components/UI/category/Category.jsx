import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/iconsneaker1.jpg";
import categoryImg02 from "../../../assets/images/iconnike1.jpg";
import categoryImg03 from "../../../assets/images/iconoxford.jpg";
import categoryImg04 from "../../../assets/images/iconboot.jpg";

import "../../../styles/category.css";

const categoryData = [
    {
        display: "Sneaker",
        imgUrl: categoryImg01,
    },
    {
        display: "Nike",
        imgUrl: categoryImg02,
    },
    {
        display: "Oxford",
        imgUrl: categoryImg03,
    },

    {
        display: "Boot",
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