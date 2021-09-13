import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import bubble from "./images/bubble.svg";

const useStyles = makeStyles((theme) => ({
  bubble: {
    width: 125,
    [theme.breakpoints.down("md")]: {
      width: 100,
      marginTop: 50,
    },
  },
  header: {
    fontWeight: 500,
    fontSize: 60,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
    }
  }
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <>
      <Grid>
        <img src={bubble} alt="bubble" className={classes.bubble} />
      </Grid>
      <Box p={11}>
        <Grid>
          <Typography variant="h4" align="center" className={classes.header}>
            Converse with anyone with any language
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default Banner;