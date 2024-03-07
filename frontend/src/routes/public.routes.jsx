import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getIsAuth } from "redux/slices/auth/auth.thunk";

const PublicRoutes = () => {
  // const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  // useEffect(() => {
  //   dispatch(getIsAuth());
  // }, []);

  // console.log(something);

  // const { data: auth, isLoading: loadingAuth } = useIsAuthQuery();

  // if (loadingAuth) return null;

  return isAuth === "logged in" ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoutes;
