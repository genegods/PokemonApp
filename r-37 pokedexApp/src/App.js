import React from "react";
import "./App.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokeDetails from "./components/pages/PokeDetails";
import Home from "./components/pages/Home";
import PokeApp from "./components/pages/PokeApp";
// import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/poke" component={PokeApp} />
            <Route path="/details/:url" component={PokeDetails} />
          </Switch>
        </Router>
      </Provider>
    </React.Fragment>
  );
};

export default App;
