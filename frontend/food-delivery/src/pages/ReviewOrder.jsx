import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/review-order.css";

const ReviewOrder = () => {
  const [allOrders, setAllOrders] = useState([]);
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
            "http://127.0.0.1:8082/api/historyOrders",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ idUser: userInfo.id_user || "" }),
            }
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Dữ liệu nhận được: ", data); // Log dữ liệu nhận được
          setAllOrders(data);
          console.error("Lịch sử thành công");
        } else {
          const errorMessage = await response.text();
          console.error("Lỗi lịch sử " + errorMessage);
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    // Xóa sessionStorage khi người dùng đăng xuất
    sessionStorage.removeItem("userInfo");
    // Chuyển hướng người dùng đến trang đăng nhập hoặc trang chính
    window.location.href = "/home"; // Thay đổi đường dẫn tùy theo yêu cầu của bạn
  };

  return (
    <div id="content">
      <div className="wrapper">
        <div className="form_ctrl">
          <div className="acc_ctrl m_r12">
            <h2>Tài khoản</h2>
            <div className="list_ctrl">
              <ul>
                <li className="first active">
                  <a id="account" title="Thông tin tài khoản" href="/account">
                    Thông tin tài khoản
                  </a>
                </li>
                <li className="first">
                  <a
                    id="changePassword"
                    title="Đổi mật khẩu"
                    href="/changePassword"
                  >
                    Đổi mật khẩu
                  </a>
                </li>
                <li className="first">
                  <a
                    id="reviewOrders"
                    title="Xem lại đơn hàng"
                    href="/reviewOrder"
                  >
                    Xem lại đơn hàng
                  </a>
                </li>
                <li className="first">
                  <a
                    onClick={handleLogout}
                    id="logout"
                    title="Đăng xuất"
                    href="/home"
                  >
                    Đăng xuất
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col_1_1">
            <div className="order-box" style={{ width: "838px" }}>
              <div className="order-box-header">
                <div className="order-box-header-left">Thông tin đơn hàng</div>
              </div>
              <div className="paging">
                <div className="tab"></div>
                <div id="ChoXacNhan" className="tabcontent">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Mã đơn</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">Ngày</th>
                        <th scope="col">Tình trạng</th>
                        <th scope="col">Chi tiết</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allOrders.map((order) => (
                        <tr key={order.orderID}>
                          <td style={{ width: "73px", paddingTop: "20px" }}>
                            {order.orderID}
                          </td>
                          <td style={{ width: "63px", paddingTop: "20px" }}>
                            {order.name}
                          </td>
                          <td>
                            <img
                              style={{ height: "50px" }}
                              src={order.url}
                              alt="product"
                            />
                          </td>
                          <td style={{ paddingTop: "20px" }}>{order.date}</td>
                          <td style={{ paddingTop: "20px" }}>{order.status}</td>
                          <td style={{ paddingTop: "20px" }}>
                            <a
                              className="btn_blue"
                              href={`/orderDetail?id=${order.orderID}`}
                            >
                              Chi tiết
                            </a>
                          </td>
                        </tr>
                      ))}
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
