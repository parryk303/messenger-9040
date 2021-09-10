import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import bubble from "./images/bubble.svg";

const Banner = () => {
  return (
    <>
      <Grid>
        <img src={bubble} alt="bubble" />
      </Grid>
      <Box p={11}>
        <Grid>
          <Typography variant="h4" align="center">
            Converse with anyone in any language
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default Banner;