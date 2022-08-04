import { FormControl, InputAdornment, OutlinedInput } from "@mui/material"
import React from "react";
import styles from './search-bar.module.css'

export const SearchBar = () => {

    return (
        <FormControl variant="outlined">
            <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                    <InputAdornment position="end" sx={{marginRight: "14px"}}>
                        <img src={'/images/searchicon.svg'} alt="" />
                    </InputAdornment>
                }
                placeholder={'Rechercher un film'}
                className={styles.input}
            />
        </FormControl>
    )
}