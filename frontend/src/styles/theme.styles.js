import { createTheme } from "@mui/material";

const primaryPalette = {
  main: "#6495ED",
  light: "rgb(131, 170, 240)",
  dark: "rgb(70, 104, 165)",
  contrastText: "rgba(0, 0, 0, 0.87)",
};

const secondaryPalette = {
  main: "#edbd64",
  light: "rgb(240, 202, 131)",
  dark: "rgb(165, 132, 70)",
  contrastText: "rgba(0, 0, 0, 0.87)",
};

const errorPalette = {
  main: "#f44336",
  light: "#e57373",
  dark: "#d32f2f",
  contrastText: "#fff",
};

const warningPalette = {
  main: "#ff9800",
  light: "#ffb74d",
  dark: "#f57c00",
  contrastText: "rgba(0, 0, 0, 0.87)",
};

const infoPalette = {
  main: "#2196f3",
  light: "#64b5f6",
  dark: "#1976d2",
  contrastText: "#fff",
};

const successPalette = {
  main: "#4caf50",
  light: "#81c784",
  dark: "#388e3c",
  contrastText: "rgba(0, 0, 0, 0.87)",
};

const spacing = [0, 4, 8, 16, 32, 64, 128];

const borderRadius = 4;

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const disableRipple = false;

const arrow = true;

export const lightTheme = createTheme({
  palette: {
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    primary: primaryPalette,
    secondary: secondaryPalette,
    error: errorPalette,
    warning: warningPalette,
    info: infoPalette,
    success: successPalette,
    divider: "rgba(0, 0, 0, 0.12)",
  },
  spacing: spacing,
  shape: {
    borderRadius: borderRadius,
  },
  breakpoints: {
    values: breakpoints,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: disableRipple,
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: arrow,
      },
    },
    // MuiFilledInput: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "rgba(253, 196, 203, 1)",
    //       "&:hover" : {
    //         backgroundColor: "rgba(253, 196, 203, 1)",
    //       },
    //       "&:focus" : {
    //         backgroundColor: "rgba(253, 196, 203, 1)",
    //       },
    //       "&::after" : {
    //         backgroundColor: "rgba(253, 196, 203, 1)",
    //         "&:hover" : {
    //           backgroundColor: "rgba(253, 196, 203, 1)",
    //         },
    //         "&:focus" : {
    //           backgroundColor: "rgba(253, 196, 203, 1)",
    //         },
    //       },
    //     }
    //   }
    // }
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    background: {
      default: "#303030",
      paper: "#424242",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    primary: primaryPalette,
    secondary: secondaryPalette,
    error: errorPalette,
    warning: warningPalette,
    info: infoPalette,
    success: successPalette,
    divider: "rgba(255, 255, 255, 0.12)",
  },
  spacing: spacing,
  shape: {
    borderRadius: borderRadius,
  },
  breakpoints: {
    values: breakpoints,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: disableRipple,
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: arrow,
      },
    },
  },
});
