import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/order-detail.css";
import { useNavigate } from "react-router-dom";

const OrderDetail = () => {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const [orderDetail, setOrderDetail] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        const orderId = new URLSearchParams(window.location.search).get("id");
        const response = await fetch(
          `http://127.0.0.1:8082/api/orderDetail/${orderId}`
        );
        if (response.ok) {
          const data = await response.json();
          setOrderDetail(data);
        } else {
          console.error("Error fetching order detail");
        }
      } catch (error) {
        console.error("Error fetching order detail:", error);
      }
    };

    fetchOrderDetail();
  }, []);

  // Thay thế thẻ button bằng sự kiện onClick trực tiếp trên nút "Hủy đơn" và ngăn chặn hành vi mặc định của trình duyệt
  const cancelOrder = async (orderId, event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của trình duyệt
    try {
      const response = await fetch(
        `http://127.0.0.1:8082/api/cancelOrder/${orderId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        // Xử lý thành công, có thể cập nhật UI hoặc hiển thị thông báo
        navigate("/reviewOrder");
        console.log("Đã hủy đơn hàng thành công");
      } else {
        console.error("Error cancelling order");
      }
    } catch (error) {
      console.error("Error cancelling order:", error);
    }
  };

  return (
    <div className="container" style={{ minHeight: "600px" }}>
      <div>
        <h1 className="text-center my-4" style={{ paddingTop: "60px" }}>
          Chi tiết đơn hàng
        </h1>
      </div>
      {Array.isArray(orderDetail) &&
        orderDetail.map((order) => (
          <form
            action=""
            method="post"
            acceptCharset="UTF-8"
            key={order.orderID}
          >
            <div className="row">
              <div className="col-md-6">
                <h2 style={{ fontSize: "25px" }}>Thông tin khách hàng</h2>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Tên:</td>
                      <td>{userInfo.username}</td>
                    </tr>
                    <tr>
                      <td>Địa chỉ:</td>
                      <td>{userInfo.address}</td>
                    </tr>
                    <tr>
                      <td>Số điện thoại:</td>
                      <td>{userInfo.phone}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6">
                <h2 style={{ fontSize: "25px" }}>Thông tin đơn hàng</h2>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Mã đơn hàng:</td>
                      <td>{order.orderID}</td>
                    </tr>
                    <tr>
                      <td>Ngày đặt hàng:</td>
                      <td>{order.date}</td>
                    </tr>
                    <tr>
                      <td>Tổng giá trị:</td>
                      <td>{order.totalPrice} VNĐ</td>
                    </tr>
                    <tr>
                      <td>Tình trạng:</td>
                      <td>{order.status}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h2 style={{ fontSize: "25px" }}>Danh sách sản phẩm</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Ảnh</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Tổng tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={order.orderID}>
                      <td>{order.name}</td>
                      <td>
                        <img
                          style={{ height: "50px" }}
                          src={order.url}
                          alt="product"
                        />
                      </td>
                      <td>{order.quantity}</td>
                      <td>{order.totalPrice}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="parent-button">
                  <button
                    className="centered-button"
                    onClick={(event) => cancelOrder(order.orderID, event)}
                  >
                    Hủy đơn
                  </button>
                </div>
              </div>
            </div>
          </form>
        ))}
    </div>
  );  
};

export default OrderDetail;
