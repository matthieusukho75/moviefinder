import { createTheme } from "@mui/material";

export const colors = {
  softBlue: "#586E94",
  hardBlue: "#253755",
};

export const theme = createTheme({
  palette: {},
  typography: {
    allVariants: {
      color: "#FFFF",
    },
    body1: {
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "16.41px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "14.06px",
      color: colors.softBlue,
    },
    h6: {
      fontWeight: 700,
      fontSize: "26px",
      lineHeight: "30.47px",
    },
  },
});
