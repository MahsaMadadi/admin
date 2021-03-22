import React, { Fragment, useContext, useEffect } from 'react';
import './App.css';
import Payments from './components/Payment/Payments';
import Users from './components/Users/Users';
import Gateways from './components/Gateway/Gateways';
import Domain from './components/Domain/Domains';
import logo from "./img/logo.png";
import PaymentContext from './context/Context';
import Statics from './components/Statics/Statics';
import Errors from './components/Errors/Errors';
import Grid from '@material-ui/core/Grid';
import GroupIcon from '@material-ui/icons/Group';
import PaymentIcon from '@material-ui/icons/Payment';
import BusinessIcon from '@material-ui/icons/Business';
import DnsIcon from '@material-ui/icons/Dns';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ErrorIcon from '@material-ui/icons/Error';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AppsIcon from '@material-ui/icons/Apps';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Login from './components/Login/Login';

const App = () => {
  const context = useContext(PaymentContext);
  return (
    <Fragment>
 {context.getCookie("isAdmin") ? (<div>
  <Router>

<div>
  <div className="d-flex flex-row  bg-dark col-12 p-2">
    <div className="col-10"><img src={logo}></img></div>
    <div  className="col-2 text-right"><span  className="text-light" onClick={()=>{
      context.setMenu(!context.getMenu);
    }}><AppsIcon className="Home-icon" /></span></div>
  </div>
  <div className="d-flex flex-row col-12 p-0">

    <div className={!context.getMenu ?("col-12") : ("col-9")}>
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
        <Route exact path="/Domain">
          <Domain />
        </Route>
        {/* <Route exact path="/Notification">
          <Notification />
        </Route> */}
        <Route exact path="/Statics">
          <Statics />
        </Route>
        <Route exact path="/Errors">
          <Errors />
        </Route>
        <Route path="/">
          <Payments />
        </Route>
      </Switch>
    </div>
    {context.getMenu ? (            <Grid
      container
      direction="column"
      justify="start"
      alignItems="flex-start"
      className="d-flex col-3 mt-3">
        <Link className="text-light  text-right mb-1  cursive" to="/Users"><GroupIcon className="Home-icon"/>Users</Link>
      <Link className="text-light text-right mb-1  cursive" to="/Payments"><PaymentIcon className="Home-icon" />Payments</Link>
      <Link className="text-light text-right mb-1  cursive" to="/Gateways"><BusinessIcon className="Home-icon" />Gateways</Link>
      <Link className="text-light text-right mb-1 cursive" to="/Domain"><DnsIcon className="Home-icon" />Domains</Link>
      <Link className="text-light text-right mb-1 cursive" to="/Statics"><MonetizationOnIcon className="Home-icon" />Statics</Link>
      <Link className="text-light text-right mb-1 cursive" to="/Errors"><ErrorIcon className="Home-icon" />Errors</Link>
      <Link className="text-danger text-right mb-1 cursive" onClick={context.handeLogOut}><ExitToAppIcon className="Home-icon" />Log Out</Link>
    
</Grid>): null}

  </div>
</div>
</Router>
 </div>) : (<Login />) }
   
    </Fragment>

  );
}

export default App;
