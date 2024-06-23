import React, { useState, useEffect } from "react";
import bg from "../assets/images/check.png";
import bgClose from "../assets/images/close.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { useLayoutEffect } from "react";
import { getQueryParams } from "../App";
import axios from "axios";
export const PaymentProcess = () => {
  const [status, setStatus] = useState("PENDING");
  useLayoutEffect(() => {
    const params = getQueryParams(window.location.search);
    const { vnp_ResponseCode } = params;
    if (vnp_ResponseCode == "00") {
      setStatus("SUCCESS");
    } else {
      setStatus("FAILED");
    }
  }, []);
  useLayoutEffect(() => {
    if (status == "SUCCESS") {
      const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      const storedShippingInfo =
        JSON.parse(localStorage.getItem("shippingInfo")) || {};
      const storedCartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];
      const userId = userInfo.id_user;

      axios
        .post("http://127.0.0.1:8082/api/confirmOrder", {
          shippingInfo: storedShippingInfo,
          userId,
          storedCartItems,
        })
        .then((response) => {
          localStorage.removeItem("shippingInfo");
          localStorage.removeItem("orderDetails");
          localStorage.removeItem("cartItems");
          localStorage.removeItem("totalAmount");
          localStorage.removeItem("totalQuantity");
          setTimeout(() => {
            window.location.href = "/reviewOrder";
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
          // window.location.href = "/checkout";
        });
    }
  }, [status]);
  const getMessageFromStatus = (status) => {
    switch (status) {
      case "PENDING":
        return "Your Order Is Processing";
      case "SUCCESS":
        return "Your Order Success";
      case "FAILED":
        return "Your Order Failed";
    }
  };
  return (
    <div
      style={{
        maxWidth: "85%",
        margin: "0 auto",
        marginTop: "80px",
        marginBottom: "80px",
      }}
    >
      <div className="d-flex flex-column w-100 justify-content-center align-items-center">
        {status == "PENDING" ? (
          <div
            class="spinner-border"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          ></div>
        ) : status == "SUCCESS" ? (
          <img src={bg} width={128} />
        ) : (
          <img src={bgClose} width={128} />
        )}
        <h3 className="mt-4">{getMessageFromStatus(status)}</h3>
      </div>
    </div>
  );
};
