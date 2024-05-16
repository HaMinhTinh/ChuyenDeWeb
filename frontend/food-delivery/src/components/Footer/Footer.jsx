import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/logo.jpg";

import "../../styles/footer.css";

import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const [isInAdminPage, setIsInAdminPage] = useState(false);

  useEffect(() => {
    // Check if the current location is within the admin page
    setIsInAdminPage(location.pathname.startsWith("/admin") ||  location.pathname.trim() === "/userManagement" ||  location.pathname.trim() === "/productManagement"  ||  location.pathname.trim() === "/revenueManagement");
  }, [location.pathname]);

  if (isInAdminPage) {
    // Render nothing if in admin page
    return null;
  }

  return (
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <div className=" footer__logo text-start">
                <img src={logo} alt="logo" />
                <h5>Sneaker</h5>
                <p>
                  Giấy phép kinh doanh số : 0305301107 bởi Sở Kế Hoạch và Đầu Tư TP. Hồ Chí Minh
                </p>
              </div>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__title">Thời gian mở cửa</h5>
              <ListGroup className="deliver__time-list">
                <ListGroupItem className=" delivery__time-item border-0 ps-0">
                  <span>Thứ 2 - Thứ 7</span>
                  <p>08:00am - 21:00pm</p>
                </ListGroupItem>

                <ListGroupItem className=" delivery__time-item border-0 ps-0">
                  <span>Ngày nghỉ</span>
                  <p>Chủ nhật</p>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__title">Liên hệ</h5>
              <ListGroup className="deliver__time-list">
                <ListGroupItem className=" delivery__time-item border-0 ps-0">
                  <p>Location: Khu Phố 6, Linh Trung, Thủ Đức, Thành phố Hồ Chí Minh</p>
                </ListGroupItem>
                <ListGroupItem className=" delivery__time-item border-0 ps-0">
                  <span>Phone: 0979294712</span>
                </ListGroupItem>

                <ListGroupItem className=" delivery__time-item border-0 ps-0">
                  <span>Email: daihocnonglamnlu@gamil.com</span>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__title">Bản tin</h5>
              <p>Đăng ký bản tin của chúng tôi</p>
              <div className="newsletter">
                <input type="email" placeholder="Enter your email" />
                <span>
                <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col lg="6" md="6">
              <p className="copyright__text">
                © Bản quyền thuộc về NIKE.VN Thiet Ke Web Chuẩn SEO.
              </p>
            </Col>
            <Col lg="6" md="6">
              <div className="social__links d-flex align-items-center gap-4 justify-content-end">
                <p className="m-0">Follow: </p>
                <span>
                {" "}
                  <Link to="https://www.facebook.com/muhib160">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

                <span>
                <Link to="https://github.com/muhib160">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

                <span>
                {" "}
                  <Link to=" https://www.youtube.com/c/MuhibsTechDiary">
                  <i class="ri-youtube-line"></i>
                </Link>{" "}
              </span>

                <span>
                {" "}
                  <Link to=" https://www.linkedin.com/in/muhib160/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
  );
};

export default Footer;
