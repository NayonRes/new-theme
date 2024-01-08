import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ColorPalette from "./color-palette/ColorPalette";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./pages/layout/Layout";
import { Box } from "@mui/material";
const lightTheme = createTheme({
  palette: {
    mode: "light", // Light theme mode
    background: {
      default: ColorPalette.light.background.default, // Change the background color for dark mode
    },
    primary: {
      main: ColorPalette.light.primary.main,
      light: ColorPalette.light.primary.light,
      contrastText: ColorPalette.light.primary.contrastText,
    },
    secondary: {
      main: ColorPalette.light.secondary.main,
      light: ColorPalette.light.secondary.light,
      contrastText: ColorPalette.light.secondary.contrastText,
    },
    success: {
      main: ColorPalette.light.success.main,
      light: ColorPalette.light.success.light,
      contrastText: ColorPalette.light.success.contrastText,
    },
    info: {
      main: ColorPalette.light.info.main,
      light: ColorPalette.light.info.light,
      contrastText: ColorPalette.light.info.contrastText,
    },
    warning: {
      main: ColorPalette.light.warning.main,
      light: ColorPalette.light.warning.light,
      contrastText: ColorPalette.light.warning.contrastText,
    },
    error: {
      main: ColorPalette.light.error.main,
      light: ColorPalette.light.error.light,
      contrastText: ColorPalette.light.error.contrastText,
    },
    text: {
      main: ColorPalette.light.text.main,
      light: ColorPalette.light.text.light,
      fade: ColorPalette.light.text.fade,
      contrastText: ColorPalette.light.text.contrastText,
    },
    border: {
      main: ColorPalette.light.border.main,
    },
    paper: {
      main: ColorPalette.light.paper,
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",

    h1: {
      fontSize: "3rem", //48px
      lineHeight: "3.625rem", // 58px
      fontWeight: 400,
    },
    h2: {
      fontSize: "2.5rem", //40px
      lineHeight: "3.125rem", // 50px
      fontWeight: 400,
    },
    h3: {
      fontSize: "2rem", //32px
      lineHeight: "2.625rem", // 42px
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.75rem", //28px
      lineHeight: "2.375rem", // 38px
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.5rem", //24px
      lineHeight: "2.125rem", // 34px
      fontWeight: 400,
    },
    h6: {
      fontSize: "1.25rem", //20px
      lineHeight: "1.875rem", // 30px
      fontWeight: 400,
    },
    base: {
      fontSize: "1rem", //16px
      lineHeight: "1.625rem", // 26px
      display: "block",
      fontWeight: 400,
    },
    medium: {
      fontSize: "0.875rem", //14px
      lineHeight: "1.25rem", // 20px
      display: "block",
      fontWeight: 400,
    },
    small: {
      fontSize: "0.75rem", //12px
      lineHeight: "1.125rem", // 18px
      display: "block",
      fontWeight: 400,
    },
    xsmall: {
      fontSize: "0.625rem", //10px
      lineHeight: "1rem", // 16px
      display: "block",
      fontWeight: 400,
    },
    xxsmall: {
      fontSize: "0.5rem", //10px
      lineHeight: "0.625rem", // 16px
      display: "block",
      fontWeight: 400,
    },
  },
  components: {
    MuiPaper: {
      // Dark theme paper color
      styleOverrides: {
        root: {
          backgroundColor: ColorPalette.light.paper,
          boxShadow:
            "0px 2px 3px 0px rgba(0, 34, 66, 0.05), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
          // padding: "24px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // fontSize: "0.875rem",
          // padding: "8px 10px",
          // borderRadius: "6px",
          // textTransform: "none",
        },
      },
    },
    // MuiIconButton: {
    //   styleOverrides: {
    //     // Name of the slot
    //     root: {
    //       // Some CSS

    //     },
    //   },
    // },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: ColorPalette.light.border.main, // Change the background color to your desired color
          height: "1px", // Change the height as needed
          margin: "0px", // Change the margin as needed
        },
      },
    },
    MuiAvatar: {
      variants: [
        // {
        //   props: { variant: "rounded" },
        //   style: {
        //     borderRadius: "50%", // You can adjust the value for the desired border radius
        //     width: "36px",
        //     height: "36px",
        //   },
        // },
        {
          props: { variant: "rounded" },
          style: {
            borderRadius: "6px", // You can adjust the value for the desired border radius
            width: "24px",
            height: "24px",
          },
        },
      ],
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: "50px", // Adjust the border-radius value as needed
          backgroundColor: ColorPalette.light.border.main, // Change the background color as needed
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "6px", // Adjust the border-radius value as needed
        },
        standardSuccess: {
          backgroundColor: ColorPalette.light.success.light, // Change the background color for success alerts
          color: ColorPalette.light.success.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardError: {
          backgroundColor: ColorPalette.light.error.light, // Change the background color for error alerts
          color: ColorPalette.light.error.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardWarning: {
          backgroundColor: ColorPalette.light.warning.light, // Change the background color for warning alerts
          color: ColorPalette.light.warning.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardInfo: {
          backgroundColor: ColorPalette.light.info.light, // Change the background color for info alerts
          color: ColorPalette.light.info.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          "& li a": {
            textDecoration: "none",
            fontSize: "12px",
            color: ColorPalette.light.text.fade, // Replace with your text color
            fontWeight: 500,
          },
          "& li:last-child": {
            "& a": {
              color: ColorPalette.light.info.main, // Replace with your fade text color
              cursor: "default",
            },
          },
        },
        separator: {
          color: ColorPalette.light.info.main,
          // Set the color for the separator between breadcrumbs
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: "14px",
          fontWeight: 400,
          padding: "6px 10px 6px 0px",
          borderBottom: `2px solid ${ColorPalette.light.border.main}`,
          background: ColorPalette.light.paper,
        },
        body: {
          fontSize: "14px",
          fontWeight: 400,
          padding: "6px 10px 6px 0px",
        },
      },
    },
  },
});
const darkTheme = createTheme({
  palette: {
    mode: "dark", // Dark theme mode
    background: {
      default: ColorPalette.dark.background.default, // Change the background color for dark mode
    },
    primary: {
      main: ColorPalette.dark.primary.main,
      light: ColorPalette.dark.primary.light,
      contrastText: ColorPalette.dark.primary.contrastText,
    },
    secondary: {
      main: ColorPalette.dark.secondary.main,
      light: ColorPalette.dark.secondary.light,
      contrastText: ColorPalette.dark.secondary.contrastText,
    },
    success: {
      main: ColorPalette.dark.success.main,
      light: ColorPalette.dark.success.light,
      contrastText: ColorPalette.dark.success.contrastText,
    },
    info: {
      main: ColorPalette.dark.info.main,
      light: ColorPalette.dark.info.light,
      contrastText: ColorPalette.dark.info.contrastText,
    },
    warning: {
      main: ColorPalette.dark.warning.main,
      light: ColorPalette.dark.warning.light,
      contrastText: ColorPalette.dark.warning.contrastText,
    },
    error: {
      main: ColorPalette.dark.error.main,
      light: ColorPalette.dark.error.light,
      contrastText: ColorPalette.dark.error.contrastText,
    },
    text: {
      main: ColorPalette.dark.text.main,
      light: ColorPalette.dark.text.light,
      fade: ColorPalette.dark.text.fade,
      contrastText: ColorPalette.dark.text.contrastText,
    },
    border: {
      main: ColorPalette.dark.border.main,
    },
    paper: {
      main: ColorPalette.dark.paper,
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem", //48px
      lineHeight: "3.625rem", // 58px
      fontWeight: 400,
    },
    h2: {
      fontSize: "2.5rem", //40px
      lineHeight: "3.125rem", // 50px
      fontWeight: 400,
    },
    h3: {
      fontSize: "2rem", //32px
      lineHeight: "2.625rem", // 42px
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.75rem", //28px
      lineHeight: "2.375rem", // 38px
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.5rem", //24px
      lineHeight: "2.125rem", // 34px
      fontWeight: 400,
    },
    h6: {
      fontSize: "1.25rem", //20px
      lineHeight: "1.875rem", // 30px
      fontWeight: 400,
    },
    base: {
      fontSize: "1rem", //16px
      lineHeight: "1.625rem", // 26px
      display: "block",
      fontWeight: 400,
    },
    medium: {
      fontSize: "0.875rem", //14px
      lineHeight: "1.25rem", // 20px
      display: "block",
      fontWeight: 400,
    },
    small: {
      fontSize: "0.75rem", //12px
      lineHeight: "1.125rem", // 18px
      display: "block",
      fontWeight: 400,
    },
    xsmall: {
      fontSize: "0.625rem", //10px
      lineHeight: "1rem", // 16px
      display: "block",
      fontWeight: 400,
    },
    xxsmall: {
      fontSize: "0.5rem", //10px
      lineHeight: "0.625rem", // 16px
      display: "block",
      fontWeight: 400,
    },
  },
  components: {
    MuiPaper: {
      // Dark theme paper color
      styleOverrides: {
        root: {
          backgroundColor: ColorPalette.dark.paper,
          boxShadow:
            "0px 2px 3px 0px rgba(0, 34, 66, 0.05), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
          // padding: "24px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot

        root: {
          // Some CSS
          // fontSize: "0.875rem",
          // padding: "8px 10px",
          // borderRadius: "6px",
          // textTransform: "none",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: ColorPalette.dark.border.main, // Change the background color to your desired color
          height: "1px", // Change the height as needed
          margin: "0px", // Change the margin as needed
        },
      },
    },
    MuiAvatar: {
      variants: [
        // {
        //   props: { variant: "rounded" },
        //   style: {
        //     borderRadius: "50%", // You can adjust the value for the desired border radius
        //     width: "36px",
        //     height: "36px",
        //   },
        // },
        {
          props: { variant: "rounded" },
          style: {
            borderRadius: "6px", // You can adjust the value for the desired border radius
            width: "22px",
            height: "22px",
          },
        },
      ],
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: "50px", // Adjust the border-radius value as needed
          backgroundColor: ColorPalette.dark.border.main, // Change the background color as needed
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "6px", // Adjust the border-radius value as needed
        },
        standardSuccess: {
          backgroundColor: ColorPalette.dark.success.light, // Change the background color for success alerts
          color: ColorPalette.dark.success.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardError: {
          backgroundColor: ColorPalette.dark.error.light, // Change the background color for error alerts
          color: ColorPalette.dark.error.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardWarning: {
          backgroundColor: ColorPalette.dark.warning.light, // Change the background color for warning alerts
          color: ColorPalette.dark.warning.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardInfo: {
          backgroundColor: ColorPalette.dark.info.light, // Change the background color for info alerts
          color: ColorPalette.dark.info.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          "& li a": {
            textDecoration: "none",
            fontSize: "14px",
            color: ColorPalette.dark.text.main, // Replace with your text color
          },
          "& li:last-child": {
            "& a": {
              color: ColorPalette.dark.text.fade, // Replace with your fade text color
              cursor: "default",
            },
          },
        },
        separator: {
          color: ColorPalette.dark.text.main, // Set the color for the separator between breadcrumbs
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: "14px",
          fontWeight: 500,
          padding: "6px 10px 6px 0px",
          borderBottom: `1px solid ${ColorPalette.dark.border.main}`,
          background: "#232323",
        },
        body: {
          fontSize: "14px",
          fontWeight: 400,
          padding: "6px 10px 6px 0px",
        },
      },
    },
  },
});
function App() {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    // Toggle between light and dark themes
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: "#F8F8FA", minHeight: "100vh" }}>
        <CssBaseline />
        {/* My project */}
        <Layout />
      </Box>
    </ThemeProvider>
  );
}

export default App;
