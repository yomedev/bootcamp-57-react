import { useSelector } from "react-redux";
import { selectToken } from "../../redux/users/usersSelectors";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const PublicRoute = () => {
  const token = useSelector(selectToken);
  const location = useLocation()
  return !token ? <Outlet /> : <Navigate to={location.state?.fromLogin || '/'} />;
};
