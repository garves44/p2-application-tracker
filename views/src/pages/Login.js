import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <div className="form-group row">
          <label className="col-sm-4 form-label" htmlFor="username">
            Email:
          </label>
          <div className="col-sm-8 input-group">
            {/* <input
              className="form-input"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              // // value={loginForm.username}
              // // onChange={(event) => {
              // //   const { name, value } = event.target;
              // //   setLoginForm((prevState) => ({
              // //     ...prevState,
              //     [name]: value,
              //   }));
              // }}
              onKeyUp={() => validateForm()}
            /> */}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 form-label" htmlFor="password">
            Password:{" "}
          </label>
          <div className="col-sm-8 input-group">
            {/* <input
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
            /> */}
          </div>
        </div>
        <div className="form-group row">
          <span className="col-sm-12 input-group-btn text-right">
            {/* <button
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
            </button> */}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
