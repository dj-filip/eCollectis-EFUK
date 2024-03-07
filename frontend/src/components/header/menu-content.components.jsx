// react
import { useLocation, useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "redux/slices/theme.slice";
import { logOut } from "redux/slices/auth/auth.thunk";
// mui
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const MenuContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const isAuth = useSelector((state) => state.auth.isAuth);
  // const { data, error, isFetching } = useIsAuthQuery();
  // const [logOut] = useLogOutMutation();

  // @TODO: remove all user data after logging out. although problem is probably in double mounting due to bad routing
  const handleLogOut = async () => {
    // const res = await logOut().unwrap();
    // console.log(res);
    try {
      await dispatch(logOut()).unwrap();
    } catch (error) {
      console.log("LOGOUT ERROR: ", error);
    }
  };

  const menu_options = { marginLeft: 5 };

  const alt_access = {
    // color: "secondary.main",
  };

  const log_out = {
    color: "error.main",
  };

  const notAuth = {
    first: {
      elements: [
        <Divider key="0" />,
        <MenuItem
          key="1"
          tabIndex={0}
          sx={alt_access}
          onClick={() => navigate(location.pathname === "/login" ? "/signup" : "/login")}
        >
          <ListItemText>
            {location.pathname === "/login" ? "Registracija" : "Prijava"}
          </ListItemText>
        </MenuItem>,
      ],
    },
  };

  const auth = {
    first: {
      elements: [
        <MenuItem
          key="0"
          tabIndex={0}
          onClick={
            () => (location.pathname !== "/profile" ? navigate("/profile") : null)
            // navigate(location.pathname !== "/profile" ? "/profile" : "/login")
          }
        >
          <ListItemText>Profil</ListItemText>
        </MenuItem>,
        <Divider key="1" />,
      ],
    },
    second: {
      elements: [
        <Divider key="0" />,
        <MenuItem key="1" tabIndex={0} sx={log_out} onClick={handleLogOut}>
          <ListItemText>Odjavi se</ListItemText>
        </MenuItem>,
      ],
    },
  };

  return (
    <>
      {isAuth === "logged in" && auth.first.elements.map((element) => element)}
      <MenuItem tabIndex={0} onClick={() => dispatch(toggleMode())}>
        <ListItemText>Тема</ListItemText>
        <Typography variant="body1" color="text.secondary" sx={menu_options}>
          {darkMode ? "Тамна" : "Светла"}
        </Typography>
      </MenuItem>
      <MenuItem tabIndex={0}>
        <ListItemText>Језик</ListItemText>
        <Typography variant="body1" color="text.secondary" sx={menu_options}>
          Српски (ћир.)
        </Typography>
      </MenuItem>
      {isAuth === "logged out" && notAuth.first.elements.map((element) => element)}
      {isAuth === "logged in" && auth.second.elements.map((element) => element)}
    </>
  );
};

export default MenuContent;
