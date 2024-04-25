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
                    Đôi giày này được giao hàng nhanh chóng và được đóng gói cẩn thận. Chất lượng sản phẩm được đảm bảo với mức giá phải chăng. Thiết kế mang lại cảm giác trẻ trung mà không quá lòa loẹt, và đặc biệt thích hợp để mang đi du lịch ...
                </p>
                <div className=" slider__content d-flex align-items-center gap-3 ">
                    <img src={ava01} alt="avatar" className=" rounded" />
                    <h6>Tấn Đạt</h6>
                </div>
            </div>
            <div>
                <p className="review__text">
                    Tôi đã có trải nghiệm tốt về dịch vụ ở cửa hàng mình. Tuy nhiên, có một chút thay đổi trong kiểu dáng so với phiên bản trước, nhưng vẫn đáng để sở hữu.
                </p>
                <div className="slider__content d-flex align-items-center gap-3 ">
                    <img src={ava02} alt="avatar" className=" rounded" />
                    <h6>Vân Giang</h6>
                </div>
            </div>
            <div>
                <p className="review__text">
                    Đôi giày này cực kỳ êm và thơm mùi da tự nhiên, mở hộp ra mình cảm nhận được từng chi tiết. So với những mẫu giày theo xu hướng hot trên mạng xã hội, mình cảm thấy đôi này không chỉ đẹp và hấp dẫn hơn mà còn có giá cả phải chăng hơn nhiều. Chắc chắn sẽ ủng hộ cửa hàng lần sau! Đánh giá 5 sao.
                </p>
                <div className="slider__content d-flex align-items-center gap-3 ">
                    <img src={ava03} alt="avatar" className=" rounded" />
                    <h6>Minh Quân</h6>
                </div>
            </div>
        </Slider>
    );
};

export default TestimonialSlider;