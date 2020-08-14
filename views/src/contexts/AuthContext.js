import React, { useContext, useState, useEffect } from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
require("dotenv").config();

const AuthContext = React.createContext(-1);
const useUserData = () => useContext(AuthContext);

const JobProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    token: "",
    email: "",
  });

  return (
    <Auth0Provider
      domain="p2-job-application-tracker.us.auth0.com"
      clientId="Gy2tvKDxtFnTptMlGtWU8goaImD8cPp6"
      redirectUri={window.location.origin}
      audience="https://jobtracker/"
    >
      <AuthContext.Provider
        value={{
          userData,
          setUserData,
        }}
      >
        {children}
      </AuthContext.Provider>
    </Auth0Provider>
  );
};

export { JobProvider, useUserData };
