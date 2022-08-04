import { Box, Grid } from "@mui/material";
import React, { FC } from "react";
import { config } from "../../../../config/config";
import { CardMovie } from "../card-movie/card-movie";
import styles from "./list-movie.module.css";

interface ListProps {
  data: any;
}

export const ListMovie: FC<ListProps> = ({ data }) => {
  //console.log(data);
  return (
    <Box className={styles.box_container}>
      <Grid container justifyContent="center" flexDirection="row">
        {data.map((movie, index) => {
        const yearDate = movie.release_date.split('-')[0]
          return (
            <Grid
              key={index}
              item
              className={styles.grid_movie}
              xs={6}
              sm={4}
              md={2.2}
            >
              <CardMovie
                img={config.url_image + movie.poster_path}
                title={movie.title}
                date={yearDate}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ListMovie;
