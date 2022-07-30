import { IconButton } from "@mui/material";

export const PrevButton = ({ enabled, onClick }) => (
    <IconButton
      className="embla__button embla__button--prev"
      onClick={onClick}
      disabled={!enabled}
    >
      <img src="/images/sliderpreviousarrow.svg" alt=""/>
    </IconButton>
  );
  
  export const NextButton = ({ enabled, onClick }) => (
    <IconButton
      className="embla__button embla__button--next"
      onClick={onClick}
      disabled={!enabled}
    >
       <img src="/images/slidernextarrow.svg" alt=""/>
    </IconButton>
  );