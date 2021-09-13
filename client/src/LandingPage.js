import { Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import Banner from "./Banner";
import landing from "./images/landing.png";

const useStyles = makeStyles((theme) => ({
  banner: {
    fontFamily: "Open Sans",
    backgroundImage: `linear-gradient(to bottom,
      ${theme.palette.primaryTrans.main},
      rgb(134, 185, 255, 0.85)),
      url(${landing})`,
    backgroundSize: "cover",
    height: "100vh",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      width: "20%",
      height: "20%",
    },
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      <Hidden xsDown>
        <Grid
          className={classes.banner}
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
          md={5} >
          <Banner />
        </Grid>
      </Hidden>
      <Grid container item xs={12} md={7}>
        {props.children}
      </Grid>
  </Grid>
  );
};

export default LandingPage;