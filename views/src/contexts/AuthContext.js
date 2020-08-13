import React, { useContext, useState, useEffect } from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";
require("dotenv").config();

const AuthContext = React.createContext(-1);
const useAnything = () => useContext(AuthContext);
const useUserData = () => useContext(AuthContext);

const JobProvider = ({ children }) => {
  const [anything, setAnything] = useState({ non: "sense" });
  const [userData, setUserData] = useState({ token: "", email: "" });

  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();

  useEffect(() => {
    const getToken = async () => {
      console.log("THIS IS USER", user);
      try {
        const newToken = await getAccessTokenSilently();
        await setUserData((prevState) => ({
          ...prevState,
          token: newToken,
          email: user.email,
        }));
        await API.login(userData);
      } catch (err) {
        console.error(err);
      }
    };
    if (isAuthenticated) {
      getToken();
    }
  }, [getAccessTokenSilently, isAuthenticated, userData]);

  return (
    <Auth0Provider
      domain="p2-job-application-tracker.us.auth0.com"
      clientId="Gy2tvKDxtFnTptMlGtWU8goaImD8cPp6"
      redirectUri={window.location.origin}
      audience="https://jobtracker/"
    >
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </Auth0Provider>
  );
};

export { JobProvider, useAnything, useUserData };
