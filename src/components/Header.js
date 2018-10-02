// Header of Paperless-app

import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/css/ui.css";

const Header = () => (
    <header>
        <nav className="single-nav menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/foo">Todo</Link>
                </li>
                <li>
                    <Link to="/bad">Bad</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
