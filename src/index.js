import React from 'react';
import { render } from 'react-dom';
import './stylesheets/css/index.css';
import { App } from './components/App';
import { HashRouter } from 'react-router-dom'
//import registerServiceWorker from './registerServiceWorker';
window.React = React

render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
)

//registerServiceWorker();
