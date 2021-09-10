import { Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import Banner from "./Banner";
import landing from "./images/landing.png";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: `linear-gradient(to bottom,
      ${theme.palette.primaryTrans.main},
      ${theme.palette.secondaryTrans.main}),
      url(${landing})`,
    backgroundSize: "cover",
    height: "100vh",
    color: "white",
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