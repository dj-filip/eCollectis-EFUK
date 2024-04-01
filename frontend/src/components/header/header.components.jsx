// react
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// assets
import Grb from 'assets/icons/logo.png';
// components
import HeaderMenu from "components/header/header-menu.components";
import Drawer from "components/header/drawer.components";
import HideOnScroll from "components/hide-on-scroll/hide-on-scroll.components";
// hooks
import useWindowWidth from "hooks/use-window-width.hooks";
// redux
import { useSelector } from "react-redux";
// mui
import { useTheme } from "@mui/material/styles";
import Image from "mui-image";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';



// libs
// import { isMobile } from "react-device-detect";

const opstina = process.env.REACT_APP_OPSTINA;

const Header = ({ props }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const darkMode = useSelector((state) => state.theme.darkMode);
  // const { sm } = useDestructuredTheme();
  const windowWidth = useWindowWidth();

  const { sm } = theme.breakpoints.values;

  const appbar = {
    borderBottom: "1px solid #3ad1e814",
    // padding: "35px 0 35px 400px",
    // background: "linear-gradient(21deg, rgb(23, 32, 46), 73%, rgb(62, 175, 192))",
    background: "transparent",
    boxShadow: "0px 10px 20px 5px rgba(10,20,35,0.4)"
  };

  const logoWrap = {
    marginLeft: 2,
    marginRight: 2,
  };

  const img = {
    width: "auto !important",
    height: "auto !important",
  };

  const img2 = {
    width: "auto !important",
    height: "90px !important",
    '@media (max-width: 1920px)': {
      height: "90px !important",
    }
  };

  const menu_icon_btn = {
    // color: "primary.light",
    marginLeft: 3,
  };

  const menu_icon = {
    fontSize: "30px",
  };

  const handleMenuOpen = (event) => {
    if (windowWidth < sm) {
      return toggleDrawer(true);
    }
    return setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  return (
    <>
      <HideOnScroll direction="down" {...props}>
          <AppBar sx={appbar} position="relative">
            <Toolbar disableGutters sx={{
              justifyContent: "center",
              marginLeft: "400px",
              padding: "35px 0",
              '@media (max-width: 1920px)': {
                padding: "10px 0",
              }
            }}>
              <Grid container sx={{
                maxWidth: "1760px",
                justifyContent: "space-between",
                '@media (max-width: 1920px)': {
                  maxWidth: "1400px",
                }
              }}>
                <Box sx={{logoWrap, mx: "0"}}>
                  {/* <Image sx={img} src={Logo} alt="Logo" onClick={() => navigate("/")} /> */}
                  <Stack sx={{
                    height: "100px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}>
                    <Typography variant="h1" sx={{
                    }}>eCollectis FUK</Typography>
                    <Typography variant="subtitle1">
                      {opstina}</Typography>
                  </Stack>
                </Box>
                <Box sx={{logoWrap, mx: "0"}}>
                  <Image sx={img2} src={Grb} alt="Grb" onClick={() => navigate("/")} />
                </Box>
                {/* <IconButton
                  aria-label="menu"
                  sx={menu_icon_btn}
                  onClick={(event) => handleMenuOpen(event)}
                >
                  <MenuIcon sx={menu_icon} />
                </IconButton> */}
              </Grid>
            </Toolbar>
          </AppBar>
      </HideOnScroll>
      {/* <HeaderMenu anchorEl={anchorEl} handleMenuClose={handleMenuClose} /> */}
    </>
  );
};

export default Header;
