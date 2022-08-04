import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";


export const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'transparent',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'transparent',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'transparent',
      },
      '&:hover fieldset': {
        borderColor: 'transparent',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'transparent',
      },
    },
  });