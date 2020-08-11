import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --main-bg-color: #b3cde0
}

body {
    background-color: var(--main-bg-color)
}

body, html, #root, .app, {
    width: 100%;
    height: 100%;
  }
  
  .container {
    font-size: 28px;
    color: #011f4b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #005b96;
    height: 80vh;
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

  .main-footer{
    margin-top: auto;
    background-color: #6497b1
  }
  .main-header {
    background-color: #6497b1
  }
`;
