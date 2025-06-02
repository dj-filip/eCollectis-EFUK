import { createTheme } from "@mui/material";

const primaryPalette = {
  main: "#3AD1E8",
  light: "#3AD1E84D"
};

const secondaryPalette = {
  main: "#FFFFFF",
  dark: "#0A1423"
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

const spacing = [0, 4, 8, 16, 32, 64, 128, 1];

const borderRadius = 5;

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
    primary: primaryPalette,
    secondary: secondaryPalette,
    error: errorPalette,
    warning: warningPalette,
    info: infoPalette,
    success: successPalette,
    divider: "red",
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
  palette: {
    background: {
      paper: "transparent",
      button: "red"
    },
    primary: primaryPalette,
    secondary: secondaryPalette,
    error: errorPalette,
    warning: warningPalette,
    info: infoPalette,
    success: successPalette,
    divider: secondaryPalette.dark,
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      color: secondaryPalette.main,
      fontSize: "36px",
    },
    subtitle1: {
      color: primaryPalette.main,
      fontSize: "16px",
      fontWeight: "300",
      textTransform: "uppercase",
    },
    h2: {
      color: primaryPalette.main,
    },
    h3: {
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "24px",
      textTransform: "uppercase",
      color: primaryPalette.main,
      '@media (max-width: 1920px)': {
        fontSize: "16px",
        lineHeight: "22px"
      },
    },
    h4: {
      fontSize: "24px",
      fontWeight: "300",
      lineHeight: "32px",
      color: secondaryPalette.main,
      '@media (max-width: 1920px)': {
        fontSize: "20px",
        lineHeight: "26px"
      },
    },
    body: {
      fontSize: "18px",
      fontWeight: "300",
      lineHeight: "32px",
      color: secondaryPalette.main,
    }
  },
  spacing: spacing,
  shape: {
    borderRadius: borderRadius,
  },
  breakpoints: {
    values: breakpoints,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "btn" },
          style: {
            alignSelf: "center",
            padding: "10px 45px",
            color: secondaryPalette.dark,
            backgroundColor: primaryPalette.main,
            '@media (max-width: 1920px)': {
              fontSize: "14px", 
              padding: "8px 35px",
            }
          }
        },
        {
          props: { variant: "outline-btn" },
          style: {
            alignSelf: "center",
            padding: "10px 45px",
            color: secondaryPalette.main,
            border: "1px solid " + primaryPalette.main,
            '@media (max-width: 1920px)': {
              fontSize: "14px", 
              padding: "8px 35px",
            }
          }
        }
      ],
      defaultProps: {
        disableRipple: disableRipple,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: "12px",
          border: "1px solid #3AD1E84D",
          borderRadius: "5px",
          '&:hover .MuiSvgIcon-root': {
            fill: secondaryPalette.main
          },
          '@media (max-width: 1920px)': {
            padding: "8px",
          },
        }
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "18px",
        }
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: arrow,
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          color: "red",
        }
      }
    },
    // Table 
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderRight: "1px solid transparent",
          borderBottom: "1px solid transparent"
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: { 
          shrink: true,
          sx: {
            transform: "none",
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "24px",
            textTransform: "uppercase",
            color: primaryPalette.main,
            '@media (max-width: 1920px)': {
              fontSize: "16px",
              lineHeight: "22px"
            },
          },
        },
        variant: "standard",
        placeholder: "Упишите овде...",
      },
      styleOverrides: {
        root: {
          '.MuiInput-root': {
            marginTop: "40px",
          },
          '&:hover .MuiInput-underline::before': {
            borderBottom: "1px solid #3AD1E8 !important",
          },
          '& label': {
            transform: "none",
          },
          '& textarea': {
            color: "#FFF",
          },
          // '& textarea::placeholder': {
          //   opacity: "1 !important",
          // },
          '& .MuiInput-underline::before': {
            borderBottom: "none",
          },
          '& .MuiInput-underline::after': {
            borderBottomColor: '#3AD1E8',
          },
          '& label': {
            color: "#3AD1E8 !important",
          },
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '.MuiInput-root': {
            marginTop: "35px",
            borderBottom: "1px solid #3AD1E8",
          },
          '& label': {
            color: "#3AD1E8 !important",
            transform: "none",
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "24px",
            textTransform: "uppercase",
            color: primaryPalette.main,
            '@media (max-width: 1920px)': {
              fontSize: "16px",
              lineHeight: "22px"
            },
          },
          '&:hover .MuiInput-underline::before': {
            borderBottom: "1px solid #3AD1E8 !important",
          },
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: secondaryPalette.main
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: secondaryPalette.dark + "!important"
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: secondaryPalette.main,
          '&:hover': {
            color: primaryPalette.main
          },
        }
      }
    }
  },
});
