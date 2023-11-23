import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../pages/ContactUs/ContactUs";
import DashboardLayout from "../Layout/DashboardLayout";
import Cart from "../pages/Dashboard/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "shop/:category",
        element: <Order></Order>,
      },
      {
        path: "shop",
        element: <Order></Order>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <div className="mt-24">secret</div>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <div>home</div>,
      },
      {
        path: "reservation",
        element: <div>reservation</div>,
      },
      {
        path: "payment-history",
        element: <div>payment-history</div>,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "my-review",
        element: <div>my-review</div>,
      },
      {
        path: "my-bookings",
        element: <div>my-bookings</div>,
      },
    ],
  },
]);
