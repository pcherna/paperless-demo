// Main is the router for Paperless-app
// TODO: Need to hit refresh when changing lists

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import { Settings } from "./Settings";
import { Checklist } from "./Checklist";
import { Whoops404 } from "./Whoops404";
import Dummy from "./Dummy";
import "../stylesheets/css/ui.css";

const Main = props => (
    <main className="main">
        <Switch>
            <Route exact path="/" render={renderProps => <Home {...props} />} />
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
