import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUserRoles } from "../features/auth/authSlice";

const RequireAuth = ({ allowedRoles }) => {
  const token = useSelector(selectCurrentToken);
  const roles = useSelector(selectCurrentUserRoles);
  const allowed = roles?.find(role => allowedRoles?.includes(role));
  const location = useLocation();

  return (
    !token
      ? <Navigate to="/login" state={{ from: location }} replace />
      : allowed
        ? <Outlet />
        : <Navigate to="/unauth" state={{ from: location }} replace />
  )
}

export default RequireAuth;