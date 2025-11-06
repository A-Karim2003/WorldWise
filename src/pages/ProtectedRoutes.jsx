import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function ProtectedRoutes({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoutes;
