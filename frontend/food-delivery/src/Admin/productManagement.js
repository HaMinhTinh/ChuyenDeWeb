import "./vendor/fontawesome-free/css/all.min.css";
import "./vendor/datatables/dataTables.bootstrap4.min.css";
import React, { useLayoutEffect, useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FBService } from "./services/FirebaseService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ProductManagement() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [newProductData, setNewProductData] = useState({});
  const [products, setProducts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const [categories, setCategories] = useState([]);
  const handleInputNewProductData = (e) => {
    setNewProductData({ ...newProductData, [e.target.name]: e.target.value });
  };
  const getAllCategory = async () => {
    try {
      const resp = await fetch(
          `http://127.0.0.1:8082/api/products/allCategory`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
      );
      if (resp.status == 200) {
        const jsonBody = await resp.json();
        setCategories(jsonBody);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getAllProduct = async () => {
    try {
      const resp = await fetch(
          `http://127.0.0.1:8082/api/products/allProduct`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
      );
      if (resp.status == 200) {
        const jsonBody = await resp.json();
        setProducts(jsonBody);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useLayoutEffect(() => {
    getAllProduct();
    getAllCategory();
  }, []);

  const handleAddNewProduct = async () => {
    try {
      let temp = { ...newProductData };

      // validate
      if (newProductData["imageUrl"]) {
        // upload file

        temp["imageUrl"] = await FBService.uploadFile(
            newProductData["imageUrl"]
        );
      }
      if (!temp["category"]) {
        temp["category"] = categories[0]["id"];
      }
      const resp = await fetch(`http://127.0.0.1:8082/api/products/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(temp),
      });
      if (resp.status == 200) {
        toast("Đã thêm một sản phẩm");
        setNewProductData({});
        setOpenAddModal(false);
        getAllProduct();
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleEditProduct = async () => {
    try {
      let temp = { ...newProductData };

      // validate
      if (newProductData["imageUrl"]) {
        // upload file

        temp["imageUrl"] = await FBService.uploadFile(
            newProductData["imageUrl"]
        );
      }
      if (!temp["category"]) {
        temp["category"] = categories[0]["id"];
      }
      const resp = await fetch(
          `http://127.0.0.1:8082/api/products/update/${temp?.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(temp),
          }
      );
      if (resp.status == 200) {
        toast("Đã cập nhật một sản phẩm");
        setNewProductData({});
        setOpenAddModal(false);
        getAllProduct();
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleSetProductForEdit = (pd) => {
    const pdd = { ...pd };

    delete pdd["imageUrl"];
    setNewProductData(pdd);
    setIsEdit(true);
    setOpenAddModal(true);
  };
  const handleDeleteProduct = async (pd) => {
    if (window.confirm("Bạn có muốn xóa sản phẩm này ? ")) {
      const resp = await fetch(
          `http://127.0.0.1:8082/api/products/delete/${pd?.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
      );
      if (resp.status == 200) {
        toast("Đã xóa một sản phẩm");
        getAllProduct();
      }
    }
  };
  return (
      <div>
        <div id="wrapper">
          <ul
              className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
              id="accordionSidebar"
          >
            <a
                className="sidebar-brand d-flex align-items-center justify-content-center"
                href="index.html"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
              </div>
              <div className="sidebar-brand-text mx-3">
                Sneaker <sup></sup>
              </div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Bảng điều khiển</span>
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                  className="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapsePages"
                  aria-expanded="true"
                  aria-controls="collapsePages"
              >
                <i className="fas fa-fw fa-folder"></i>
                <span>Pages</span>
              </a>
              <div
                  id="collapsePages"
                  className="collapse"
                  aria-labelledby="headingPages"
                  data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Màn hình đăng nhập:</h6>
                  <a className="collapse-item" href="login.html">
                    Login
                  </a>
                  <a className="collapse-item" href="register.html">
                    Register
                  </a>
                  <a className="collapse-item" href="forgot-password.html">
                    Forgot Password
                  </a>
                  <div className="collapse-divider"></div>
                  <h6 className="collapse-header">Những trang khác:</h6>
                  <a className="collapse-item" href="404.html">
                    Trang 404
                  </a>
                  <a className="collapse-item" href="blank.html">
                    Trang trống
                  </a>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/userManagement">
                <i className="fas fa-fw fa-table"></i>
                <span>Quản lý người dùng</span>
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/productManagement">
                <i className="fas fa-fw fa-table"></i>
                <span>Quản lý sản phẩm</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/orderManagement">
                <i className="fas fa-fw fa-table"></i>
                <span>Quản lý đơn hàng</span>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/revenueManagement">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Biểu đồ doanh thu</span>
              </a>
            </li> */}

            <hr className="sidebar-divider d-none d-md-block" />

            <div className="text-center d-none d-md-inline">
              <button
                  className="rounded-circle border-0"
                  id="sidebarToggle"
              ></button>
            </div>
          </ul>

          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <form class="form-inline">
                  <button
                      id="sidebarToggleTop"
                      class="btn btn-link d-md-none rounded-circle mr-3"
                  >
                    <i class="fa fa-bars"></i>
                  </button>
                </form>

                <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div class="input-group">
                    <input
                        type="text"
                        class="form-control bg-light border-0 small"
                        placeholder="Tìm kiếm ..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item dropdown no-arrow d-sm-none">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="searchDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                      <i class="fas fa-search fa-fw"></i>
                    </a>
                    <div
                        class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown"
                    >
                      <form class="form-inline mr-auto w-100 navbar-search">
                        <div class="input-group">
                          <input
                              type="text"
                              class="form-control bg-light border-0 small"
                              placeholder="Tìm kiếm ..."
                              aria-label="Search"
                              aria-describedby="basic-addon2"
                          />
                          <div class="input-group-append">
                            <button class="btn btn-primary" type="button">
                              <i class="fas fa-search fa-sm"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                  {/* <li class="nav-item dropdown no-arrow mx-1">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="alertsDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                      <i class="fas fa-bell fa-fw"></i>
                      <span class="badge badge-danger badge-counter">3+</span>
                    </a>
                    <div
                        class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown"
                    >
                      <h6 class="dropdown-header">Thông báo</h6>
                      <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="mr-3">
                          <div class="icon-circle bg-primary">
                            <i class="fas fa-file-alt text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div class="small text-gray-500">December 12, 2019</div>
                          <span class="font-weight-bold">
                         Báo cáo hàng tháng mới đã sẵn sàng để tải xuống!
                        </span>
                        </div>
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="mr-3">
                          <div class="icon-circle bg-success">
                            <i class="fas fa-donate text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div class="small text-gray-500">December 7, 2019</div>
                          290,294 đã được gửi vào tài khoản của bạn!
                        </div>
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="mr-3">
                          <div class="icon-circle bg-warning">
                            <i class="fas fa-exclamation-triangle text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div class="small text-gray-500">December 2, 2019</div>
                          Cảnh báo chi tiêu: Chúng tôi nhận thấy mức chi tiêu cao bất thường
                          cho tài khoản của bạn.
                        </div>
                      </a>
                      <a
                          class="dropdown-item text-center small text-gray-500"
                          href="#"
                      >
                        Hiển thị tất cả
                      </a>
                    </div>
                  </li> */}
                  {/* <li class="nav-item dropdown no-arrow mx-1">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="messagesDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                      <i class="fas fa-envelope fa-fw"></i>
                      <span class="badge badge-danger badge-counter">7</span>
                    </a>
                    <div
                        class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="messagesDropdown"
                    >
                      <h6 class="dropdown-header">Trung tâm tin nhắn</h6>
                      <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="dropdown-list-image mr-3">
                          <img
                              class="rounded-circle"
                              src="img/undraw_profile_1.svg"
                              alt="..."
                          />
                          <div class="status-indicator bg-success"></div>
                        </div>
                        <div class="font-weight-bold">
                          <div class="text-truncate">
                            Chào bạn! Tôi đang tự hỏi liệu bạn có thể giúp tôi một việc không
                            vấn đề tôi đang gặp phải.
                          </div>
                          <div class="small text-gray-500">
                            Emily Fowler · 58m
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="dropdown-list-image mr-3">
                          <img
                              class="rounded-circle"
                              src="img/undraw_profile_2.svg"
                              alt="..."
                          />
                          <div class="status-indicator"></div>
                        </div>
                        <div>
                          <div class="text-truncate">
                            I have the photos that you ordered last month, how
                            would you like them sent to you?
                          </div>
                          <div class="small text-gray-500">Jae Chun · 1d</div>
                        </div>
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="dropdown-list-image mr-3">
                          <img
                              class="rounded-circle"
                              src="img/undraw_profile_3.svg"
                              alt="..."
                          />
                          <div class="status-indicator bg-warning"></div>
                        </div>
                        <div>
                          <div class="text-truncate">
                            Last month's report looks great, I am very happy with
                            the progress so far, keep up the good work!
                          </div>
                          <div class="small text-gray-500">
                            Morgan Alvarez · 2d
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="dropdown-list-image mr-3">
                          <img
                              class="rounded-circle"
                              src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                              alt="..."
                          />
                          <div class="status-indicator bg-success"></div>
                        </div>
                        <div>
                          <div class="text-truncate">
                            Am I a good boy? The reason I ask is because someone
                            told me that people say this to all dogs, even if they
                            aren't good...
                          </div>
                          <div class="small text-gray-500">
                            Chicken the Dog · 2w
                          </div>
                        </div>
                      </a>
                      <a
                          class="dropdown-item text-center small text-gray-500"
                          href="#"
                      >
                        Read More Messages
                      </a>
                    </div>
                  </li> */}

                  <div class="topbar-divider d-none d-sm-block"></div>
                  {/* <li class="nav-item dropdown no-arrow">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="userDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                      Sneaker
                    </span>
                      <img
                          class="img-profile rounded-circle"
                          src="img/undraw_profile.svg"
                      />
                    </a>
                    <div
                        class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown"
                    >
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Trang cá nhân
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Cài đặt
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        Đăng nhập
                      </a>
                      <div class="dropdown-divider"></div>
                      <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#logoutModal"
                      >
                        <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Đăng xuất
                      </a>
                    </div>
                  </li> */}
                </ul>
              </nav>
              <div class="container-fluid">
                <h1 class="h3 mb-2 text-gray-800">Quản lý sản phẩm</h1>

                <div class="card shadow mb-4">
                  <div className="card-header py-3 d-flex justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Danh sách sản phẩm
                    </h6>
                    <button
                        id="addButton"
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          setIsEdit(false);
                          setNewProductData({});
                          setOpenAddModal(true);
                        }}
                    >
                      Thêm mới
                    </button>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table
                          class="table table-bordered"
                          id="dataTable"
                          width="100%"
                          cellspacing="0"
                      >
                        <thead>
                        <tr>
                          <th>ID</th>
                          <th>Tên sản phẩm</th>
                          <th>Ảnh</th>
                          <th>Mô tả</th>
                          <th>Giá</th>
                          <th>Số lượng</th>
                          <th>Hành động</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products?.map((pd) => {
                          return (
                              <tr>
                                <td>{pd?.id}</td>
                                <td>{pd?.name}</td>
                                <td>
                                  <img
                                      width={"120px"}
                                      style={{ objectFit: "cover" }}
                                      src={pd?.imageUrl}
                                  />
                                </td>
                                <td>
                                  <div
                                      dangerouslySetInnerHTML={{
                                        __html: pd?.description,
                                      }}
                                  ></div>
                                </td>
                                <td>{pd?.price}</td>
                                <td>{pd?.discount}</td>
                                <td>
                                  <a
                                      onClick={() => {
                                        handleSetProductForEdit(pd);
                                      }}
                                      className="edit-link"
                                  >
                                    Sửa
                                  </a>
                                  <span> | </span>
                                  <a
                                      onClick={() => {
                                        handleDeleteProduct(pd);
                                      }}
                                      className="delete-link"
                                  >
                                    Xóa
                                  </a>
                                </td>
                              </tr>
                          );
                        })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer class="sticky-footer bg-white">
              {/* <div class="container my-auto">
                <div class="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2020</span>
                </div>
              </div> */}
            </footer>
          </div>
        </div>

        <a class="scroll-to-top rounded" href="#page-top">
          <i class="fas fa-angle-up"></i>
        </a>

        <div
            class="modal fade"
            id="logoutModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                    class="close"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div class="modal-footer">
                <button
                    class="btn btn-secondary"
                    type="button"
                    data-dismiss="modal"
                >
                  Cancel
                </button>
                <a class="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
        {openAddModal && (
            <div class="modal d-block" id="myModal">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title">
                      {isEdit ? "Edit Product" : "Thêm sản phẩm mới"}
                    </h4>
                    <button
                        type="button"
                        class="close"
                        onClick={() => {
                          setOpenAddModal(false);
                        }}
                    >
                      &times;
                    </button>
                  </div>

                  <div class="modal-body">
                    <div className="form-group">
                      <label>Tên sản phẩm</label>
                      <input
                          defaultValue={newProductData?.name}
                          className="form-control"
                          name="name"
                          onChange={handleInputNewProductData}
                      ></input>
                    </div>

                    <div className="form-group">
                      <label>Mô tả</label>
                      <CKEditor
                          editor={ClassicEditor}
                          data={newProductData?.description || ""}
                          onChange={(event, editor) => {
                            setNewProductData({
                              ...newProductData,
                              description: editor?.getData(),
                            });
                          }}
                      />
                    </div>
                    <div className="form-group">
                      <label>Giá</label>
                      <input
                          defaultValue={newProductData?.price}
                          className="form-control"
                          name="price"
                          type="number"
                          onChange={handleInputNewProductData}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>Giảm giá</label>
                      <input
                          defaultValue={newProductData?.discount}
                          className="form-control"
                          name="discount"
                          type="number"
                          onChange={handleInputNewProductData}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>Loại</label>
                      <select
                          name="category"
                          onChange={handleInputNewProductData}
                          className="form-control"
                      >
                        {categories?.map((cat) => {
                          return <option value={cat?.id}>{cat?.name}</option>;
                        })}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Hình ảnh</label>
                      <input
                          className="form-control"
                          type="file"
                          onChange={(e) => {
                            setNewProductData({
                              ...newProductData,
                              imageUrl: e.target.files[0],
                            });
                          }}
                      />
                    </div>
                    {newProductData["imageUrl"] && (
                        <div className="form-group">
                          <label>Đánh giá</label>
                          <img
                              src={window.URL.createObjectURL(
                                  newProductData["imageUrl"]
                              )}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                          />
                        </div>
                    )}
                  </div>

                  <div class="modal-footer">
                    <button
                        onClick={isEdit ? handleEditProduct : handleAddNewProduct}
                        type="button"
                        class="btn btn-primary text-white"
                        data-dismiss="modal"
                    >
                      Lưu
                    </button>
                    <button
                        onClick={() => {
                          setOpenAddModal(false);
                        }}
                        type="button"
                        class="btn btn-danger"
                        data-dismiss="modal"
                    >
                      Thoát
                    </button>
                  </div>
                </div>
              </div>
            </div>
        )}
        <ToastContainer />
      </div>
  );
}
export default ProductManagement;
