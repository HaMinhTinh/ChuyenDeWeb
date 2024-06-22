import React, { useEffect, useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import heroImg from "../assets/images/phong.jpg";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to handle checking username
  const checkUsername = async (username) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8082/api/checkUsername/${username}`
      );
      const data = await response.text();
      if (response.ok) {
        setError(data);
      } else {
        setError("");
      }
    } catch (error) {
      console.error("Error checking username:", error);
    }
  };

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  // Debounced version of checkUsername function with 500ms delay
  const debouncedCheckUsername = debounce(checkUsername, 500);

  // Event handler for username input change
  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    debouncedCheckUsername(newUsername); // Debounced check
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Kiểm tra username đã tồn tại hay chưa
      const usernameCheckResponse = await fetch(
        `http://127.0.0.1:8082/api/checkUsername/${username}`
      );
      const usernameCheckResult = await usernameCheckResponse.text();
      if (usernameCheckResponse.ok) {
        setError(usernameCheckResult);
        return;
      } else {
        const response = await fetch("http://127.0.0.1:8082/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password, rePassword }),
        });

        if (response.ok) {
          navigate("/login"); // Redirect to login page upon successful registration
          console.error("Success");
        } else {
          const errorMessage = await response.text();
          setError(errorMessage);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (newPassword.length < 8) {
      setError("Mật khẩu phải có ít nhất 8 ký tự");
    } else {
      setError("");
    }
  };

  const handleRePasswordChange = (event) => {
    const newRePassword = event.target.value;
    setRePassword(newRePassword);
    if (newRePassword !== password) {
      setError("Mật khẩu nhập lại không khớp");
    } else {
      setError("");
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
        <h1 className="h3 mb-3 font-weight-normal">
          Vui lòng nhập đầy đủ thông tin
        </h1>
        <input
          style={{ marginBottom: "10px" }}
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          className="form-control"
          placeholder="Tên đăng nhập"
          required
          autoFocus
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="form-control"
          placeholder="Mật khẩu"
          required
        />
        <input
          type="password"
          value={rePassword}
          onChange={handleRePasswordChange}
          className="form-control"
          placeholder="Nhập lại mật khẩu"
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
          name="btnRegister"
          className="btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Đăng ký
        </button>
        <a href="#" className="mb-2">
          Quên mật khẩu?{" "}
        </a>
        <a href="/login" className="mb-2">
          Đăng nhập
        </a>
      </form>
    </div>
  );
};

export default Register;
