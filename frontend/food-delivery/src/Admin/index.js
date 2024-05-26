import React, {useEffect, useState} from 'react';
import './assests/css/sb-admin-2.min.css'

import './vendor/fontawesome-free/css/all.min.css'

function AdminHeader() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [information, setinformation] = useState([]);
    const [users, setUsers] = useState([]);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/managementAdmin");
                const data = await response.json();
                setinformation(data);

            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu:", error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/managementCustomerAdmin");
                const data = await response.json();
                setUsers(data);

            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu:", error);
            }
        };

        fetchData();
    }, []);
    const toggleDropdown1 = () => {
        setShowDropdown1(!showDropdown1);
    };
    return (
    <div>
        <div id="wrapper">
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">MITI FOOD <sup>2</sup></div>
                </a>

                <hr className="sidebar-divider my-0"/>

                    <li className="nav-item active">
                        <a className="nav-link" href="/admin">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Tổng quan </span></a>
                    </li>


                            <li className="nav-item">
                                <a className="nav-link" href="/userManagement">
                                    <i className="fas fa-fw fa-table"></i>
                                    <span>Quản lý người dùng</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/productManagement">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Quản lý sản phẩm</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/revenueManagement">
                                    <i className="fas fa-fw fa-chart-area"></i>
                                    <span>Biểu đồ doanh thu</span></a>
                            </li>


                            <hr className="sidebar-divider d-none d-md-block"/>


                                <div className="text-center d-none d-md-inline">
                                    <a href="/home" className="rounded-circle border-0" id="sidebarToggle"></a>
                                </div>




            </ul>

            <div id="content-wrapper" className="d-flex flex-column">


                <div id="content">


                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>
                        </button>

                        <form
                            className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small"
                                       placeholder="Search for..."
                                       aria-label="Search" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>


                        <ul className="navbar-nav ml-auto">


                            <li className="nav-item dropdown no-arrow d-sm-none">
                                <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-search fa-fw"></i>
                                </a>

                                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                     aria-labelledby="searchDropdown">
                                    <form className="form-inline mr-auto w-100 navbar-search">
                                        <div className="input-group">
                                            <input type="text" className="form-control bg-light border-0 small"
                                                   placeholder="Search for..." aria-label="Search"
                                                   aria-describedby="basic-addon2"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button">
                                                    <i className="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>


                            <li className="nav-item dropdown no-arrow mx-1">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="alertsDropdown"
                                    role="button"
                                    onClick={toggleDropdown1}
                                    aria-haspopup="true"
                                    aria-expanded={showDropdown1 ? "true" : "false"}
                                >
                                    <i className="fas fa-bell fa-fw"></i>

                                    <span className="badge badge-danger badge-counter">3+</span>
                                </a>

                                <div
                                    className={`dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in ${showDropdown1 ? 'show' : ''}`}
                                    aria-labelledby="alertsDropdown"
                                >
                                    <h6 className="dropdown-header">
                                        Alerts Center
                                    </h6>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-primary">
                                                <i className="fas fa-file-alt text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 12, 2019</div>
                                            <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-success">
                                                <i className="fas fa-donate text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 7, 2019</div>
                                            $290.29 has been deposited into your account!
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-warning">
                                                <i className="fas fa-exclamation-triangle text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 2, 2019</div>
                                            Spending Alert: We've noticed unusually high spending for your account.
                                        </div>
                                    </a>
                                    <a className="dropdown-item text-center small text-gray-500" href="#">Show All
                                        Alerts</a>
                                </div>
                            </li>


                            <div className="topbar-divider d-none d-sm-block"></div>

                            <li className="nav-item dropdown no-arrow">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="alertsDropdown"
                                    role="button"
                                    onClick={toggleDropdown}
                                    aria-haspopup="true"
                                    aria-expanded={showDropdown ? "true" : "false"}
                                >
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                    <img className="img-profile rounded-circle"
                                         src="img/undraw_profile.svg"/>
                                </a>

                                <div
                                    className={`dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in ${showDropdown ? 'show' : ''}`}
                                    aria-labelledby="alertsDropdown"
                                >
                                    <a className="dropdown-item" href="#">
                                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Profile
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Settings
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Activity Log
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#" data-toggle="modal"
                                       data-target="#logoutModal">
                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Logout
                                    </a>
                                </div>
                            </li>

                        </ul>

                    </nav>

                    <div className="container-fluid">

                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Tổng quan</h1>
                            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Tải báo cáo</a>
                        </div>

                        <div className="row">

                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div
                                                    className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Doanh thu hàng tháng
                                                </div>
                                                <div
                                                    className="h5 mb-0 font-weight-bold text-gray-800">${information.danhSoHangThang}</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-success shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div
                                                    className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                    Số người đăng ký trong tháng
                                                </div>
                                                <div
                                                    className="h5 mb-0 font-weight-bold text-gray-800">{information.soNguoiDangKy}</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-info shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div
                                                    className="text-xs font-weight-bold text-info text-uppercase mb-1">Tổng
                                                    số sản phẩm đã bán trong tháng
                                                </div>
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <div
                                                            style={{marginLeft: '10px'}}
                                                            className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{information.soLuongBanRa}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-warning shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div
                                                    className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                    Tổng doanh thu
                                                </div>
                                                <div
                                                    className="h5 mb-0 font-weight-bold text-gray-800">${information.tongDoanhSo}</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '50%', padding :'12px'}}>
                        <h1 style={{fontSize: '24px', color: '#333'}}>Danh sách người dùng</h1>
                        <table className="table">
                            <thead>
                            <tr>
                                <th style={{
                                    width: '20%',
                                    fontSize: '12px',
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    backgroundColor: '#f2f2f2',

                                }}>Email
                                </th>

                                <th style={{
                                    width: '20%',
                                    padding: '10px',
                                    fontSize: '12px',
                                    border: '1px solid #ddd',
                                    backgroundColor: '#f2f2f2',

                                }}>Họ tên
                                </th>
                                <th style={{
                                    width: '17%',
                                    fontSize: '12px',
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    backgroundColor: '#f2f2f2',

                                }}>Số điện thoại
                                </th>
                                <th style={{
                                    width: '30%',
                                    padding: '10px',
                                    fontSize: '12px',
                                    border: '1px solid #ddd',
                                    backgroundColor: '#f2f2f2',

                                }}>Địa chỉ
                                </th>

                                <th style={{
                                    width: '13%',
                                    fontSize: '12px',
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    backgroundColor: '#f2f2f2',

                                }}>Ngày tạo
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map(user => (
                                <tr key={user.id_user}>
                                    <td  style={{
                                        width: '13%',
                                        fontSize: '10px',
                                        padding: '10px',

                                        }}>{user.username}</td>
                                    <td style={{
                                        width: '13%',
                                        fontSize: '10px',
                                        padding: '10px',

                                    }}>{user.last_name} {user.first_name}  </td>
                                    <td style={{
                                        width: '13%',
                                        fontSize: '10px',
                                        padding: '10px',

                                    }}>{user.phone}</td>
                                    <td style={{
                                        width: '13%',
                                        fontSize: '10px',
                                        padding: '10px',

                                    }}>{user.address}</td>
                                    <td style={{
                                        width: '13%',
                                        fontSize: '10px',
                                        padding: '10px',

                                    }}>{user.createDate}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                </div>


            </div>


        </div>

        <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
        </a>


    </div>
    );
}

export default AdminHeader;
