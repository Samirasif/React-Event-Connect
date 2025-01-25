import React from "react";
import { Link } from "react-router-dom"; // For navigation links

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed left-0 top-0">
      <div className="px-8 py-5">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
      </div>
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
