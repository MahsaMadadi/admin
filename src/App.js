import React, {Fragment,useContext,useEffect } from 'react';
import './App.css';
import Payments from './components/Payments';
import Loading from 'react-loading-spinkit';
import PaymentContext from './context/Context';
import Urls from './components/Urls';
import Statics from './components/Statics';
import Gateways from "./components/Gateways";
import GErrors from './components/GErrors';
import Users from "./components/Users";
import Notification from './components/Notification';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const App = () => {
  return (
    <Fragment>
        <Router>
      <div>
        <ul>
          <li>
            <a href="/Payments">Pay</a>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/Payments">
          <Payments />
          </Route>
          <Route exact path="/Users">
          <Users />
          </Route>
          <Route exact path="/Gateways">
          <Gateways />
          </Route>
          <Route exact path="/Urls">
          <Urls />
          </Route>
          <Route exact path="/Notification">
          <Notification />
          </Route>
          <Route exact path="/Statics">
          <Statics />
          </Route>
          <Route exact path="/Errors">
          <GErrors />
          </Route>
          <Route path="/">
          <Payments />
          </Route>
        </Switch>
      </div>
    </Router>
    </Fragment>

  );
}

export default App;
