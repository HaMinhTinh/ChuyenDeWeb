import React, {useEffect, useRef} from "react";

import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero.png";

const Register = () => {

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
        <div>
            <form className="form-signin text-center" style={{marginTop: "40px"}}>
                <img className="mb-4 d-block mx-auto" src={heroImg} alt="" width="72" height="72"/>
                <h1 className="h3 mb-3 font-weight-normal">Vui lòng nhập đầy đủ thông tin</h1>
                <label  htmlFor="inputEmail" className="sr-only">Địa chỉ Email</label>
                <input style={{ marginBottom : "10px"}} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">Mật khẩu</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <label htmlFor="inputPassword" className="sr-only">Nhập lại mật khẩu</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button style={{marginTop : "-15px", marginBottom : "10px"}} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <a href="#" className="mb-2">Quên mật khẩu?  </a>
                <a href="/register" className="mb-2">Đăng nhập</a>
            </form>




        </div>


    );
};

export default Register;