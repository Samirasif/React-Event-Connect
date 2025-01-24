import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, redirectTo }) => {
  const user = 'admin'
  
  if (!user) {
    return <Navigate to="/login" />; 
  }

  if (redirectTo === "/dashboard") {
    if (user.role === "admin") {
      return <Navigate to="/dashboard/admin" />;
    } else if (user.role === "user") {
      return <Navigate to="/dashboard/user" />;
    }
  }

  return children;
};

export default PrivateRoute;
