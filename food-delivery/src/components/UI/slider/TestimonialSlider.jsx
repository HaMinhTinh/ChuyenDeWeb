import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <p className="review__text">
                    "Giao hàng nhanh chóng
                    Đóng gói chắc mà không làm móp méo
                    Giá thành rẻ, hương vị tuổi thơ, không quá ngọt nhưng để tủ lạnh ăn ngon hơn nha"
                </p>
                <div className=" slider__content d-flex align-items-center gap-3 ">
                    <img src={ava01} alt="avatar" className=" rounded" />
                    <h6>Jhon Doe</h6>
                </div>
            </div>
            <div>
                <p className="review__text">
                    "Đóng hàng cẩn thận, bánh không bị nát. Date còn siêu mới. Vị ngọt với hơi beo béo. Nói chung là ăn được.
                    Nhưng mà kiểu không còn thấy giống cái vị hồi trước ăn nữa!"
                </p>
                <div className="slider__content d-flex align-items-center gap-3 ">
                    <img src={ava02} alt="avatar" className=" rounded" />
                    <h6>Mitchell Marsh</h6>
                </div>
            </div>
            <div>
                <p className="review__text">
                    "Bánh mềm thơm mùi bơ sữa ngon lắm, bóc được từng lớp. Mình thấy các bánh kiểu này ngon và
                    rẻ hơn mấy bánh hottrend trên tiktok hot dc thời gian rồi chìm. Tặng shop ngàn sao luôn!"
                </p>
                <div className="slider__content d-flex align-items-center gap-3 ">
                    <img src={ava03} alt="avatar" className=" rounded" />
                    <h6>Steven Crock</h6>
                </div>
            </div>
        </Slider>
    );
};

export default TestimonialSlider;