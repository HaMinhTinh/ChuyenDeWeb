import React, {useEffect, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/review-order.css';


const ReviewOrder = () => {
    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
  return (
      <div id="content">
          <div className="wrapper">
              <div className="form_ctrl">
                  <div className="acc_ctrl m_r12">
                      <h2>
                          Tài khoản</h2>
                      <div className="list_ctrl">
                          <ul>
                              <li className="first">
                                  <a id="account" title="Thông tin tài khoản"
                                     // href="${pageContext.request.contextPath}/account?action=account">Thông tin tài
                                     href="/account">Thông tin tài
                                      khoản</a></li>
                              <li className="first">
                                  <a id="changePassword" title="Đổi mật khẩu"
                                     href="${pageContext.request.contextPath}/account?action=changePassword">Đổi
                                      mật khẩu</a></li>
                              <li className="first active">
                                  <a id="reviewOrders" title="Xem lại đơn hàng"
                                     // href="${pageContext.request.contextPath}/account?action=reviewOrders">Xem
                                     href="/reviewOrder">Xem
                                      lại đơn hàng</a></li>
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
                      <div className="order-box">
                          <div className="order-box-header">
                              <div className="order-box-header-left">
                                  Thông tin đơn hàng
                              </div>
                              {/*<*/}
                              {/*%-- <div className="clear">--%>*/}
                              {/*<%-- Các hóa đơn--%>*/}
                              {/*<%-- </div>--%>*/}
                          </div>
                          <div className="paging">
                              <div className="tab">
                                  {/*<button className="tablinks" onClick="openCity(event, 'ChoXacNhan')">Chờ xác nhận*/}
                                  {/*</button>*/}
                                  {/*<button className="tablinks" onClick="openCity(event, 'ChoLayHang')">Chờ lấy hàng*/}
                                  {/*</button>*/}
                                  {/*<button className="tablinks" onClick="openCity(event, 'DangGiao')">Đang giao</button>*/}
                                  {/*<button className="tablinks" onClick="openCity(event, 'DanhGia')">Đánh giá</button>*/}
                                  {/*<button className="tablinks" onClick="openCity(event, 'DonHangDaMua')">Đơn hàng đã mua*/}
                                  {/*</button>*/}

                                  <button className="tablinks">Chờ xác nhận
                                  </button>
                                  <button className="tablinks" >Chờ lấy hàng
                                  </button>
                                  <button className="tablinks" >Đang giao</button>
                                  <button className="tablinks" >Đánh giá</button>
                                  <button className="tablinks" >Đơn hàng đã mua
                                  </button>
                              </div>

                              {/*<c:if test="${not empty message}">*/}
                              {/*    <div className="alert alert-${alert}" role="alert">*/}
                              {/*        ${message}*/}
                              {/*    </div>*/}
                              {/*</c:if>*/}
                              {/*<c:if test="${orderSuccess == '1'}">*/}
                              {/*    <div className="alert alert-success" role="alert">*/}
                              {/*        Đặt hàng thành công*/}
                              {/*    </div>*/}
                              {/*</c:if>*/}
                              {/*<c:if test="${isVerify == '1'}">*/}
                              {/*    <div className="alert alert-success" role="alert">*/}
                              {/*        Đơn hàng đã được xác thực*/}
                              {/*    </div>*/}
                              {/*</c:if>*/}
                              {/*<c:if test="${isVerify == '0'}">*/}
                              {/*    <div className="alert alert-danger" role="alert">*/}
                              {/*        Đơn hàng chưa được xác thực*/}
                              {/*    </div>*/}
                              {/*</c:if>*/}
                              <div id="ChoXacNhan" className="tabcontent">
                                  <table className="table">
                                      <thead>
                                      <tr>
                                          <th scope="col">Mã đơn hàng</th>
                                          <th scope="col" >Tên sản phẩm</th>
                                          <th scope="col">Ảnh</th>
                                          <th scope="col">Tình trạng</th>
                                          <th scope="col">Chi tiết</th>
                                      </tr>
                                      </thead>
                                      <tbody>
                                      {/*<c:forEach var="cartD" items="${listBillDeliverByIdOrder}">*/}
                                      {/*    <tr>*/}
                                      {/*        <td><a*/}
                                      {/*            href="${pageContext.request.contextPath}/orderDetail?id=${cartD.getId()}">${cartD.getId()}</a>*/}
                                      {/*        </td>*/}
                                      {/*        <td>*/}
                                      {/*            /!*<c:forEach var="billD" items="${cartD.getBills()}">*!/*/}
                                      {/*            /!*    /!*<p>${billD.name}<br><br></p>*!/*!/*/}
                                      {/*            /!*</c:forEach>*!/*/}
                                      {/*        </td>*/}
                                      {/*        <td>*/}
                                      {/*            /!*<c:forEach var="billD" items="${cartD.getBills()}">*!/*/}
                                      {/*            /!*    <img style="height: 50px"*!/*/}
                                      {/*            /!*         src="${pageContext.request.contextPath}/${billD.image}"><br><br>*!/*/}
                                      {/*            /!*</c:forEach>*!/*/}
                                      {/*        </td>*/}
                                      {/*        <td><a className="btn_blue"*/}
                                      {/*               href="${pageContext.request.contextPath}/cancelOrder?id=${cartD.id}">Hủy*/}
                                      {/*            đơn</a></td>*/}
                                      {/*        <td><a className="btn_blue"*/}
                                      {/*               href="${pageContext.request.contextPath}/orderDetail?id=${cartD.id}">Chi*/}
                                      {/*            tiết</a></td>*/}
                                      {/*    </tr>*/}
                                      {/*</c:forEach>*/}

                                      </tbody>
                                  </table>


                              </div>

                              <div id="ChoLayHang" className="tabcontent">

                                  <table className="table">
                                      <thead>
                                      <tr>
                                          <th scope="col">Mã đơn hàng</th>
                                          <th scope="col" >Tên sản phẩm</th>
                                          <th scope="col">Ảnh</th>
                                          <th scope="col">Tình trạng</th>
                                          <th scope="col">Chi tiết</th>
                                      </tr>
                                      </thead>
                                      <tbody>
                                      {/*<c:forEach var="cartW" items="${listBillWarByIdOrder}">*/}
                                      {/*    <tr>*/}
                                      {/*        <td><a*/}
                                      {/*            href="${pageContext.request.contextPath}/orderDetail?id=${cartW.getId()}">${cartW.getId()}</a>*/}
                                      {/*        </td>*/}
                                      {/*        <td>*/}
                                      {/*            /!*<c:forEach var="billW" items="${cartW.getBills()}">*!/*/}
                                      {/*            /!*    <p>${billW.name}<br><br></p>*!/*/}
                                      {/*            /!*</c:forEach>*!/*/}
                                      {/*        </td>*/}
                                      {/*        <td>*/}
                                      {/*            /!*<c:forEach var="billW" items="${cartW.getBills()}">*!/*/}
                                      {/*            /!*    <img style="height: 50px"*!/*/}
                                      {/*            /!*         src="${pageContext.request.contextPath}/${billW.image}"><br><br>*!/*/}
                                      {/*            /!*</c:forEach>*!/*/}
                                      {/*        </td>*/}
                                      {/*        <td><a className="btn_blue"*/}
                                      {/*               href="${pageContext.request.contextPath}/cancelOrder?id=${cartW.id}">Hủy*/}
                                      {/*            đơn</a></td>*/}
                                      {/*        <td><a className="btn_blue"*/}
                                      {/*               href="${pageContext.request.contextPath}/orderDetail?id=${cartW.id}">Chi*/}
                                      {/*            tiết</a></td>*/}
                                      {/*    </tr>*/}
                                      {/*</c:forEach>*/}

                                      </tbody>
                                  </table>
                              </div>

                              <div id="DangGiao" className="tabcontent">

                                  <table className="table">
                                      <thead>
                                      <tr>
                                          <th scope="col">Mã đơn hàng</th>
                                          <th scope="col" >Tên sản phẩm</th>
                                          <th scope="col">Ảnh</th>
                                          <th scope="col">Chi tiết</th>
                                      </tr>
                                      </thead>
                                      <tbody>
                                      {/*<c:forEach var="cartL" items="${listBillDelivByIdOrder}">*/}
                                      {/*    <tr>*/}
                                      {/*        <td><a*/}
                                      {/*            href="${pageContext.request.contextPath}/orderDetail?id=${cartL.getId()}">${cartL.getId()}</a>*/}
                                      {/*        </td>*/}
                                      {/*        <td>*/}
                                      {/*            /!*<c:forEach var="billL" items="${cartL.getBills()}">*!/*/}
                                      {/*            /!*    <p>${billL.name}<br><br></p>*!/*/}
                                      {/*            /!*</c:forEach>*!/*/}
                                      {/*        </td>*/}
                                      {/*        <td>*/}
                                      {/*            /!*<c:forEach var="billL" items="${cartL.getBills()}">*!/*/}
                                      {/*            /!*    <img style="height: 50px"*!/*/}
                                      {/*            /!*         src="${pageContext.request.contextPath}/${billL.image}"><br><br>*!/*/}
                                      {/*            /!*</c:forEach>*!/*/}
                                      {/*        </td>*/}
                                      {/*        <td><a className="btn_blue"*/}
                                      {/*               href="${pageContext.request.contextPath}/orderDetail?id=${cartL.id}">Chi*/}
                                      {/*            tiết</a></td>*/}
                                      {/*    </tr>*/}
                                      {/*</c:forEach>*/}

                                      </tbody>
                                  </table>
                              </div>
                              <div id="DanhGia" className="tabcontent">
                                  <table className="table">
                                      <thead>
                                      <tr>
                                          <th scope="col">Mã đơn hàng</th>
                                          <th scope="col" >Tên sản phẩm</th>
                                          <th scope="col">Ảnh</th>
                                          <th scope="col">Đánh giá</th>
                                          <th scope="col">Chi tiết</th>
                                      </tr>
                                      </thead>
                                      <tbody>
                                      {/*<c:forEach var="cartR" items="${listBillRateByIdOrder}">*/}
                                      {/*    <tr>*/}
                                      {/*        <td><a*/}
                                      {/*            href="${pageContext.request.contextPath}/orderDetail?id=${cartR.getId()}">${cartR.getId()}</a>*/}
                                      {/*        </td>*/}
                                      {/*        <td>*/}
                                      {/*            /!*<c:forEach var="billR" items="${cartR.getBills()}">*!/*/}
                                      {/*            /!*    <p>${billR.name}<br><br></p>*!/*/}
                                      {/*            /!*</c:forEach>*!/*/}
                                      {/*        </td>*/}
                                      {/*        <td>*/}
                                      {/*            /!*<c:forEach var="billR" items="${cartR.getBills()}">*!/*/}
                                      {/*            /!*    <img style="height: 50px"*!/*/}
                                      {/*            /!*         src="${pageContext.request.contextPath}/${billR.image}"><br><br>*!/*/}
                                      {/*            /!*</c:forEach>*!/*/}
                                      {/*        </td>*/}
                                      {/*        <td>*/}
                                      {/*            /!*<c:forEach var="billR" items="${cartR.getBills()}">*!/*/}
                                      {/*            /!*    <a className="btn_blue"*!/*/}
                                      {/*            /!*       href="${pageContext.request.contextPath}/rate?id=${cartR.getId()}&idBook=${billR.idBook}">Đánh*!/*/}
                                      {/*            /!*        giá</a><br><br>*!/*/}
                                      {/*            /!*</c:forEach>*!/*/}
                                      {/*        </td>*/}
                                      {/*        <td><a className="btn_blue"*/}
                                      {/*               href="${pageContext.request.contextPath}/orderDetail?id=${cartR.getId()}">Chi*/}
                                      {/*            tiết</a></td>*/}
                                      {/*    </tr>*/}
                                      {/*</c:forEach>*/}

                                      </tbody>
                                  </table>
                              </div>
                              <div id="DonHangDaMua" className="tabcontent">
                                  <table className="table">
                                      <thead>
                                      <tr>
                                          <th scope="col">Mã đơn hàng</th>
                                          <th scope="col">Tên sản phẩm</th>
                                          <th scope="col">Ảnh</th>
                                          <th scope="col">Số lượng</th>
                                          <th scope="col">Tổng tiền</th>
                                          <th scope="col">Tình trạng</th>
                                      </tr>
                                      </thead>
                                      <tbody>
                                      {/*<c:forEach var="cartH" items="${listBillByIdOrder}">*/}
                                      {/*    <tr>*/}
                                      {/*        <td><a*/}
                                      {/*            href="${pageContext.request.contextPath}/orderDetail?id=${cartH.getId()}">${cartH.getId()}</a>*/}
                                      {/*        </td>*/}
                                      {/*        <td>*/}
                                      {/*            /!*<c:forEach var="billH" items="${cartH.getBills()}">*!/*/}
                                      {/*            /!*    <p>${billH.name}<br><br></p>*!/*/}
                                      {/*            /!*</c:forEach>*!/*/}
                                      {/*        </td>*/}
                                      {/*        <td>*/}
                                      {/*            /!*<c:forEach var="billH" items="${cartH.getBills()}">*!/*/}
                                      {/*            /!*    <img style="height: 50px"*!/*/}
                                      {/*            /!*         src="${pageContext.request.contextPath}/${billH.image}"><br><br>*!/*/}
                                      {/*            /!*</c:forEach>*!/*/}
                                      {/*        </td>*/}
                                      {/*        <td>*/}
                                      {/*            /!*<c:forEach var="billH" items="${cartH.getBills()}">*!/*/}
                                      {/*            /!*    <p>${billH.quantity}<br><br></p>*!/*/}
                                      {/*            /!*</c:forEach>*!/*/}
                                      {/*        </td>*/}
                                      {/*        <td>*/}
                                      {/*            /!*<c:forEach var="billH" items="${cartH.getBills()}">*!/*/}
                                      {/*            /!*    <p>${billH.totalPrice}<br><br></p>*!/*/}
                                      {/*            /!*</c:forEach>*!/*/}
                                      {/*        </td>*/}
                                      {/*        <td>*/}
                                      {/*            /!*<c:forEach var="billH" items="${cartH.getBills()}">*!/*/}
                                      {/*            /!*    <a className="btn_blue"*!/*/}
                                      {/*            /!*       href="${pageContext.request.contextPath}/products/product-detail?id=${billH.idBook}">Mua*!/*/}
                                      {/*            /!*        lại</a><br><br>*!/*/}
                                      {/*            /!*</c:forEach>*!/*/}
                                      {/*        </td>*/}
                                      {/*    </tr>*/}
                                      {/*</c:forEach>*/}

                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default ReviewOrder;
