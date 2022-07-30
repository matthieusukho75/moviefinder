import { Box, Container, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import Carousel from "../src/common/components/carousel/carousel";
import { colors } from "../src/theme";

const Home: FC = () => {
  return (
    <Box sx={{width: '100%'}}>
      <Grid
        container
        sx={{
          backgroundImage: "url(/images/backgroundimg.jpg)",
          backgroundSize: "cover",
          padding: '32px 92px',
          "&:before": {
            content: '""',
            background: colors.hardBlue,
            width: "100%",
            opacity: "0.5",
          },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <img src="/images/logo.svg" alt="" />
          <Typography>SEARCH BAR</Typography>
        </Grid>

        <Grid sx={{ padding: "72px 0 44px" }}>
          <Typography variant="h6">Les 10 meilleurs films</Typography>
          <Carousel />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
