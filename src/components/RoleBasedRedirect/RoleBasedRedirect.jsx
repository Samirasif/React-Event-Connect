import { Navigate } from "react-router-dom";

const RoleBasedRedirect = () => {
  // Replace this with your actual user authentication/role logic.
  const user = { role: "user" }; // Example user object

  if (user.role === "admin") {
    return <Navigate to="/dashboard/admin" />;
  } else if (user.role === "user") {
    return <Navigate to="/dashboard/user" />;
  }

  // Fallback for any unexpected case (optional)
  return <Navigate to="/login" />;
};

export default RoleBasedRedirect;