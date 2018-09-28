// Header of Paperless-app

import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/css/ui.css';

const Header = () => (
    <header>
        <nav className="menu">
            <ul>
                <li class="menulink"><Link class="link" to='/'>Home</Link></li>
                <li class="menulink"><Link class="link" to='/foo'>Todo</Link></li>
                <li class="menulink"><Link class="link" to='/bad'>Bad</Link></li>
                <li class="menulink"><Link class="link" to='/settings'>Settings</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;
