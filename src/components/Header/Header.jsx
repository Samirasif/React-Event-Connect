import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-gray-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <img className='w-12 h-12 ml-4' src="/src/assets/White Event Logo_1x 5.png" alt="" />
          <a className="text-blue-600 text-3xl font-bold ">Event-CoNnEcT</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
              <details>
                <summary>Events</summary>
                <ul className="p-1">
                  <li><a>Venue</a></li>
                  <li><a>Event-Types</a></li>
                  <li><a>Event-Form</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Our-Services</summary>
                <ul className="p-2">
                  <li><a>Vendors</a></li>
                  <li><a>Portfolios</a></li>
                  <li><a>Budget</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Bookings</summary>
                <ul className="p-2">
                  <li><a>Calender-Integration</a></li>
                  <li><a>Bidding</a></li>
                  <li><a>Payment</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Feedback & Review</summary>
                <ul className="p-2">
                  <li><a>Feedback</a></li>
                  <li><a>Review</a></li>
                  
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-success">Log In</a>
        </div>
      </div>
    );
};

export default Header;