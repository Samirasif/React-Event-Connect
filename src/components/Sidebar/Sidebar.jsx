import React from "react";
import { Link } from "react-router-dom"; // For navigation links

export default function Sidebar() {
  return (
    <div className="w-56 h-screen bg-[#405189] ] font-poppins fixed left-0 top-0">

      <img className="w-24 h-20 ml-3 mt-2 p-1" src="/src/assets/design-null-photoaidcom-cropped.png" alt="" />
      
        <h2 className="p-3 ml-3 mt-2">Menu</h2>
      
      <nav>
        <ul className="space-y-1 p-2">
          <li>
            <Link
              to="/dashboard/overview"
              className="block text-white py-1 px-4 hover:bg-gray-700 rounded-md"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/analytics"
              className="block text-white py-2 px-4 hover:bg-gray-700 rounded-md"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/settings"
              className="block text-white py-1 px-4 hover:bg-gray-700 rounded-md"
            >
              Booking 
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/users"
              className="block text-white py-2 px-4 hover:bg-gray-700 rounded-md"
            >
              Customer
            </Link>
          </li>

          <h2 className="p-3">Others</h2>
          <li>
            <Link
              to="/dashboard/reports"
              className="block text-white py-2 px-4 hover:bg-gray-700 rounded-md"
            >
              Setting
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/reports"
              className="block text-white py-2 px-4 hover:bg-gray-700 rounded-md"
            >
              Payment
            </Link>
          </li>
          
          <li>
            <Link
              to="/dashboard/reports"
              className="block text-white py-2 px-4 hover:bg-gray-700 rounded-md"
            >
             Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
