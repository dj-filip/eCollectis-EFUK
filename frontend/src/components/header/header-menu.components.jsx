// components
import MenuContent from "components/header/menu-content.components";
// mui
import Menu from "@mui/material/Menu";

const HeaderMenu = ({ anchorEl, handleMenuClose }) => {
  const isMenuOpen = Boolean(anchorEl);

  return (
    <Menu
      id="header_menu"
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={handleMenuClose}
      keepMounted
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <MenuContent />
    </Menu>
  );
};

export default HeaderMenu;
