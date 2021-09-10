import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold"
      }
    }
  },
  palette: {
    primary: { main: "#3A8DFF" },
    primaryTrans: { main: "rgb(58, 141, 255, 0.8)" },
    secondary: { main: "#B0B0B0" },
    secondaryTrans: { main: "rgb(58, 141, 255, 0.8)"},
  },
});
