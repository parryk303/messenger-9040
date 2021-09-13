import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import LandingPage from "./LandingPage";
import ComboNav from "./ComboNav";
import ComboForm from "./ComboForm";

const Login = (props) => {
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
        <ComboNav
          history={history}
          path={"register"}
          text={"Don't have an account?"}
          button={"Create account"} />
        <ComboForm
          signUp={false}
          handleLogin={handleLogin}
          loginHeader={"Welcome Back!"} />
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
