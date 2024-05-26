import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminHeader from './components/AdminHeader';
import AdminSidebar from './components/AdminSidebar';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';
import PrivateRoute from './utils/PrivateRoute';

function App() {
    return (
        <Router>
            <div className="App">
                <AdminHeader />
                <div className="container-fluid">
                    <div className="row">
                        <AdminSidebar />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            <Route exact path="/" component={PrivateRouteOrAdminDashboard} />
                            <Route path="/login" component={AdminLogin} />
                            <Route path="/dashboard" component={PrivateRouteOrDashboardPage} />
                            <Route path="/users" component={PrivateRouteOrUsersPage} />
                            <Route path="/products" component={PrivateRouteOrProductsPage} />
                        </main>
                    </div>
                </div>
            </div>
        </Router>
    );
}

function PrivateRouteOrAdminDashboard({ component: Component, ...rest }) {
    const isLoggedIn = true; // Check if the user is logged in
    if (isLoggedIn) {
        return <Component {...rest} />;
    } else {
        return <AdminDashboard />;
    }
}

function PrivateRouteOrDashboardPage({ component: Component, ...rest }) {
    const isLoggedIn = true; // Check if the user is logged in
    if (isLoggedIn) {
        return <PrivateRoute {...rest} component={Component} />;
    } else {
        return <DashboardPage />;
    }
}

function PrivateRouteOrUsersPage({ component: Component, ...rest }) {
    const isLoggedIn = true; // Check if the user is logged in
    if (isLoggedIn) {
        return <PrivateRoute {...rest} component={Component} />;
    } else {
        return <UsersPage />;
    }
}

function PrivateRouteOrProductsPage({ component: Component, ...rest }) {
    const isLoggedIn = true; // Check if the user is logged in
    if (isLoggedIn) {
        return <PrivateRoute {...rest} component={Component} />;
    } else {
        return <ProductsPage />;
    }
}

export default App;
