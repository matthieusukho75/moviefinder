import { createTheme } from "@mui/material";

export const colors = {
  softBlue: "#586E94",
  hardBlue: "#253755",
  backgroundBlue: "#0D1D38",
  dividerBlue: "#2F3D57",
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
      "@media (max-width: 740px)": {
        fontSize: "16px",
        lineHeight: "18.75px",
      },
    },
  },
  components: {
    MuiPagination: {
      styleOverrides: {
        ul: {
          justifyContent: "center",
          paddingBottom: "55px",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          color: colors.softBlue,
          border: `1px solid ${colors.softBlue}`,
          margin: "0 16px",
          borderRadius: "12px",
          "&.Mui-selected": {
            border: 0,
            backgroundColor: colors.hardBlue,
          },
          "@media (max-width: 740px)": {
            margin: "8px",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "14.06px",
          paddingRight: 0 + "!important",
          "&.Mui-focused": {
            backgroundColor: colors.hardBlue,
          },
        },
        input: {
          padding: "11px 20px 6px 39px !important",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});
