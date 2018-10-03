// Main is the router for Paperless-app

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import { Auth } from "./Auth";
import { Settings } from "./Settings";
import { Checklist } from "./Checklist";
import { Whoops404 } from "./Whoops404";
import Dummy from "./Dummy";
import "../stylesheets/css/ui.css";

// TODO: The Auth route is a bit hacky in that we sniff access_token= to
// identify it, so it's then not part of 'authArgs'
const Main = props => (
    <main className="main">
        <Switch>
            <Route exact path="/" render={renderProps => <Home {...props} />} />
            <Route
                exact
                path="/access_token=:authArgs"
                render={renderProps => <Auth {...renderProps} {...props} />}
            />
            <Route
                exact
                path="/error_description=:errorArgs"
                render={renderProps => <Auth {...renderProps} {...props} />}
            />
            <Route
                exact
                path="/settings"
                render={renderProps => <Settings {...props} />}
            />
            <Route path="/foo" component={Dummy} />
            <Route
                path="/list/:listIdentifier"
                render={renderProps => (
                    <Checklist {...renderProps} {...props} />
                )}
            />
            <Route path="*" component={Whoops404} />
        </Switch>
    </main>
);

export default Main;
