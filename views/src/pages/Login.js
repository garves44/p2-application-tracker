import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { StyledFormInput } from "../styled/Forms";

import Utils from "../utils/";
import API from "../utils/API";

const Login = ({ history }) => {
  const [loginForm, setLoginForm] = useState({
    username: null,
    password: "",
    validate_form: false,
  });

  const [debugData, setDebugData] = useState({});

  // ===============[ handleLoginSubmit Form ]===========================
  const handleLoginSubmit = async ({ username, password }) => {
    let userData = { username, password };

    let response = await API.login(userData);
    let { status, statusText, responseText, data } = response;

    console.log("status", status);
    console.log("statusText", statusText);
    console.log("responseText", responseText);
    console.log("data", data);
    setDebugData(data);
  };

  // ===============[ Validate Form ]===========================
  const validateForm = () => {
    let isValid = false;
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        loginForm.username,
      ) === false
    ) {
      Utils.AlertMessage(
        "You have entered an invalid email address!",
        "danger",
      );
    } else if (loginForm.password.length < 6) {
      Utils.AlertMessage("Missing password", "info");
    } else {
      Utils.AlertMessage("Looks Good!", "success");
      isValid = true;
    }

    setLoginForm((prevState) => ({ ...prevState, validate_form: isValid }));
  };

  return (
    <article className="content-wrapper container" id="main-container">
      <div className="section-block small-block row" id="main-section">
        <div className="col-12 mx-auto">
          <div className="card">
            <div className="card-header">
              <h2>Login</h2>
            </div>
            <div className="card-body">
              <form id="loginForm">
                <div className="form-group row">
                  <div className="col-sm-12 input-group">
                    <StyledFormInput
                      className="form-input"
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Username"
                      value={loginForm.username}
                      onChange={(event) => {
                        const { name, value } = event.target;
                        setLoginForm((prevState) => ({
                          ...prevState,
                          [name]: value,
                        }));
                      }}
                      onKeyUp={() => validateForm()}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12 input-group">
                    <StyledFormInput
                      className="form-input"
                      name="password"
                      type="password"
                      placeholder="password"
                      value={loginForm.password}
                      onChange={(event) => {
                        const { name, value } = event.target;
                        setLoginForm((prevState) => ({
                          ...prevState,
                          [name]: value,
                        }));
                      }}
                      onKeyUp={() => validateForm()}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <span className="col-sm-12 input-group-btn text-right">
                    <button
                      className="btn btn-dark form-input"
                      onClick={(e) => {
                        e.preventDefault();
                        if (loginForm.validate_form) {
                          handleLoginSubmit(loginForm);
                        }
                      }}
                      type="submit"
                    >
                      <FontAwesomeIcon icon={faUser} /> Login
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div id="debug">
        <label>LoginForm State</label>
        <pre>{JSON.stringify(loginForm, null, 2)}</pre>

        <label>DebugData State</label>
        <pre>{JSON.stringify(debugData, null, 2)}</pre>
      </div>
    </article>
  );
};

export default Login;
