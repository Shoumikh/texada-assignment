import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cars from "./Cars/Cars";
import Footer from "./Footer/Footer";
import HeaderOne from "./HeaderOne/HeaderOne";
import HeaderTwo from "./HeaderTwo/HeaderTwo";
import Home from "./Home/Home";
import SignIn from "./SignIn/SignIn";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/rentcar">
            <HeaderOne />
            <HeaderTwo />
            <Cars />
            <Footer />
          </Route>
          <Route path="/signin">
            <HeaderOne />
            <HeaderTwo />
            <SignIn />
          </Route>
          <Route path="/">
            <HeaderOne />
            <HeaderTwo />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
