import React from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import { Navigate } from 'react-router-dom';

import { useEffect, useState } from "react";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default function Login(){
  // constructor(props) {
  //   super(props);
  //   this.handleLogin = this.handleLogin.bind(this);
  //   this.onChangeUsername = this.onChangeUsername.bind(this);
  //   this.onChangePassword = this.onChangePassword.bind(this);

  //   this.state = {
  //     username: "",
  //     password: "",
  //     loading: false,
  //     message: ""
  //   };
  // }

  const [stateLogin, setStateLogin] = useState({
      username: "",
      password: "",
      loading: false,
      message: ""
  });

  const onChangeUsername = (e) => {
      setStateLogin({
        ...stateLogin,
        username:e.target.value,
      });
  }

  const onChangePassword = (e) => {
    setStateLogin({
      ...stateLogin,
      password:e.target.value,
    });
  }

  const handleLogin = (e) => {
    e.preventDefault();

    setStateLogin({
      ...stateLogin,
      message:"",
      loading: true
    });

    // this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(stateLogin.username, stateLogin.password).then(
        () => {
          <Navigate to="/profile" />
          window.location.reload();
        },
        // error => {
        //   const resMessage =
        //     (error.response &&
        //       error.response.data &&
        //       error.response.data.message) ||
        //     error.message ||
        //     error.toString();

        //     setStateLogin({
        //       ...stateLogin,
        //       message:resMessage,
        //       loading: false
        //     });
        // }
      );
    } else {
      setStateLogin({
        ...stateLogin,
        loading: false
      });
    }
  }

    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={(e) => handleLogin(e)}
            // ref={c => {
            //   this.form = c;
            // }}
          >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={stateLogin.username}
                onChange={() => onChangeUsername(stateLogin.username)}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={stateLogin.password}
                onChange={() => onChangePassword(stateLogin.password)}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={stateLogin.loading}
              >
                {stateLogin.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {stateLogin.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {stateLogin.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              // ref={c => {
              //   this.checkBtn = c;
              // }}
            />
          </Form>
        </div>
      </div>
    );
}
