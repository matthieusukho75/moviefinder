import { IconButton } from "@mui/material";
import styles from "./carousel.module.css";

export const PrevButton = ({ enabled, onClick }) => (
    <IconButton
      className={styles.embla__button__prev}
      onClick={onClick}
      disabled={!enabled}
    >
      <img src="/images/sliderpreviousarrow.svg" alt=""/>
    </IconButton>
  );
  
  export const NextButton = ({ enabled, onClick }) => (
    <IconButton
    className={styles.embla__button__next}
      onClick={onClick}
      disabled={!enabled}
    >
       <img src="/images/slidernextarrow.svg" alt=""/>
    </IconButton>
  );