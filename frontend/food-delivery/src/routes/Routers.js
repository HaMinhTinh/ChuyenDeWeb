import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import FoodDetails from "../pages/ProductsDetails";
import AdminHeader from "../Admin/index";
import UserManagement from "../Admin/userManagement";
import ProductManagement from "../Admin/productManagement";
import RevenueManagement from "../Admin/revenueManagement";
import Account from "../pages/Account"
import ReviewOrder from "../pages/ReviewOrder"
import ChangePassword from  "../pages/changePassword"
import ForgetPassword from "../pages/ForgetPassword";
import OrderDetail from  "../pages/OrderDetail";
import ConfirmCheckOut from "../pages/ConfirmCheckOut";
import AllProducts from "../pages/AllProducts";
const Routers = () => {
    return (
        <Routes>
            <Route path="/admin" element={<AdminHeader />} />
            <Route path="/userManagement" element={<UserManagement />} />
            <Route path="/productManagement" element={<ProductManagement />} />
            <Route path="/revenueManagement" element={<RevenueManagement />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/foods" element={<AllProducts />} />
            <Route path="/detailProduct" element={<FoodDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminHeader />} />
            <Route path="/account" element={<Account />} />
            <Route path="/reviewOrder" element={<ReviewOrder />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route path="/orderDetail" element={<OrderDetail />} />
            <Route path="/order-confirmation" element={<ConfirmCheckOut />} />
        </Routes>

    );
};

export default Routers;
