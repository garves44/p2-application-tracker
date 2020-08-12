import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useAnything } from "../contexts/AuthContext";
import { createTestAccount } from "nodemailer";

const Test = ({ history }) => {
  const [anything, SetAnything] = useAnything();
  const [testData, setTestData] = useState({});

  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  useEffect(() => {
    const getTestRoute = async () => {
      try {
        const token = await getAccessTokenSilently();
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await fetch("/api/test", options);
        const data = await res.json();

        setTestData(data);
        SetAnything({ token: token });
      } catch (err) {
        console.error(err);
      }
    };

    if (isAuthenticated) {
      getTestRoute();
    }
  }, [getAccessTokenSilently, isAuthenticated, anything]);

  return (
    <div>
      {!isAuthenticated && <h2>You should log in!</h2>}

      <div id="debug">
        <label>anything State</label>
        <pre>{JSON.stringify(anything, null, 2)}</pre>

        <label>testData State</label>
        <pre>{JSON.stringify(testData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Test;
