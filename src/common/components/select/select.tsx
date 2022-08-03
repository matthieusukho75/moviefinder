import React, { FC } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Typography, NativeSelect, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "./select.module.css";
import { colors } from "../../../theme";
import { InputAdornment } from "@mui/material";
import { config } from "../../../../config/config";

interface SelectProps {
  sortName: string;
  sortTitle: string;
  dataToSort?: { id: number; name: string }[];
  numberPage?: number;
  handleChangeId?: (id: number) => void
}

const MenuProps = {
  PaperProps: {
    style: {
      width: "fit-content",
      backgroundColor: colors.hardBlue,
      padding: 0,
    },
  },
};

export const CustomSelect: FC<SelectProps> = ({
  sortTitle,
  sortName,
  dataToSort,
  numberPage,
  handleChangeId
}) => {
  const [value, setValue] = React.useState<string[]>([]);

  const handleAlphaChange = async () => {
    try {
      const res = await fetch(
        `${config.api_url}/discover/movie?api_key=${config.api_key}&page=${numberPage}&sort_by=title.asc`
      );
      const data = await res.json();
      console.log(data)
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value)
    handleChangeId(event.target.value);
  }

  return (
    <div className={styles.select_container}>
      <Typography variant="body2">{sortTitle}</Typography>

      <Select
        value={value}
        onChange={handleChange}
        MenuProps={MenuProps}
        placeholder={sortName}
        className={styles.inputSelect}
        sx={{
          "& .MuiSvgIcon-root": {
            display: "none",
          },
          "& .MuiSelect-select": {
            padding: "11px 20px 6px 39px",
          },
        }}
        endAdornment={
          <InputAdornment className={styles.positionIcon} position="end">
            <img
              src="/images/dropdownarrow.svg"
              width={10}
              height={10}
              alt=""
            />
          </InputAdornment>
        }
      >
        {dataToSort.map((obj, index) => (
          <MenuItem key={index} value={obj.id} className={styles.menu_item}>
            <Typography variant="body2">{obj.name}</Typography>
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default CustomSelect;
