import React, { Component } from "react";
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { useState } from "react";
import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default function Register() {
  // constructor(props) {
  //   super(props);
  //   this.handleRegister = this.handleRegister.bind(this);
  //   this.onChangeUsername = this.onChangeUsername.bind(this);
  //   this.onChangeEmail = this.onChangeEmail.bind(this);
  //   this.onChangePassword = this.onChangePassword.bind(this);

  //   this.state = {
  //     username: "",
  //     email: "",
  //     password: "",
  //     successful: false,
  //     message: ""
  //   };
  // }

  // onChangeUsername(e) {
  //   this.setState({
  //     username: e.target.value
  //   });
  // }

  // onChangeEmail(e) {
  //   this.setState({
  //     email: e.target.value
  //   });
  // }

  // onChangePassword(e) {
  //   this.setState({
  //     password: e.target.value
  //   });
  // }

  const [stateRegister, setStateRegister] = useState({
    username: "",
    email: "",
    password: "",
    successful: false,
    message: ""
  });

  const handleRegister = (e) => {
    e.preventDefault();


    setStateRegister({
      ...stateRegister,
      message: "",
      successful: false
    });

    console.log("success");

    // this.form.validateAll();

    // if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        stateRegister.username,
        stateRegister.email,
        stateRegister.password
      ).then(
        response => {
          setStateRegister({
            ...stateRegister,
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setStateRegister({
            ...stateRegister,
            successful: false,
            message: resMessage
          });
        }
      );
    // }
  }

  return (
    <div className="container" style={{height: '810px'}}>
      <div className="row pt-5">
        <div class="col-4"></div>
        <div class="col-4">

        <img class="img-fluid"
              src="https://images.squarespace-cdn.com/content/v1/5c5382928dfc8cdc537fe0e5/d7179f08-6197-43eb-b920-bdfe7c23676e/Logo+5.png?format=1500w"
              style={{ maxWidth: '80% !important', height: 'auto !important' }}/>

        <form
          onSubmit={(e)=> handleRegister(e)}
          // ref={c => {
          //   this.form = c;
          // }}
        >
          {!stateRegister.successful && (
            <div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={stateRegister.username}
                  onChange={(e) => setStateRegister({
                    ...stateRegister,
                    username: e.target.value,
                  })}
                  validations={[required, vusername]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={stateRegister.email}
                  onChange={(e) => setStateRegister({
                    ...stateRegister,
                    email: e.target.value,
                  })}
                  validations={[required, email]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={stateRegister.password}
                  onChange={(e) => setStateRegister({
                    ...stateRegister,
                    password: e.target.value,
                  })}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="form-group" >
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {stateRegister.message && (
            <div className="form-group">
              <div
                className={
                  stateRegister.successful
                    ? "alert alert-success"
                    : "alert alert-danger"
                }
                role="alert"
              >
                {stateRegister.message}
              </div>
            </div>
          )}
          {/* <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            /> */}
        </form>
      </div>
        <div class="col-4"></div>
      </div>
    </div>
  );
}
