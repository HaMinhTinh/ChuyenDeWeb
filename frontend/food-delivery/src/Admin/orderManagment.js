import { useLayoutEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  const getAllOrder = async () => {
    try {
      const resp = await fetch(`http://127.0.0.1:8082/api/orders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.status === 200) {
        const jsonBody = await resp.json();
        setOrders(jsonBody);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteOrder = async (od) => {
    if (window.confirm("Bạn thực sự muốn xóa đơn hàng này?")) {
      try {
        const resp = await fetch(`http://127.0.0.1:8082/api/orders/${od?.id}`, {
          method: "DELETE",
        });
        if (resp.status === 200) {
          toast("Xóa đơn hàng thành công");
          await getAllOrder();
        } else {
          toast("Xóa đơn hàng thất bại");
        }
      } catch (error) {
        console.error("Lỗi khi xóa đơn hàng:", error);
        toast("Đã xảy ra lỗi khi xóa đơn hàng");
      }
    }
  };

  useLayoutEffect(() => {
    getAllOrder();
  }, []);

  return (
    <div id="wrapper">
      {/* Sidebar */}
      <ul className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div className="sidebar-brand-text mx-3">
            Sneaker 
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <a className="nav-link" href="/">
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
      {/* End of Sidebar */}

      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <form className="form-inline">
              <button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop">
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
                <div
                  className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
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
          {/* End of Topbar */}

          {/* Page Content */}
          <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Quản lý đơn hàng</h1>

            {/* Data Table */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Danh sách đơn hàng</h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tổng tiền</th>
                        <th>Trạng Thái</th>
                        <th>Địa chỉ nhận hàng</th>
                        <th>Phương thức thanh toán</th>
                        <th>Note</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((pd) => (
                        <tr key={pd.id}>
                          <td>{pd.id}</td>
                          <td>{pd.total}</td>
                          <td>{pd.status}</td>
                          <td>{pd.address}</td>
                          <td>{pd.method}</td>
                          <td>{pd.note}</td>
                          <td>
                            <a onClick={() => handleDeleteOrder(pd)} className="delete-link">
                              Xóa
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* End of Page Content */}
        </div>
        {/* End of Main Content */}

        {/* Footer */}
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="text-center">
              <span>Footer text</span>
            </div>
          </div>
        </footer>
        {/* End of Footer */}
      </div>
      {/* End of Content Wrapper */}

      {/* Scroll to Top Button */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      {/* Logout Modal */}
      {/* <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
          </div>
        </div>
      </div> */}
      {/* End of Logout Modal */}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};
