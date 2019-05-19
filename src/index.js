import React from 'react';
import ReactDOM from 'react-dom';
import {register} from './serviceWorker';
import './index.css';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import AppRouter from './router/router'
// injectTapEventPlugin();

ReactDOM.render(<AppRouter />, document.getElementById('root'));
register({});
