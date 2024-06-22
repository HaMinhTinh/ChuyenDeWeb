import React, { useEffect, useState } from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import CurrencyFormatter from "../components/CurrencyFormatter";

const Cart = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("cart items :: ", cartItems);
  const dispatch = useDispatch();

  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

  useEffect(() => {
    if (!userInfo) {
      window.location.href = "/login";
    }
  }, [userInfo]);

  const [deleteItemId, setDeleteItemId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  const deleteItem = (id) => {
    setDeleteItemId(id);
    toggleModal();
  };

  const confirmDeleteItem = () => {
    if (deleteItemId !== null) {
      dispatch(cartActions.removeItem(deleteItemId));
      setDeleteItemId(null);
    }
    toggleModal();
  };

  const increaseQuantity = (item) => {
    dispatch(cartActions.addItem(item));
  };

  const decreaseQuantity = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  return (
      <Helmet title="Cart">
        <CommonSection title="Giỏ hàng của bạn" />
        <section>
          <Container>
            <Row>
              <Col lg="12">
                {cartItems.length === 0 ? (
                    <h5 className="text-center">Giỏ hàng của bạn trống</h5>
                ) : (
                    <table className="table table-bordered">
                      <thead>
                      <tr>
                        <th>Hình</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Thao tác</th>
                      </tr>
                      </thead>
                      <tbody>
                      {cartItems.map((item) => (
                          <tr key={item.id}>
                            <td className="text-center cart__img-box">
                              <img src={item.image} alt="" />
                            </td>
                            <td className="text-center">{item.name}</td>
                            <td className="text-center">
                              <CurrencyFormatter value={item.price} /> VNĐ
                            </td>
                            <td className="text-center">
                              <div className="d-flex align-items-center justify-content-center">
                                <button
                                    className="btn btn-sm btn-secondary"
                                    onClick={() => decreaseQuantity(item.id)}
                                >
                                  -
                                </button>
                                <span className="mx-2">{item.quantity}</span>
                                <button
                                    className="btn btn-sm btn-secondary"
                                    onClick={() => increaseQuantity(item)}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="text-center">
                              <button
                                  className="delete-btn ms-3"
                                  onClick={() => deleteItem(item.id)}
                              >
                                Xóa
                              </button>
                            </td>
                          </tr>
                      ))}
                      </tbody>
                    </table>
                )}

                <div className="mt-4">
                  <h6>
                    Tổng:
                    <span className="cart__subtotal">
                    {" "}
                      <CurrencyFormatter value={totalAmount} /> VNĐ
                  </span>
                  </h6>
                  <p>Thuế và phí vận chuyển sẽ được tính khi thanh toán</p>
                  <div className="cart__page-btn">
                    <button className="addTOCart__btn">
                      <Link to="/foods">Tiếp tục mua</Link>
                    </button>
                    {cartItems.length > 0 ? (
                        <button className="addTOCart__btn">
                          <Link to="/checkout">Tiến hành thanh toán</Link>
                        </button>
                    ) : (
                        <button className="addTOCart__btn" disabled>
                          Tiến hành thanh toán
                        </button>
                    )}
                  </div>
                </div>

                {/* Modal xác nhận xóa sản phẩm */}
                <Modal isOpen={modalOpen} toggle={toggleModal}>
                  <ModalHeader toggle={toggleModal}>Xác nhận xóa sản phẩm</ModalHeader>
                  <ModalBody>
                    Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không?
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onClick={confirmDeleteItem}>Xóa</Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>Hủy</Button>
                  </ModalFooter>
                </Modal>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
  );
};

export default Cart;
