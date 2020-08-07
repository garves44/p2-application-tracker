import React from "react";
import { observer } from "mobx-react";
import UserStore from "../store/UserStore";
import LoginForm from "../components/LoginForm";
import SubmitButton from "../components/SubmitButton";

class Login extends React.Component {
  //Logging IN Function
  async componentDidMount() {
    try {
      let res = await fetch("/isLoggedIn", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      let result = await res.json();

      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      } else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    } catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  //Logging OUT function
  async doLogout() {
    try {
      let res = await fetch("/logout", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      let result = await res.json();

      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = "";
      }
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    if (UserStore.loading) {
      return (
        <div className="login">
          <div className="container">Loading please wait...</div>
        </div>
      );
    } else {
      if (UserStore.isLoggedIn) {
        return (
          <div className="login">
            <div className="container">
              Welcome {UserStore.username}
              <SubmitButton
                text={"Logout"}
                disabled={false}
                onClick={() => this.doLogout()}
              />
            </div>
          </div>
        );
      }
    }
    return (
      <div className="login">
        <div className="container">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default observer(Login);
