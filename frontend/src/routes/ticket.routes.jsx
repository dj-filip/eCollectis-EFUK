import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useIsAuthQuery } from "api/auth/auth.api";
import { useGetUserProfileVerifiedQuery } from "api/user/user.api";

const TicketRoutes = () => {
  // const location = useLocation();
  // const { data: auth, isLoading: loadingAuth } = useIsAuthQuery();
  // const { data: userProfileVerified, isLoading: loadingUserProfileVerified } =
  //   useGetUserProfileVerifiedQuery();

  // // if (loadingAuth || loadingUserProfileVerified) return null;
  // if (loadingAuth) return null;
  // if (loadingUserProfileVerified) return null;

  return <Outlet />;
};

export default TicketRoutes;
