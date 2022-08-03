import { FC } from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./card-movie.module.css";
import { useMediaQuery } from "@mui/material";

interface CardMovieProps  {
    title: string;
    date: string;
    img: string;
    className?: string;
}
export const CardMovie:FC<CardMovieProps> = ({ title, date, img, className }) => {

    const smallScreen = useMediaQuery('(max-width: 740px)')
    return (
        <Grid item>
             <img src={img} className={ className && smallScreen  ? className : styles.card_img} />
             <Typography sx={{maxWidth: 'fit-content'}}variant='body1'>{title}</Typography>
             <Typography variant='body2'>{date}</Typography>
        </Grid>
    );
}