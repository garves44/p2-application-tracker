import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";

// Styling
import { GlobalStyle } from "./styled/Global";

import Header from "./components/Header";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import notFound from "./pages/notFound";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="*" component={notFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
 
export default App;
