import React, {useEffect} from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

    useEffect(() => {
        if (!userInfo) {
            window.location.href = "/login";
        }
    }, [userInfo]);

    const deleteItem = (id) => {
        dispatch(cartActions.removeItem(id));
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
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {cartItems.map((item) => (
                                        <Tr
                                            key={item.id}
                                            item={item}
                                            increaseQuantity={increaseQuantity}
                                            decreaseQuantity={decreaseQuantity}
                                        />
                                    ))}
                                    </tbody>
                                </table>
                            )}

                            <div className="mt-4">
                                <h6>
                                    Tổng:
                                    <span className="cart__subtotal">{totalAmount}</span>
                                </h6>
                                <p>Thuế và phí vận chuyển sẽ được tính khi thanh toán</p>
                                <div className="cart__page-btn">
                                    <button className="addTOCart__btn me-4">
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
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

const Tr = ({ item, increaseQuantity, decreaseQuantity }) => {
    const { id, imageUrl, name, price, quantity } = item;

    return (
        <tr>
            <td className="text-center cart__img-box">
                <img src={imageUrl} alt="" />
            </td>
            <td className="text-center">{name}</td>
            <td className="text-center">${price}</td>
            <td className="text-center">
                <div className="d-flex align-items-center justify-content-center">
                    <button className="btn btn-sm btn-secondary" onClick={() => decreaseQuantity(id)}>-</button>
                    <span className="mx-2">{quantity}</span>
                    <button className="btn btn-sm btn-secondary" onClick={() => increaseQuantity(item)}>+</button>
                </div>
            </td>
        </tr>
    );
};

export default Cart;