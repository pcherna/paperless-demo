import React from 'react';
import { render } from 'react-dom';
import './stylesheets/index.css';
import { App } from './components/App';
import { HashRouter } from 'react-router-dom'
//import registerServiceWorker from './registerServiceWorker';
window.React = React
//<Route path="/" component={App} />

render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
)

//registerServiceWorker();
