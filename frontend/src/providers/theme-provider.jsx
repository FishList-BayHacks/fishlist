import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#022A39", // Customize the primary color
    },
    primaryButton: {
      main: "#ACFEFF",
    },
    secondary: {
      main: "#dc3545", // Customize the secondary color
    },
    // Add more customizations as needed
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#D0FFFF55",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          padding: "14px 30px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          width: "100px",
          "&:hover": {
            backgroundColor: "#38B7D2",
            color: "#fff",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: "#ACFEFF",
        },
        input: {
          background: "#ACFEFF",
          borderRadius: "10px",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "&:hover .MuiInputLabel-shrink": {
            borderTop: "1.5px solid #000",
            borderRight: "1.5px solid #000",
            borderLeft: "1.5px solid #000",
          },
        },
        paper: {
          backgroundColor: "#ACFEFF",
          borderRadius: "10px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          background: "#ACFEFF",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: "900",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        shrink: {
          transform: "translate(8px, -18px) scale(0.75)",
          color: "#000",
          background: "#ACFEFF",
          padding: "0px 5px 4px 5px",
          borderRadius: "10px",
          borderTop: "2px solid rgba(0, 0, 0, 0.23)",
          borderRight: "2px solid rgba(0, 0, 0, 0.23)",
          borderLeft: "2px solid rgba(0, 0, 0, 0.23)",
          "&.Mui-focused": {
            borderTop: "2px solid #000 !important",
            borderRight: "2px solid #000 !important",
            borderLeft: "2px solid #000 !important",
          },
          "&.Mui-error": {
            borderTop: "2px solid #d32f2f !important",
            borderRight: "2px solid #d32f2f !important",
            borderLeft: "2px solid #d32f2f !important",
          },
        },
      },
    },
  },
  // Add other theme customizations (typography, breakpoints, etc.) here
});

// Create a ThemeProvider component to wrap around your application
const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
