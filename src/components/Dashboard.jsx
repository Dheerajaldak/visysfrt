import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaHome, FaRegUser, FaBars } from "react-icons/fa";
import {
  IoSettingsOutline,
  IoLogOutOutline,
  IoCloseSharp,
} from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom"; // Import Outlet for nested routes

const Dashboard = () => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Controls dropdown visibility

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full md:w-64 bg-gray-800 transition-width duration-300 text-white ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h2
            className={`text-xl font-bold md:block ${
              isOpen ? "block" : "hidden"
            }`}
          >
            MyApp
          </h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden"
          >
            {isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            {/* Home Link */}
            <li>
              <NavLink
                to="/dashboard/home"
                className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
                activeClassName="bg-gray-700"
              >
                <FaHome size={24} />
                <span
                  className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}
                >
                  Home
                </span>
              </NavLink>
            </li>

            {/* Profile Link */}
            <li>
              <NavLink
                to="/dashboard/profile"
                className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
                activeClassName="bg-gray-700"
              >
                <FaRegUser size={24} />
                <span
                  className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}
                >
                  Profile
                </span>
              </NavLink>
            </li>

            {/* Settings Link */}
            <li>
              <NavLink
                to="/dashboard/settings"
                className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
                activeClassName="bg-gray-700"
              >
                <IoSettingsOutline size={24} />
                <span
                  className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}
                >
                  Settings
                </span>
              </NavLink>
            </li>

            {/* Form Dropdown */}
            <li className="relative">
              <button
                className="flex items-center p-4 w-full hover:bg-gray-700 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <FaDatabase size={24} />
                <span
                  className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}
                >
                  Form
                </span>
              </button>
              {/* Dropdown Content */}
              {isDropdownOpen && (
                <ul className="absolute text-white left-0 w-full mt-2 bg-gray-700 rounded-md shadow-lg z-50">
                  <li>
                    <NavLink
                      to="/dashboard/forms1"
                      className="flex items-center p-2 hover:bg-gray-600"
                    >
                      <span className="block">Form Field 1</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/forms2"
                      className="flex items-center p-2 hover:bg-gray-600"
                    >
                      <span className="block">Form Field 2</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/forms3"
                      className="flex items-center p-2 hover:bg-gray-600"
                    >
                      <span className="block">Form Field 3</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/forms4"
                      className="flex items-center p-2 hover:bg-gray-600"
                    >
                      <span className="block">Form Field 4</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/forms5"
                      className="flex items-center p-2 hover:bg-gray-600"
                    >
                      <span className="block">Form Field 5</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/forms6"
                      className="flex items-center p-2 hover:bg-gray-600"
                    >
                      <span className="block">Form Field 6</span>
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Logout Link */}
            <li
              onClick={logout}
              className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
            >
              <IoLogOutOutline size={24} />
              <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                Logout
              </span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Right-side Dashboard Content */}
      <div className="ml-20 md:ml-64 p-8 bg-gray-100 min-h-screen flex-1">
        <h2 className="text-2xl font-bold text-center">Dashboard</h2>
        {/* Outlet will render the nested route components */}
        <p className="text-center">Welcome to the dashboard!</p>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
