// components
import Header from "components/header/header.components";
import SidebarNav from "components/sidebar-nav/sidebar-nav.components";

const Layout = ({ children }) => {
  const styles = {
    // height: "calc(100vh - 100px)",
    // width: "100vw",
    display: "flex",
    justifyContent: "center",
    overflowY: "auto",
  };

  return (
    <>
      <Header />
      <SidebarNav />
      <main style={styles}>{children}</main>
    </>
  );
};

export default Layout;
