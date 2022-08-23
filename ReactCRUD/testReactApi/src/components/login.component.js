import React from "react";
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';
import {useState } from "react";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

function Login() {
  const [stateLogin, setStateLogin] = useState({
    username: "",
    password: "",
    loading: false,
    message: ""
  });

  let navigate = useNavigate();

  // const onChangeUsername = (e) => {
  //   setStateLogin({
  //     ...stateLogin,
  //     username: e.target.value,
  //   });
  // }

  // console.log(stateLogin.username);

  // const onChangePassword = (e) => {
  //   setStateLogin({
  //     ...stateLogin,
  //     password: e.target.value,
  //   });
  // }

  const handleLogin = (e) => {
    e.preventDefault();

    setStateLogin({
      ...stateLogin,
      message: "",
      loading: true
    });

    // this.form.validateAll();

    // if (this.checkBtn.context._errors.length === 0) {
    AuthService.login(stateLogin.username, stateLogin.password).then(
      () => {
        console.log("success");
        navigate(`/home`);
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setStateLogin({
          ...stateLogin,
          message: resMessage,
          loading: false
        });
      }
    );
    // } else {
    //   setStateLogin({
    //     ...stateLogin,
    //     loading: false
    //   });
    // }
  }

  return (
    <div className="container" style={{height: '810px'}}>
      <div className="row pt-5">
        <div class="col-4"></div>
        <div class="col-4">
          <div class="mb-3 text-center">
            <img class="img-fluid"
              src="https://images.squarespace-cdn.com/content/v1/5c5382928dfc8cdc537fe0e5/d7179f08-6197-43eb-b920-bdfe7c23676e/Logo+5.png?format=1500w"
              style={{ maxWidth: '80% !important', height: 'auto !important' }}/>
          </div>

          <form
            onSubmit={(e) => handleLogin(e)}
          // ref={c => {
          //   this.form = c;
          // }}
          >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={stateLogin.username}
                onChange={(e) => setStateLogin({
                  ...stateLogin,
                  username: e.target.value,
                })}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={stateLogin.password}
                onChange={(e) => setStateLogin({
                  ...stateLogin,
                  password: e.target.value,
                })}
                validations={[required]}
              />
            </div>

            <div className="form-group pt-3" style={{textAlign: 'center'}}>
              <button
                className="btn btn-primary btn-block"
                disabled={stateLogin.loading}
                style = {{padding: "5px 30px"}}
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

export default Login;
