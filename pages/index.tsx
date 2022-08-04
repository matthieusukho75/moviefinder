import { Box, Grid, Typography, Pagination } from "@mui/material";
import React, { FC, useState } from "react";
import Calendar from "../src/common/components/calendar/calendar";
import Carousel from "../src/common/components/carousel/carousel";
import { ListMovie } from "../src/common/components/list-movie/list-movie";
import { SearchBar } from "../src/common/components/search-bar/search-bar";
import { CustomSelect } from "../src/common/components/select/select";
import styles from "../styles/index.module.css";
import { config } from "../config/config";

interface HomeProps {
  data: any;
  dataGenre: any;
}

const Home: FC<HomeProps> = ({ data, dataGenre }) => {
  const [numberPage, setNumberPage] = useState<number>(1);
  const [moviesToDisplay, setMoviesToDisplay] = useState<any>(data.results);
  const [argFilter, setArgFilter] = useState<any>(null); //Le type
  const [whichFilter, setWichFilter] = useState<any>(null);
  const [dateValue, setDateValue] = useState(null);

  const sortAlpha = [
    { id: 1, name: "A-Z" },
    { id: 2, name: "Z-A" },
  ];

  const onPageChange = async (event, value, filter, typeFilter) => {
    setNumberPage(value);
    let url = null;
    console.log(filter)
    //Je filtre ici les différents filtre et réitère l'appel par page
    if (filter === "genre")
      url = `${config.api_url}/discover/movie?api_key=${config.api_key}&page=${value}&with_genres=${typeFilter}`;
    //Faire un else if ou switch case si plusieurs filtres
    else {
      url = `${config.api_url}/discover/movie?api_key=${config.api_key}&page=${value}&year=${typeFilter}`;
    }

    try {
      const res = await fetch(
        url
          ? url
          : `${config.api_url}/movie/popular?api_key=${config.api_key}&page=${value}`
      );
      const data = await res.json();
      setMoviesToDisplay(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const onSelectIdGenre = async (id: number, numberPage) => {
    setWichFilter("genre");
    setArgFilter(id);
    try {
      const res = await fetch(
        `${config.api_url}/discover/movie?api_key=${config.api_key}&page=${numberPage}&with_genres=${id}`
      );
      const data = await res.json();
      setMoviesToDisplay(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const onSelectYear = async (year: any, numberPage) => {
    setWichFilter("year");
    setArgFilter(year);
    setDateValue(year);
    
    try {
      const res = await fetch(
        `${config.api_url}/discover/movie?api_key=${config.api_key}&page=${numberPage}&year=${year}`
      );
      const data = await res.json();
      setMoviesToDisplay(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box className={styles.boxContainer}>
      <Grid container className={styles.gridImage}>
        <Grid sx={{ width: "100%" }}>
          <Grid className={styles.gridTitle}>
            <img src="/images/logo.svg" alt="" className={styles.logo} />
            <SearchBar />
          </Grid>

          <Grid className={styles.gridTopRated}>
            <Grid className={styles.gridTitleTop}>
              <Typography variant="h6">Les 10 meilleurs films</Typography>
            </Grid>
            <Carousel data={data.results} />
          </Grid>
          <Grid className={styles.gridTitleFilter}>
            <Typography variant="h6">Tous les films</Typography>
            <Grid className={styles.gridFilter}>
              <CustomSelect
                sortTitle={"Trier par:"}
                sortName={"Ordre alphabétique"}
                dataToSort={sortAlpha}
                numberPage={numberPage}
                handleChangeId={(id) => onSelectIdGenre(id, numberPage)}
                type={"alpha"}
              />
              <Grid sx={{ display: "flex" }}>
                <CustomSelect
                  sortTitle={"Filtrer par:"}
                  sortName={"Genre"}
                  dataToSort={dataGenre.genres}
                  numberPage={numberPage}
                  handleChangeId={(id) => onSelectIdGenre(id, numberPage)}
                  type={"genre"}
                />
                <Calendar
                  handleChange={(year) => onSelectYear(year, numberPage)}
                  dateValue={dateValue}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid sx={{ position: "relative" }}>
        <ListMovie data={moviesToDisplay} />
        <Pagination
          count={10}
          shape="rounded"
          boundaryCount={10}
          onChange={(event, page) =>
            onPageChange(event, page, whichFilter, argFilter)
          }
          defaultPage={1}
        />
      </Grid>
    </Box>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `${config.api_url}/movie/top_rated?api_key=${config.api_key}`
  );
  const data = await res.json();

  const resGenre = await fetch(
    `${config.api_url}/genre/movie/list?api_key=${config.api_key}`
  );
  const dataGenre = await resGenre.json();
  // Pass data to the page via props
  return {
    props: {
      data,
      dataGenre,
    },
  };
}

export default Home;
