// Header of Paperless-app

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/foo'>Test Unimplemented Link</Link></li>
                <li><Link to='/bad'>Test Bad Link</Link></li>
                <li><Link to='/settings'>Settings</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;
