import React, { useState } from "react";
import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import CurrencyFormatter from "../../CurrencyFormatter";

const ProductItem = (props) => {
    const { id, name, imageUrl, price, status, discount } = props.item || {};
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const addToCart = () => {
        if (!id || !name || !price || !imageUrl) return;
        dispatch(
            cartActions.addItem({
                id,
                name,
                imageUrl,
                price,
                quantity,
            })
        );
        setAddedToCart(true);
    };

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        } else if (quantity === 1) {
            removeItem();
        }
    };

    const removeItem = () => {
        if (!id || !name || !price || !imageUrl) return;
        setAddedToCart(false);
        setQuantity(1);
    };

    return (
        <div className="product__item">
            {id ? (
                <>
                    <Link to={`/detailProduct?id=${id}`} className="product__img">
                        {status === "new" && !discount && <span className="new-badge">New</span>}
                        <img src={imageUrl} alt="product-img" />
                    </Link>
                    <div className="product__content">
                        <h5>{name}</h5>
                        <div className="d-flex align-items-center justify-content-between">
                            <span className="product__price"><CurrencyFormatter value={price}/> VNĐ</span>
                        </div>
                        <div>
                            {discount > 0 && <span className="product__discount">Giảm {discount}%</span>}
                            {addedToCart ? (
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="btn-group me-2">
                                        <button className="btn btn-sm btn-secondary" onClick={decreaseQuantity}>-</button>
                                        <span className="btn btn-sm btn-light">{quantity}</span>
                                        <button className="btn btn-sm btn-secondary" onClick={increaseQuantity}>+</button>
                                    </div>
                                    <button className="btn btn-danger btn-sm" onClick={removeItem}>Hủy</button>
                                </div>
                            ) : (
                                <button className="addTOCart__btn" onClick={addToCart}>
                                    Thêm vào giỏ hàng
                                </button>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <p>Không có sản phẩm</p>
            )}
        </div>
    );
};

export default ProductItem;
