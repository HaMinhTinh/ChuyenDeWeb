import React, {useEffect, useRef} from "react";
import heroImg from "../assets/images/hero.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/login.css";
const Login = () => {
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
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label  htmlFor="inputEmail" className="sr-only">Email address</label>
                <input style={{ marginBottom : "10px"}} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button style={{marginTop : "-15px", marginBottom : "10px"}} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <a href="#" className="mb-2">Forgot Password?  </a>
                <a href="/register" className="mb-2">Sign up</a>
            </form>




        </div>


    );
};

export default Login;