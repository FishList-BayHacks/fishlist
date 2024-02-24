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
  // Add other theme customizations (typography, breakpoints, etc.) here
});

// Create a ThemeProvider component to wrap around your application
const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
