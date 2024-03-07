// components
import MenuContent from "components/header/menu-content.components";
// mui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const Drawer = ({ openDrawer, toggleDrawer }) => {
  const theme = useTheme();

  const drawer = { zIndex: theme.zIndex.appBar - 1 };

  const drawer_box = { height: "100%", paddingTop: "61px" };

  return (
    <SwipeableDrawer
      anchor="right"
      open={openDrawer}
      onOpen={() => toggleDrawer(true)}
      onClose={() => toggleDrawer(false)}
      sx={drawer}
    >
      <Box sx={drawer_box}>
        <MenuContent />
      </Box>
    </SwipeableDrawer>
  );
};

export default Drawer;
