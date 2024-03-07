import { useEffect } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import LoadingScreen from "pages/loading-screen/loading-screen.pages";
import { getUserProfileVerified } from "redux/slices/user/user.thunk";
import { useDispatch, useSelector } from "react-redux";

const PrivateRoutes = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const verified = useSelector((state) => state.user.verified);

  // console.log("isAuth: ", isAuth);

  useEffect(() => {
    // dispatch(getUserProfileVerified());
  }, []);

  // @TODO: uncomment following lines
  // if (verified === "loading") {
  //   return <LoadingScreen />;
  // } else if (isAuth === "logged in") {
  //   if (
  //     (verified === "verified" && location.pathname !== "/profile") ||
  //     location.pathname === "/profile"
  //   ) {
      return <Outlet />;
  //   } else {
  //     return <Navigate to="/profile" />;
  //   }
  // }

  // return <Navigate to="/login" />;
};

export default PrivateRoutes;
