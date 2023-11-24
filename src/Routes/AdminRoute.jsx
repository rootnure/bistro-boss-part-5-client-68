import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuthHook from "../hooks/useAuthHook";
import Loading from "../pages/Shared/Loading";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuthHook();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) return <Loading></Loading>;
  if (!user || !isAdmin)
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace={true}></Navigate>
    );

  return children;
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;
