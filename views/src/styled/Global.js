import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --main-bg-color: #f9f9f9
}

body {
    background-color: var(--main-bg-color)
}

body, html, #root, .app, .container {
    width: 100%;
    height: 100%;
  }
  
  
  .container {
    font-size: 28px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #282c34;
  }
  
  .loginForm {
   box-sizing: border-box;
   width: 100%;
   max-width: 400px;
   padding-left: 20px;
   padding-right: 20px;
  }
  
  .inputField {
   padding-top: 16px;
  }
  
  .input {
   box-sizing: border-box;
   outline: none;
   border: solid 2px #1189de;
   border-radius: 4px;
   color: #292929;
   width: 100%;
   padding: 12px;
   font-size: 14px;
   background: rgba(255, 255, 255, 1);
  }
  
  .submitButton {
   padding-top: 16px;
  }
  
  
  .btn {
   width: 100%;
   min-width: 280px;
   color: #565656;
   padding: 12px;
   font-size: 14px;
   font-weight: bold;
   border: solid 2px #1189de;
   border-radius: 4px;
   background: #fff;
   cursor: pointer;
  }
`;
