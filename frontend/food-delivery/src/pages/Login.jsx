import React, { useEffect, useRef, useState } from "react";
import heroImg from "../assets/images/phong.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Xử lý validation của form
    (function () {
      "use strict";
      window.addEventListener(
        "load",
        function () {
          const forms = document.getElementsByClassName("needs-validation");
          const validation = Array.prototype.filter.call(forms, function (
            form
          ) {
            form.addEventListener(
              "submit",
              function (event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add("was-validated");
              },
              false
            );
          });
        },
        false
      );
    })();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8082/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const userInfo = await response.json();

        // Lưu thông tin người dùng vào session storage
        sessionStorage.setItem("userInfo", JSON.stringify(userInfo));

        navigate("/home"); // Chuyển hướng đến trang đăng nhập khi đăng ký thành công
        console.error("Success");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="form-signin text-center"
        style={{ marginTop: "40px" }}
      >
        <img
          className="mb-4 d-block mx-auto"
          src={heroImg}
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Username
        </label>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: "10px" }}
          type="text"
          id="inputEmail"
          className="form-control"
          placeholder="Username"
          required
          autoFocus
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button
          style={{ marginTop: "-15px", marginBottom: "10px" }}
          className="btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Sign in
        </button>
        <a href="#" className="mb-2">
          Forgot Password?{" "}
        </a>
        <a href="/register" className="mb-2">
          Sign up
        </a>
      </form>
    </div>
  );
};

export default Login;
