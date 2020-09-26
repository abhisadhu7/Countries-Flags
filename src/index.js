import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./Context/MainContext";
import { Provider as DetailProvider } from "./Context/DetailsContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import App from "./Pages/MainPage";
import Details from "./Pages/Details";
import Navbar from "./components/Navbar";
ReactDOM.render(
  <Provider>
    <DetailProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route path="/details" component={Details}></Route>
          <Route exact path="/details">
            <Redirect to="/details" />
          </Route>
        </Switch>
      </Router>
    </DetailProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
