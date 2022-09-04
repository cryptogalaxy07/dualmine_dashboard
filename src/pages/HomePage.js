import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";
import Investment from "./dashboard/Investments";
import OrderOverview from "./dashboard/OrderOverview";
import Profile from "./dashboard/Profile";
import Transactions from "./Transactions";
import Settings from "./Settings";
import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";
import WarningModal from '../components/Modal'

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import { Modal } from 'bootstrap';
import ErrorPage from './ErrorPage';

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.Presentation.path} component={Presentation} />
    <RouteWithLoader path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader path={Routes.ServerError.path} component={ServerError} />    

    {/* pages */}
    <RouteWithSidebar path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar path={Routes.Investment.path} component={Investment} />
    <RouteWithSidebar path={Routes.OrderOverview.path} component={OrderOverview} />
    <RouteWithSidebar path={Routes.Profile.path} component={Profile} />
    <RouteWithSidebar path={Routes.Upgrade.path} component={Upgrade} />
    <RouteWithSidebar path={Routes.Transactions.path} component={Transactions} />
    <RouteWithSidebar path={Routes.Settings.path} component={Settings} />
    <RouteWithSidebar path={Routes.BootstrapTables.path} component={BootstrapTables} />   
    <RouteWithSidebar path={Routes.Error.path} component={ErrorPage} />   
    <Redirect to={Routes.Error.path} />
  </Switch>
);
