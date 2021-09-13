import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
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
      margin: "10% 5% 7% 23%",
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
      margin: "0% 7% 7% 20%",
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

const ComboForm = ({
  handleLogin,
  handleRegister,
  signUp,
  formErrorMessage,
  signupHeader,
  loginHeader
}) => {

  const classes = useStyles();

  return (
    <Grid className={classes.formContainer} item xs={12}>
      <Box pt={8} className={classes.formBox}>
        <Typography className={classes.formHeader} variant="h4">
          {signUp ? signupHeader : loginHeader}
        </Typography>
        <form onSubmit={handleLogin} className={classes.form}>
          <Grid container direction="column" spacing={5}>
            {signUp ? (
              <>
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
              </>
            ) : (
              <>
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
              </>
            )
            }
          </Grid>
        </form>
      </Box>
    </Grid>
  );
}

export default ComboForm;