import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

// Styling
import { GlobalStyle } from "./styled/Global";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import notFound from "./pages/notFound";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Resume from "./pages/Resume";

//Utilities
import UserStore from "./store/UserStore";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/resume" component={Resume} />

          <Route path="*" component={notFound} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
