import React, { useRef, useEffect, useState } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import "../../styles/header.css";

const nav__links = [
  {
    display: "Trang chủ",
    path: "/home",
  },
  {
    display: "Bánh",
    path: "/foods",
  },
  {
    display: "Giỏ hàng",
    path: "/cart",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
  {
    display: "Admin",
    path: "/admin",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const location = useLocation();
  const [hideHeaderFooter, setHideHeaderFooter] = useState(false);
  useEffect(() => {
    const isAdminPage = location.pathname === "/admin";
    const isUserAdminPage = location.pathname.trim() === "/userManagement";
    const isProductAdminPage =
      location.pathname.trim() === "/productManagement";
    const isRevenueAdminPage =
      location.pathname.trim() === "/revenueManagement";
    setHideHeaderFooter(
      isAdminPage || isUserAdminPage || isProductAdminPage || isRevenueAdminPage
    );
  }, [location]);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <>
      {!hideHeaderFooter && (
        <header className="header" ref={headerRef}>
          <Container>
            <div className="nav__wrapper d-flex align-items-center justify-content-between">
              <Link to="/home">
                <div className="logo">
                  <img src={logo} alt="logo" />
                  <h5>Tasty Cake</h5>
                </div>
              </Link>

              {/* ======= menu ======= */}
              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <div className="menu d-flex align-items-center gap-5">
                  {nav__links.map((item, index) => (
                    <NavLink
                      to={item.path}
                      key={index}
                      className={(navClass) =>
                        navClass.isActive ? "active__menu" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* ======== nav right icons ========= */}
              <div className="nav__right d-flex align-items-center gap-4">
                <span className="cart__icon" onClick={toggleCart}>
                  <i className="ri-shopping-basket-line"></i>
                  <span className="cart__badge">{totalQuantity}</span>
                </span>

                <span className="user">
                  <Link to="/account">
                    <i className="ri-user-line"></i>
                  </Link>
                  {/*<ul className="navbar-nav mr-auto">*/}
                  {/*    <li className="nav-item dropdown">*/}
                  {/*        <div className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                  {/*          <a className="dropdown-item" href="#">Action</a>*/}
                  {/*          <a className="dropdown-item" href="#">Another action</a>*/}
                  {/*        </div>*/}
                  {/*    </li>*/}
                  {/*</ul>*/}
                </span>

                <span className="mobile__menu" onClick={toggleMenu}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </Container>
        </header>
      )}
    </>
  );
};

export default Header;
