import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "./DashboardLayout.css";
import {
  FaCalendar,
  FaCalendarCheck,
  FaHome,
  FaShoppingCart,
  FaStar,
  FaWallet,
} from "react-icons/fa";
import Logo from "../components/Logo";
import { FaBagShopping, FaBars, FaEnvelope } from "react-icons/fa6";

const DashboardLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-72 min-h-screen bg-amber-500">
        <Logo />
        <ul className="menu dashboard space-y-4 p-4 uppercase text-base font-cinzel font-semibold">
          <li>
            <Link
              to="/dashboard"
              className={pathname === "/dashboard" ? "active" : ""}>
              <FaHome /> User Home
            </Link>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment-history">
              <FaWallet /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-review">
              <FaStar /> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-bookings">
              <FaCalendarCheck /> My Booking
            </NavLink>
          </li>
          <p className="divider"></p>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">
              <FaBagShopping /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
