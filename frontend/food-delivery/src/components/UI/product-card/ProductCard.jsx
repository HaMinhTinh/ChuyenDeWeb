import React, { useEffect, useState } from "react";
import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id, name, imageUrl, price } = props.item || {};
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
      if (!id || !name || !price || !imageUrl) return;
      console.log(imageUrl)
      dispatch(
          cartActions.addItem({
              id,
              name,
              imageUrl,
              price,
              quantity

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

//   return (
//     <div className="product__item">
//       <div className="product__img">
//         <img src={product.imageUrl} alt="product-img" className="w-50" />
//       </div>
//       <div className="product__content">
//         <h5>
//           <Link to={`/foods/${product.id}`}>{product.name}</Link>
//         </h5>
//         <div className="d-flex align-items-center justify-content-between">
//           <span className="product__price">{product.price}</span>
//           <button className="addTOCart__btn" onClick={addToCart}>
//             Thêm vào giỏ hàng
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

return (
  <div className="product__item">
      {id ? (
          <>
              <div className="product__img">
              <img src={imageUrl} alt="product-img" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />          
              </div>
              <div className="product__content">
                  <h5>
                      <Link to={`/detailProduct?id=${id}`}>{name}</Link>
                  </h5>
                  <div className="d-flex align-items-center justify-content-between">
                      <span className="product__price">{price}</span>
                      {addedToCart ? (
                          <div className="d-flex align-items-center">
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

export default ProductCard;
