import { useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";

import LoadingScreen from "pages/loading-screen/loading-screen.pages";
import Login from "pages/login/login.pages";
import PageNotFound from "pages/page-not-found/page-not-found.pages";
import Signup from "pages/signup/signup.pages";
import Home from "pages/home/home.pages";
import Profile from "pages/profile/profile.pages";
import FukMain from "pages/fuk/fuk-main.pages";


import AuthOutlet from "routes/auth.routes";
import PublicRoutes from "routes/public.routes";
import PrivateRoutes from "routes/private.routes";

import { useSelector, useDispatch } from "react-redux";
import { getIsAuth } from "redux/slices/auth/auth.thunk";
import AddProcess from "pages/fuk/add-process.pages";
import ViewRemovedProcesses from "pages/fuk/view-removed-processes.pages";
import RemoveProcess from "pages/fuk/remove-process.pages";


import UpdateProcess from "pages/fuk/update-process.pages";
import AddProcedure from "pages/fuk/add-procedure.pages";
import UpdateProcedure from "pages/fuk/update-procedure.pages";
import ViewActivity from "pages/fuk/view-activity.pages";
import CheckList from "pages/fuk/check-list.pages";
import RiskRecords from "pages/fuk/risk-records";
import IrregularityRecords from "pages/fuk/irregularity-records";
import IndexOfProcesses from "pages/fuk/index-of-processes";
import OfficialIndexOfProcesses from "pages/fuk/official-index-of-processes";
import Statistics from "pages/fuk/statistics";
import Documents from "pages/fuk/documents";
import GfukForm from "pages/fuk/gfuk-form";
import HarmonizationUnit from "pages/fuk/harmonization-unit";
import ViewProcedure from "pages/fuk/view-procedure.pages";
import ViewProcess from "pages/fuk/view-process.pages";
import RiskStrategy from "pages/fuk/risk-strategy";

import RiskStrategyPDF from "assets/strategija_upravljanja_rizicima.pdf";
import IndexOfProcessesPDF from "assets/lista_procesa.pdf";
import EditRisk from "pages/fuk/edit-risk";

const AppRoutes = () => {
  // const location = useLocation();
  // const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  // useEffect(() => {
  //   checkAuthStatus();
  //   // eslint-disable-next-line
  // }, [location.pathname, location.search]);

  // const checkAuthStatus = async () => {
  //   const res = await dispatch(getIsAuth());
  //   // console.log("ISAUTH: ", isAuth);
  //   // console.log("RES: ", res.payload.data);
  // };

  // @TODO: uncomment following lines
  // if (isAuth === "loading") {
  //   return <LoadingScreen />;
  // } else {
    return (
      <Routes>
        <Route path="/" element={<Outlet />}>
          {/* <Route index element={<AuthOutlet />} /> */}
          <Route index element={<FukMain />} />
          <Route element={<PrivateRoutes />}>
            <Route path="profile" element={<Profile />} />

            <Route path="fuk" element={<Outlet />}>
              <Route path="glavna" element={<FukMain />} />
              <Route path="dodavanje-procesa" element={<AddProcess />} />
              <Route path="pregled-uklonjenih-procesa" element={<ViewRemovedProcesses />} />
              <Route path="pregled-procesa" element={<ViewProcess />} />
              <Route path="brisanje-procesa" element={<RemoveProcess />} />
              <Route path="obrada-procesa/:id" element={<UpdateProcess />} />
              <Route path="dodavanje-procedure" element={<AddProcedure />} />
              <Route path="obrada-procedure/:id" element={<UpdateProcedure />} />
              <Route path="pregled-procedure" element={<ViewProcedure />} />
              <Route path="pregled-aktivnosti" element={<ViewActivity />} />
              
              <Route path="cek-lista" element={<CheckList />} />
              <Route path="registar-rizika" element={<RiskRecords />} />
              <Route path="promeni-rizik/:id" element={<EditRisk />} />
              <Route path="registar-nepravilnosti" element={<IrregularityRecords />} />
              <Route path="popis-procesa" element={<IndexOfProcesses  pdf={IndexOfProcessesPDF} />} />
              <Route path="strategija-upravljanja-rizicima" element={<RiskStrategy pdf={RiskStrategyPDF} />} />
              <Route path="statistika" element={<Statistics />} />
              
              <Route path="dokumenti" element={<Documents />} />
              <Route path="gfuk-obrazac" element={<GfukForm />} />
              <Route path="centralna-jedinica-za-harmonizaciju" element={<HarmonizationUnit />} />
            </Route>
            <Route path="*" element={<PageNotFound/>} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Route>
      </Routes>
    );
  // }
};

export default AppRoutes;
