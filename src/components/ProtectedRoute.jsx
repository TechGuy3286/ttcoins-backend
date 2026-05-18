import { Navigate } from "react-router-dom";

function ProtectedRoute({
  children,
  role
}) {

  const admin = JSON.parse(
    localStorage.getItem("admin")
  );

  const agent = JSON.parse(
    localStorage.getItem("agent")
  );

  const customer = JSON.parse(
    localStorage.getItem("customer")
  );

  // ADMIN PROTECTION
  if (role === "admin" && !admin) {

    return (
      <Navigate to="/admin-login" />
    );

  }

  // AGENT PROTECTION
  if (role === "agent" && !agent) {

    return (
      <Navigate to="/agent-login" />
    );

  }

  // CUSTOMER PROTECTION
  if (role === "customer" && !customer) {

    return (
      <Navigate to="/customer-login" />
    );

  }

  return children;

}

export default ProtectedRoute;