// Header of Paperless-app

import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/css/ui.css";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import ErrorIcon from "@material-ui/icons/Error";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";

const Header = () => (
    <header>
        <nav className="single-nav menu">
            <BottomNavigation showLabels>
                <BottomNavigationAction
                    component={Link}
                    to="/"
                    label="Home"
                    icon={<HomeIcon />}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/foo"
                    label="Todo"
                    icon={<HourglassEmptyIcon />}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/bad"
                    label="Bad"
                    icon={<ErrorIcon />}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/settings"
                    label="Settings"
                    icon={<SettingsIcon />}
                />
            </BottomNavigation>
        </nav>
    </header>
);

export default Header;
