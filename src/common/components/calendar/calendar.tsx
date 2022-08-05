import { SxProps } from "@mui/material/styles";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import React, { FC, useState } from "react";
import { colors } from "../../../theme";
import { CssTextField } from "../custom-textfield/custom-textfield";
import styles from "./calendar.module.css";

interface CalendarProps {
    handleChange: (year: any) => void
    dateValue: any
  }

export const Calendar : FC<CalendarProps>= ({handleChange, dateValue}) => {

  const [open, setOpen] = useState(false);

  const popperSx: SxProps = {
    "& .MuiPaper-root": {
      border: 0,
      background: colors.hardBlue,
      borderRadius: "12px",

      "& .MuiCalendarPicker-root": {
        maxHeight: "192px",
      },
    },
  };
  return (
    //J'ai pas mal galerer à reproduire exactement le même calendrier :/

    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        views={["year"]}
        onClose={() => setOpen(false)}
        open={open}
        className={styles.datePicker}
        PopperProps={{
          sx: popperSx,
        }}
        value={dateValue}
        onChange={(newValue) => handleChange(moment(newValue).format('YYYY'))}
        renderInput={(params) => {
          return (
            <CssTextField
              sx={{
                "& .MuiSvgIcon-root": {
                  display: "none",
                },
                "& .MuiInputBase-root": {
                  borderRadius: "12px",
                  border: "1px solid" + colors.softBlue,
                  color: colors.softBlue,
                  width: "121px",
                  cursor: 'pointer',
                  "@media (max-width: 321px)" : {
                    width: "100px",
                  },
                  "& .MuiInputBase-input": {
                    padding: "11px 20px 6px 42px!important"
                  }
                },
                "& .MuiFormLabel-root": {
                  color: colors.softBlue,
                },
              }}
              onClick={() => setOpen(true)}
              {...params}
              inputProps={{
                ...params.inputProps,
                placeholder: "Année",
              }}
            ></CssTextField>
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
