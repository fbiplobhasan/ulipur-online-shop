import { useState } from "react";
import { CgProductHunt } from "react-icons/cg";
import {
  FaBabyCarriage,
  FaBook,
  FaCalendar,
  FaCcAmazonPay,
  FaBars,
} from "react-icons/fa6";
import { FaShop, FaUser } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { RiProductHuntLine } from "react-icons/ri";
import { NavLink, Outlet } from "react-router";
import useAdmin from "../../hooks/useAdmin";
import { MdRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import LogoCompo from "../shared/logo/LogoCompo";
import { CiEdit } from "react-icons/ci";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full bg-orange-300 w-64 transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 transition-transform duration-300 z-50`}
      >
        <ul className="p-4">
          {/* Logo */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
              <LogoCompo />
            </div>
            <p className="text-lg font-semibold text-gray-800">
              Ulipur <span className="text-orange-500">Online Shop</span>
            </p>
          </div>

          {/* Menu */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/" className="flex items-center gap-2 mt-4">
                  <FaHome />
                  ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addItem"
                  className="flex items-center gap-2"
                >
                  <CgProductHunt />
                  ADD PRODUCTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/updateItem"
                  className="flex items-center gap-2"
                >
                  <CgProductHunt />
                  MANAGE PRODUCTS
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center gap-2">
                  <CiEdit />
                  UPDATE PRODUCTS
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center gap-2">
                  <FaBook />
                  MANAGE BOOKING
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allusers"
                  className="flex items-center gap-2"
                >
                  <FaUser />
                  MANAGE USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/" className="flex items-center gap-2 mt-4">
                  <FaHome />
                  USER HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center gap-2">
                  <FaCalendar />
                  RESERVATION
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center gap-2">
                  <FaCcAmazonPay />
                  PAYMENT HISTORY
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center gap-2">
                  <FaBabyCarriage />
                  MY CART
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center gap-2">
                  <MdRateReview />
                  ADD REVIEW
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center gap-2">
                  <TbBrandBooking />
                  MY BOOKING
                </NavLink>
              </li>
            </>
          )}

          {/* Divider */}
          <div className="divider"></div>

          {/* Common Menu */}
          <>
            <li>
              <NavLink to="/" className="flex items-center gap-2">
                <FaHome />
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="flex items-center gap-2">
                <RiProductHuntLine />
                MENU
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="flex items-center gap-2">
                <FaShop />
                SHOP
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="flex items-center gap-2">
                <IoMdContact />
                CONTACT
              </NavLink>
            </li>
          </>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost text-2xl"
          >
            <FaBars />
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
