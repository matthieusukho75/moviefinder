import { Box, Container, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import Carousel from "../src/common/components/carousel/carousel";
import { colors } from "../src/theme";

const Home: FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        sx={{
          backgroundImage: "url(/images/backgroundimg.jpg)",
          backgroundSize: "cover",
          padding: "32px 92px",
        }}
      >
        <Grid
          sx={{
            background:
              "linear-gradient(172.79deg, rgba(13, 29, 56, 0.0001) 0%, #0D1D38 80.98%)",
            width: "100%",
            height: "100%",
            mixBlendMode: "luminosity",
            position: "absolute",
            top: 0,
            right: 0,
            opacity: "0.2",
          }}
        ></Grid>
        <Grid
          sx={{
            zIndex: 1200,
            width: "100%",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <img src="/images/logo.svg" width={220} height={36} alt="" />
            <Typography>SEARCH BAR</Typography>
          </Grid>

          <Grid sx={{ padding: "72px 0 44px" }}>
            <Typography variant="h6">Les 10 meilleurs films</Typography>
            <Carousel />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
