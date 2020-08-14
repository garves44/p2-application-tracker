import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// Styling
import { GlobalStyle } from "./styled/Global";
import Loader from "./styled/Loader";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import notFound from "./pages/notFound";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Test from "./pages/Test";
import Resume from "./pages/Resume";
import Jobs from "./pages/Jobs";

//Utilities
import UserStore from "./store/UserStore";

function App() {
  const { loading } = useAuth0();

  return (
    <Router baseName={window.location.pathname || ""}>
      <GlobalStyle />
      {loading ? (
        <Loader>
          <p>Loading...</p>
        </Loader>
      ) : (
        <>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/jobs" component={Jobs} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/test" component={Test} />
              <Route exact path="/resume" component={Resume} />

              <Route path="*" component={notFound} />
            </Switch>
          </div>

          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
