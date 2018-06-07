import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import config from './config';

ReactDOM.render(<App />, document.getElementById('root'));

if (config.dev) {
    // Don`t enable service working to avoid caching
    // https://goo.gl/KwvDNy
} else 
if (config.production) {
    registerServiceWorker();
}

