import React from "react";

const Contact = () => {
    return (
        <div class="container-fluid pt-3">
            <div class="row px-xl-5">
                <div class="col-lg-7 mb-5">
                    <div class="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div class="control-group">
                                <input type="text" class="form-control" id="name" placeholder="Họ và tên"
                                       required="required" data-validation-required-message="Xin hãy nhập tên của bạn" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <input type="email" class="form-control" id="email" placeholder="Email"
                                       required="required" data-validation-required-message="Xin hãy nhập email của bạn" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <input type="text" class="form-control" id="subject" placeholder="Điện thoại"
                                       required="required" data-validation-required-message="Xin hãy nhập số điện thoại của bạn" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                            <textarea class="form-control" rows="6" id="message" placeholder="Nội dung"
                                      required="required"
                                      data-validation-required-message="Xin hãy nhập nội dung của bạn"></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Gửi liên hệ</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-5 mb-5">
                    <div class="d-flex flex-column mb-3">
                        <h5 class="font-weight-semi-bold mb-3">Cửa hàng 1</h5>
                        <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>Thủ Đức, Linh Trung, Việt Nam</p>
                        <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>info@st.hcmuaf.edu.vn</p>
                        <p class="mb-2"><i class="fa fa-phone-alt text-primary mr-3"></i>+081 *** ****</p>
                    </div>
                    <div class="d-flex flex-column">
                        <h5 class="font-weight-semi-bold mb-3">Cửa hàng 2</h5>
                        <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>Thủ Đức, Linh Trung, Việt Nam</p>
                        <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>info@st.hcmuaf.edu.vn</p>
                        <p class="mb-2"><i class="fa fa-phone-alt text-primary mr-3"></i>+081 *** ****</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
