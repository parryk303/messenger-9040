import { Box, Button, Paper, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  navButton: {
    textAlign: "center",
    variant: "contained",
    background: "white",
    height: 65,
    width: 160,
    fontWeight: 900,
  },
  navBox: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "10px 40px 0px 15px",
    [theme.breakpoints.up("xs")]: {
      margin: "5% 0% 11% 5.5%",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "7% 4% 7% 3%",
    },
    [theme.breakpoints.up("md")]: {
      margin: "2.5% 0.5% 4% 0%"
    },
  },
  suggestionLine: {
    fontSize: 18,
    fontWeight: 550,
    paddingRight: 40,
    letterSpacing: -0.5,
  },
}));

const ComboNav = ({ history, text, button, path }) => {
  const classes = useStyles();
  return (
    <Box className={classes.navBox}>
      <Typography className={classes.suggestionLine} color="secondary">
        {text}
      </Typography>
      <Paper elevation={3}>
        <Button
          className={classes.navButton}
          color="primary"
          onClick={() => history.push(`/${path}`)} >
            {button}
        </Button>
      </Paper>
    </Box>
  );
}

export default ComboNav;