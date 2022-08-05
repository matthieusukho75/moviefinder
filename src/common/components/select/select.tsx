import React, { FC } from "react";
import MenuItem from "@mui/material/MenuItem";
import { Typography} from "@mui/material";
import styles from "./select.module.css";
import { colors } from "../../../theme";
import { InputAdornment } from "@mui/material";
import { config } from "../../../../config/config";
import { CssTextField } from "../custom-textfield/custom-textfield";

interface SelectProps {
  sortName: string;
  sortTitle: string;
  dataToSort?: { id: number; name: string }[];
  numberPage?: number;
  handleChangeId?: (id: number) => void;
  type? : string;
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
  handleChangeId,
  type
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
    handleChangeId(event.target.value);
  };

  return (
    <div className={type === 'genre' ? styles.select_container_genre :  styles.select_container}>
      <Typography variant="body2">{sortTitle}</Typography>
      <CssTextField
        value={value}
        select
        SelectProps={{
          MenuProps: MenuProps,
        }}
        sx={{
          "& .MuiSvgIcon-root": {
            display: "none",
          },
          "& .MuiInputBase-root": {
            borderRadius: "12px",
          },
        }}
       
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment className={styles.positionIcon} position="end">
              <img
                src="/images/dropdownarrow.svg"
                width={10}
                height={10}
                alt=""
              />
            </InputAdornment>
          ),
        }}
       
        className={type === 'genre' ? styles.inputSelectGenre : styles.inputSelect}
      >
         <MenuItem disabled={true} key={0} value={0} className={styles.menu_item}>
            <Typography variant="body2">{sortName}</Typography>
          </MenuItem>
        {dataToSort.map((obj, index) => (
          <MenuItem key={index} value={obj.id} className={styles.menu_item}>
            <Typography variant="body2">{obj.name}</Typography>
          </MenuItem>
        ))}
      </CssTextField>
    </div>
  );
};

export default CustomSelect;
