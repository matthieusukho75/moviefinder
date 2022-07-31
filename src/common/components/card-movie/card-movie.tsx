import { FC } from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./card-movie.module.css";

interface CardMovieProps  {
    title: string;
    date: string;
    img: string;
}
export const CardMovie:FC<CardMovieProps> = ({ title, date, img }) => {
    
    return (
        <Grid>
             <img src={img} className={styles.card_img} width={'150px'} height={'200px'}/>
             <Typography variant='body1'>{title}</Typography>
             <Typography variant='body2'>{date}</Typography>
        </Grid>
    );
}