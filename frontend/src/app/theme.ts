"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { green, pink, purple } from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: "dark",
    primary: {
      light: "#64b5f6", // Light blue
      main: "#2196f3", // Blue
      dark: "#0d47a1", // Dark blue
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffca80", // Light orange
      main: "#ff9800", // Orange
      dark: "#bf360c", // Dark orange
      contrastText: "#fff",
    },
    // openTitle: "#2196f3", // Blue
    // protectedTitle: pink["400"], // Reuse pink for consistency
    // type: "light",
  },
});

export default theme;
