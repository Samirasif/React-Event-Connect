import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Demo from "./components/Demo/Demo";
import Services from "./components/Services/Services";
import DashboardRoot from "./components/DashboardRoot/DashboardRoot";
import Dashboard from "./components/Dashboard/Dashboard";
import Events from "./components/Events/Events";
import FindPlanners from "./components/FindPlanners/FindPlanners";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RoleBasedRedirect from "./components/RoleBasedRedirect/RoleBasedRedirect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/find-planners",
        element: <FindPlanners />,
      },
      {
        path: "/services",
        element: <Services />,
      },

    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute redirectTo="/dashboard">
        <RoleBasedRedirect />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardRoot />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard/user",
            element: (
              <PrivateRoute>
                <h2>Hi User</h2>
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/admin",
            element: (
              <PrivateRoute>
                <h2>Welcome Admin</h2>
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/admin/events",
            element: (
              <PrivateRoute>
                <Events />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
