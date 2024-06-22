import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrencyFormatter from "../components/CurrencyFormatter";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const ConfirmCheckOut = () => {
  const [shippingInfo, setShippingInfo] = useState({});
  const [orderDetails, setOrderDetails] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

  useEffect(() => {
    const storedShippingInfo =
      JSON.parse(localStorage.getItem("shippingInfo")) || {};
    const storedOrderDetails =
      JSON.parse(localStorage.getItem("orderDetails")) || [];
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    setShippingInfo(storedShippingInfo);
    setOrderDetails(storedOrderDetails);
    setCartItems(storedCartItems);
  }, []);

  const handleConfirm = () => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const userId = userInfo.id_user;
    axios
      .post("http://127.0.0.1:8082/api/confirmOrder", {
        shippingInfo,
        userId,
        storedCartItems,
      })
      .then((response) => {
        localStorage.removeItem("shippingInfo");
        localStorage.removeItem("orderDetails");
        localStorage.removeItem("cartItems");
        localStorage.removeItem("totalAmount");
        localStorage.removeItem("totalQuantity");
        window.location.href = "/reviewOrder";
      })
      .catch((error) => {
        console.log(error);
        // window.location.href = "/checkout";
      });
  };

  const handleReturn = () => {
    console.log("Returned to previous page!");
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h4 className="text-primary">Xác nhận đơn hàng</h4>
          <Card>
            <Card.Body>
              <h5 className="text-primary">Thông tin giao hàng</h5>
              <p>
                <strong className="text-primary">Tên:</strong>{" "}
                {shippingInfo.name}
              </p>
              <p>
                <strong className="text-primary">Số điện thoại:</strong>{" "}
                {shippingInfo.phone}
              </p>
              <p>
                <strong className="text-primary">Email:</strong>{" "}
                {shippingInfo.email}
              </p>
              <p>
                <strong className="text-primary">Địa chỉ:</strong>{" "}
                {shippingInfo.address}, {shippingInfo.ward},{" "}
                {shippingInfo.district}, {shippingInfo.province}
              </p>
              <p>
                <strong className="text-primary">Ghi chú:</strong>{" "}
                {shippingInfo.note}
              </p>
              <p>
                <strong className="text-primary">
                  Phương thức thanh toán:
                </strong>{" "}
                {shippingInfo.paymentMethod}
              </p>
              <p>
                <strong className="text-primary">Tổng giá:</strong>{" "}
                <CurrencyFormatter value={shippingInfo.totalPrice} /> VNĐ{" "}
              </p>
            </Card.Body>
          </Card>
          <div className="mt-3">
            <Button variant="primary" className="me-2" onClick={handleConfirm}>
              Xác nhận đặt hàng
            </Button>
            <Button variant="secondary" onClick={handleReturn}>
              Trở về
            </Button>
          </div>
        </Col>
        <Col md={4} className="d-flex align-items-stretch">
          <Card>
            <Card.Body>
              <h4 className="text-primary d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Giỏ hàng của bạn</span>
                <span className="badge bg-secondary badge-pill">
                  {cartItems.length}
                </span>
              </h4>
              <ul className="list-group">
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between lh-sm"
                  >
                    <div>
                      <h6 className="my-0 text-primary">{item.name}</h6>
                      <small className="text-muted">
                        Số lượng: {item.quantity}
                      </small>
                    </div>
                    <span className="text-muted">
                      <CurrencyFormatter value={item.price} /> VNĐ
                    </span>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmCheckOut;
