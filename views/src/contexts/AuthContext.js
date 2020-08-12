import React, { useContext, useState } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
require("dotenv").config();

const AuthContext = React.createContext(-1);
const useAnything = () => useContext(AuthContext);

const JobProvider = ({ children }) => {
  const [anything, SetAnything] = useState({ non: "sense" });

  return (
    <Auth0Provider
      domain="p2-job-application-tracker.us.auth0.com"
      clientId="Gy2tvKDxtFnTptMlGtWU8goaImD8cPp6"
      redirectUri={window.location.origin}
      audience="https://jobtracker/"
    >
      <AuthContext.Provider value={[anything, SetAnything]}>
        {children}
      </AuthContext.Provider>
    </Auth0Provider>
  );
};

export { JobProvider, useAnything };
