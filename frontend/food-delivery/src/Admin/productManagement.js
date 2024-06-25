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
      const resp = await fetch("http://127.0.0.1:8082/api/products/allCategory", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.status === 200) {
        const jsonBody = await resp.json();
        setCategories(jsonBody);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getAllProduct = async () => {
    try {
      const resp = await fetch("http://127.0.0.1:8082/api/products/allProduct", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.status === 200) {
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
        temp["imageUrl"] = await FBService.uploadFile(newProductData["imageUrl"]);
      }
      if (!temp["category"]) {
        temp["category"] = categories[0]["id"];
      }

      const resp = await fetch("http://127.0.0.1:8082/api/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(temp),
      });

      if (resp.status === 200) {
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
        temp["imageUrl"] = await FBService.uploadFile(newProductData["imageUrl"]);
      }
      if (!temp["category"]) {
        temp["category"] = categories[0]["id"];
      }

      const resp = await fetch(`http://127.0.0.1:8082/api/products/update/${temp?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(temp),
      });

      if (resp.status === 200) {
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
      const resp = await fetch(`http://127.0.0.1:8082/api/products/delete/${pd?.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (resp.status === 200) {
        toast("Đã xóa một sản phẩm");
        getAllProduct();
      }
    }
  };

  return (
    <div>
      <div id="wrapper">
        <ul className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion" id="accordionSidebar">
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
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

          <hr className="sidebar-divider d-none d-md-block" />

          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <form className="form-inline">
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                  <i className="fa fa-bars"></i>
                </button>
              </form>

              <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Tìm kiếm ..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-search fa-fw"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Tìm kiếm ..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>
              </ul>
            </nav>

            <div className="container-fluid">
              <h1 className="h3 mb-2 text-gray-800">Quản lý sản phẩm</h1>

              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Danh sách sản phẩm</h6>
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
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                            <tr key={pd?.id}>
                              <td>{pd?.id}</td>
                              <td>{pd?.name}</td>
                              <td>
                                <img width={"120px"} style={{ objectFit: "cover" }} src={pd?.imageUrl} alt="product" />
                              </td>
                              <td>
                                <div dangerouslySetInnerHTML={{ __html: pd?.description }}></div>
                              </td>
                              <td>{pd?.price}</td>
                              <td>{pd?.discount}</td>
                              <td>
                                <a onClick={() => handleSetProductForEdit(pd)} className="edit-link">
                                  Sửa
                                </a>
                                <span> | </span>
                                <a onClick={() => handleDeleteProduct(pd)} className="delete-link">
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
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      {openAddModal && (
        <div className="modal d-block" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{isEdit ? "Edit Product" : "Thêm sản phẩm mới"}</h4>
                <button type="button" className="close" onClick={() => setOpenAddModal(false)}>
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <div className="form-group">
                  <label>Tên sản phẩm</label>
                  <input
                    defaultValue={newProductData?.name}
                    className="form-control"
                    name="name"
                    onChange={handleInputNewProductData}
                  />
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
                  />
                </div>

                <div className="form-group">
                  <label>Giảm giá</label>
                  <input
                    defaultValue={newProductData?.discount}
                    className="form-control"
                    name="discount"
                    type="number"
                    onChange={handleInputNewProductData}
                  />
                </div>

                <div className="form-group">
                  <label>Loại</label>
                  <select name="category" onChange={handleInputNewProductData} className="form-control">
                    {categories?.map((cat) => {
                      return (
                        <option key={cat?.id} value={cat?.id}>
                          {cat?.name}
                        </option>
                      );
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
                      src={window.URL.createObjectURL(newProductData["imageUrl"])}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt="preview"
                    />
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <button
                  onClick={isEdit ? handleEditProduct : handleAddNewProduct}
                  type="button"
                  className="btn btn-primary text-white"
                  data-dismiss="modal"
                >
                  Lưu
                </button>
                <button
                  onClick={() => {
                    setOpenAddModal(false);
                  }}
                  type="button"
                  className="btn btn-danger"
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
