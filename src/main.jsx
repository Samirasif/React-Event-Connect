import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Demo from "./components/Demo/Demo";
import ViewDetails from "./components/ViewDetails/ViewDetails";
import Services from "./components/Services/Services";
import Dashboard from "./components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
            {
        path: "/",
        element: <Home></Home>,
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
        path: "/demo",
        element: <Demo />,
      },
      {
        path:"/viewdetails",
        element:<ViewDetails></ViewDetails>,
      },
      
      {
        path:"/services",
        element:<Services></Services>,
      }
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
