import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const Checkout = () => {
  useEffect(() => {
    // Xử lý validation của form
    (function() {
      'use strict';
      window.addEventListener('load', function() {
        const forms = document.getElementsByClassName('needs-validation');
        const validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();
  }, []);
  return (



    <div style={{ maxWidth: "85%", margin: "0 auto" , marginTop: "80px", marginBottom: "80px"}}>

      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Giỏ hàng của bạn</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group" style={{ textDecoration: "none" }}>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Tên sản phẩm</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Tên sản phẩm</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Tên sản phẩm</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$5</span>
            </li>
          </ul>

          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Mã giảm giá</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">-$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Phí giao hàng</h6>

              </div>
              <span className="text-muted">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Thời gian giao hàng</h6>

              </div>
              <span className="text-muted">4/1/2024 - 5/1/2024</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code"/>
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
            </div>
          </form>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" noValidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">Họ</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Tên</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="username">Tên tài khoản</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" id="username" placeholder="Username" required/>
                <div className="invalid-feedback" style={{ width: "100%" }}>

                Your username is required.
                  </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
              <label htmlFor="country">Tỉnh ,Thành</label>
              <select className="custom-select d-block w-100" id="country" required>
                <option value="">Thành phố Hồ Chí Minh</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="state">Quận, Huyện</label>
                <select className="custom-select d-block w-100" id="state" required>
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="country">Phường ,Xã</label>
                <select className="custom-select d-block w-100" id="country" required>
                  <option value="">Thành phố Hồ Chí Minh</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="state">Số nhà, Tên đường</label>
                <input type="text" className="form-control" id="address2" placeholder=""/>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

            </div>






            <hr className="mb-4"/>

              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="save-info"/>
                  <label className="custom-control-label" htmlFor="save-info">Lưu địa chỉ giao hàng</label>
              </div>
              <hr className="mb-4"/>

                <h4 className="mb-3">Hình thức thanh toán</h4>

                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked
                           required/>
                      <label className="custom-control-label" htmlFor="credit">Thanh toán trực tiếp</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required/>
                      <label className="custom-control-label" htmlFor="debit">Thẻ ngân hàng</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required/>
                      <label className="custom-control-label" htmlFor="paypal">Momo</label>
                  </div>
                </div>

                <hr className="mb-4"/>
                  <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Checkout;