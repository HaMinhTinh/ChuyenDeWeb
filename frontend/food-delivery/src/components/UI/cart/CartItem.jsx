import React from "react";
import { ListGroupItem } from "reactstrap";

import "../../../styles/cart-item.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import CurrencyFormatter from "../../CurrencyFormatter";

const CartItem = ({ item }) => {
  const { id, name, imageUrl, price, quantity } = item;
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(cartActions.addItem(item));
  };

  const decreaseQuantity = () => {
    dispatch(cartActions.removeItem(id));
  };

  const removeItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  return (
      <ListGroupItem className="border-0 cart__item">
        <div className="cart__item-info d-flex gap-2">
          <img src={imageUrl} alt={imageUrl} style={{width: '100px', height: '100px', objectFit: 'cover'}}/>

          <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
            <div>
              <h6 className="cart__product-title">{name}</h6>
              <p className="d-flex align-items-center gap-5 cart__product-price">
                {quantity}x <span><CurrencyFormatter value={price * quantity} /> VNĐ</span>
              </p>
              <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={increaseQuantity}>
                <i className="ri-add-line"></i>
              </span>
                <span className="quantity">{quantity}</span>
                <span className="decrease__btn" onClick={decreaseQuantity}>
                <i className="ri-subtract-line"></i>
              </span>
              </div>
            </div>

            <span className="delete__btn" onClick={removeItem}>
            <i className="ri-close-line"></i>
          </span>
          </div>
        </div>
      </ListGroupItem>
  );
};

export default CartItem;