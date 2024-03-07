// hooks
import useWindowWidth from "hooks/use-window-width.hooks";
// mui
import { useTheme } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
// libs
// import { isMobile } from "react-device-detect";

const HideOnScroll = ({ children, direction }) => {
  const theme = useTheme();
  const trigger = useScrollTrigger();
  const windowWidth = useWindowWidth();
  const { sm } = theme.breakpoints.values;

  const renderComponents =
    windowWidth < sm ? (
      <Slide appear={false} direction={direction} in={!trigger}>
        {children}
      </Slide>
    ) : (
      <>{children}</>
    );

  return renderComponents;
};

export default HideOnScroll;
