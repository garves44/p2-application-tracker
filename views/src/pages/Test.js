import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserData } from "../contexts/AuthContext";
import { createTestAccount } from "nodemailer";

const Test = ({ history }) => {
  const [userData, setUserData] = useUserData();
  const [testData, setTestData] = useState({});

  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  // useEffect(() => {
  //   const getTestRoute = async () => {
  //     try {
  //       const token = await getAccessTokenSilently();
  //       const options = {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       };

  //       const res = await fetch("/api/test", options);
  //       const data = await res.json();

  //       setTestData(data);
  //       setAnything({ token: token });
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   if (isAuthenticated) {
  //     getTestRoute();
  //   }
  // }, [getAccessTokenSilently, isAuthenticated, anything]);

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
