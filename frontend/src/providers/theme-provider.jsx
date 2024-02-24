import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#4ecdff", // Customize the primary color
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
          background: "rgba(255, 255, 255, 0.55)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(11px)",
          WebkitBackdropFilter: "blur(11px)",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.18)",
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
