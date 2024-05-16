import React, {useEffect, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/account.css';


const Account = () => {
    return (
        <div id="content">
            <div className="wrapper">
                <div className="form_ctrl">
                    <div className="acc_ctrl m_r12">
                        <h2>
                            Tài khoản</h2>
                        <div className="list_ctrl">
                            <ul>
                                <li className="first active">
                                    <a id="account" title="Thông tin tài khoản"
                                       href="${pageContext.request.contextPath}/account?action=account">Thông tin tài
                                        khoản</a></li>
                                <li className="first">
                                    <a id="changePassword" title="Đổi mật khẩu"
                                       href="${pageContext.request.contextPath}/account?action=changePassword">Đổi
                                        mật khẩu</a></li>
                                <li className="first">
                                    <a id="reviewOrders" title="Xem lại đơn hàng"
                                       // href="${pageContext.request.contextPath}/account?action=reviewOrders">
                                        href="/reviewOrder">
                                        Xem lại đơn hàng</a></li>
                                <li className="first">
                                    <a id="changePrivateKey" title="Đổi Private Key"
                                       href="${pageContext.request.contextPath}/account?action=changePrivateKey">Đổi
                                        Private Key</a>
                                </li>
                                <li className="first">
                                    <a id="logout" title="Đăng xuất"
                                       href="${pageContext.request.contextPath}/logout?action=logout">Đăng xuất</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col_1_1">
                        <div id="login" className="frm_content"
                             onKeyPress="javascript:return WebForm_FireDefaultButton(event, 'acc_save')">
                            <h2>
                                Cập nhật thông tin tài khoản
                            </h2>
                            <form id="form">
                                <div className="input ">
                                    <label>
                                        <span className="req">*</span>Email của bạn:
                                    </label>
                                    {/*<input name="email" type="text" value="${cus.email}" maxLength="150" id="acc_email" />*/}
                                    <input name="email" type="text" value="" maxLength="150" id="acc_email" />
                                    <small>error</small>
                                </div>
                                <div className="input ">
                                    <label htmlFor="acc_fname">
                                        <span className="req">*</span>Họ:</label>
                                    <input name="fname" type="text" value="" maxLength="150"
                                           id="acc_fname" />
                                        <small>error</small>
                                </div>
                                <div className="input ">
                                    <label htmlFor="acc_lname">
                                        <span className="req">*</span>Tên:</label>
                                    <input name="lname" type="text" value="" maxLength="150"
                                           id="acc_lname" />
                                        <small>error</small>
                                </div>
                                <div className="input ">
                                    <label htmlFor="acc_phoneNumber">
                                        <span className="req">*</span>Điện thoại:</label>
                                    <input name="phoneNumber" type="tel" id="acc_phoneNumber" value="" />
                                        <small>error</small>
                                </div>
                                <div>
                                    <label htmlFor="acc_address">
                                        Địa chỉ:</label>
                                    <input name="address" type="text" maxLength="250" id="acc_address"
                                           value="" />
                                </div>
                                <div>
                                    <label>
                                        Tỉnh/Thành phố:</label>
                                    <select className="form-select form-select-sm" id="city"
                                            aria-label=".form-select-sm">
                                        <option value="" selected>Chọn tỉnh thành</option>
                                    </select>
                                    <label>
                                        Quận/Huyện:</label>
                                    <select className="form-select form-select-sm" id="district"
                                            aria-label=".form-select-sm">
                                        <option value="" selected>Chọn quận huyện</option>
                                    </select>
                                    <label>
                                        Phường/Xã:</label>
                                    <select className="form-select form-select-sm" id="ward"
                                            aria-label=".form-select-sm">
                                        <option value="" selected>Chọn phường xã</option>
                                    </select>
                                </div>
                                <button className="button">Lưu</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Account;