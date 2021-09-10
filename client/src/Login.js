import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import LandingPage from "./LandingPage";

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
  formButton: {
    backgroundColor: "#0086FE",
    height: 70,
    width: 200,
    fontSize: 20,
    fontWeight: 900,
    marginTop: "9%",
    marginLeft: "30%",
    letterSpacing: -0.8,
    color: "white",
    [theme.breakpoints.down("xs")]: {
      margin: "10% 0% 3% 20%",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "10% 5% 7% 30%",
    },
    [theme.breakpoints.up("md")]: {
      margin: "10% 5% 0% 36%",
    },
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20%",
    [theme.breakpoints.up("xs")]: {
      margin: "0% 0% 0% 10%",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0% 5% 7% 23%",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0% 5% 0% 23%",
    },
  },
  formContainer: {
    height: 600,
    flexDirection: "row",
    justifyContent: "center",
  },
  formHeader: {
    fontWeight: 650,
    paddingBottom: 40,
  },
  formTextFeild: {
    width: "100%",
    paddingTop: "10%",
    "&:hover": {
      color: "#0086FE",
    }
  },
  form: {
    width: "90%",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <LandingPage>
      <Grid item xs={12}>
        <Box className={classes.navBox}>
          <Typography className={classes.suggestionLine} color="secondary">
            Don't have an account?
          </Typography>
          <Paper elevation={3}>
            <Button
              className={classes.navButton}
              color="primary"
              onClick={() => history.push("/register")} >
                Create account
            </Button>
          </Paper>
        </Box>
      </Grid>
      <Grid className={classes.formContainer} item xs={12}>
        <Box pt={8} className={classes.formBox}>
          <Typography className={classes.formHeader} variant="h4">
            Welcome Back!
          </Typography>
          <form onSubmit={handleLogin} className={classes.form}>
            <Grid container direction="column" spacing={5}>
              <Grid item>
                <FormControl className={classes.formTextFeild} >
                    <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text" />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl className={classes.formTextFeild}>
                  <TextField
                    label="Password"
                    aria-label="Password"
                    type="password"
                    name="password" />
                </FormControl>
              </Grid>
                <Button type="submit" variant="contained" size="large" className={classes.formButton}>
                  Login
                </Button>
              </Grid>
            </form>
          </Box>
        </Grid>
      </LandingPage>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
