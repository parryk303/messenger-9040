import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
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
    padding: "10px 40px 0px 10px",
    margin: "2.5% 0.5% 11% 0%",
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
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20%",
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
    width: "70%",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <LandingPage>
      <Grid item xs={12}>
        <Box className={classes.navBox}>
          <Typography className={classes.suggestionLine} color="secondary">
            Already have an account?
          </Typography>
          <Paper elevation={3}>
            <Button
              className={classes.navButton}
              color="primary"
              onClick={() => history.push("/login")} >
                Login
            </Button>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.formContainer}>
        <Box className={classes.formBox}>
          <Typography className={classes.formHeader} variant="h4">
            Create an account.
          </Typography>
          <form onSubmit={handleRegister} className={classes.form}>
            <Grid container direction="column" spacing={5}>
              <Grid item>
                <FormControl className={classes.formTextFeild}>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    require />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl className={classes.formTextFeild}>
                  <TextField
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    require />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl
                  error={!!formErrorMessage.confirmPassword}
                  className={classes.formTextFeild} >
                  <TextField
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    require />
                    <FormHelperText>
                      {formErrorMessage.confirmPassword}
                    </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item>
              <FormControl
                  error={!!formErrorMessage.confirmPassword}
                  className={classes.formTextFeild} >
                  <TextField
                    aria-label="confirm password"
                    label="Confirm Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    handleRegister={handleRegister}
                    require />
                    <FormHelperText>
                      {formErrorMessage.confirmPassword}
                    </FormHelperText>
                </FormControl>
              </Grid>
              <Button type="submit" variant="contained" size="large" className={classes.formButton}>
                Create
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
      register: (credentials) => {
        dispatch(register(credentials));
      },
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Login);
