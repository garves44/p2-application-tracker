import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --main-bg-color: #b3cde0;
  --primary-menu-text: #000;
  --main-text-color: #fff; 
}

body {
  background-color: var(--main-bg-color)
}

body, html, #root, .app, {
  width: 100%;
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--primary-menu-text);
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

.section-block {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: flex-start;
  margin: 0 auto;
  max-width: 1080px;
  min-height: calc(50vh - 79px);
  text-align: center;
}

.small-block {
  max-width: 400px;
} 

#loginForm {
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
