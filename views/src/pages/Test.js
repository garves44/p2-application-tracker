import React, { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import AuthContext from "../contexts/AuthContext";
import { useUserData } from "../contexts/AuthContext";
import { createTestAccount } from "nodemailer";

const Test = ({ history }) => {
  const { userData, setUserData } = useUserData();
  // const { userData, setUserData } = useContext(AuthContext);

  const [testData, setTestData] = useState({});

  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  
  return (
    <div>
      {!isAuthenticated && <h2>You should log in!</h2>}

      <div id="debug">
        <label>User Status State</label>
        <pre>{JSON.stringify(userData, null, 2)}</pre>

        <label>testData State</label>
        <pre>{JSON.stringify(testData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Test;
