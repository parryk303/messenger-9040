import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import LandingPage from "./LandingPage";
import ComboNav from "./ComboNav";
import ComboForm from "./ComboForm";

const Signup = (props) => {
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
        <ComboNav
          history={history}
          path={"login"}
          text={"Already have an account?"}
          button={"Login"}/>
        <ComboForm
          signUp={true}
          formErrorMessage={formErrorMessage}
          handleLogin={handleRegister}
          signupHeader={"Create an account."}/>
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

  export default connect(mapStateToProps, mapDispatchToProps)(Signup);
