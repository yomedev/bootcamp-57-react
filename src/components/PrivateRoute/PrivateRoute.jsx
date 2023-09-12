import { useSelector } from "react-redux";
import { selectToken } from "../../redux/users/usersSelectors";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const token = useSelector(selectToken)
  return token ? <Outlet /> : <Navigate to="/login" /> ;
};
