import { useEffect } from "react";
// react
import { useLocation } from "react-router-dom";
// components
import Layout from "components/layout/layout.components";
// redux
import { useSelector, useDispatch } from "react-redux";
// routes
import AppRoutes from "routes/index.routes";
// styles
import { lightTheme, darkTheme } from "styles/theme.styles";
import 'assets/css/style.css';
// mui
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { getIsAuth } from "redux/slices/auth/auth.thunk";



const App = () => {
  // const darkMode = useSelector((state) => state.theme.darkMode);
  const darkMode = true;
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuthStatus();
    // dispatch(getIsAuth());
    // eslint-disable-next-line
  }, [location.pathname, location.search]);

  const checkAuthStatus = async () => {
    // const res = await dispatch(getIsAuth());
    // console.log("ISAUTH: ", isAuth);
    // console.log("RES: ", res.payload.data);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {/* <AppProvider> */}
        {/* <Router> */}
        <CssBaseline />
        <Layout>
          <AppRoutes />
        </Layout>
        {/* </Router> */}
        {/* </AppProvider> */}
      </LocalizationProvider>
    </ThemeProvider>
  );
};



export default App;
