// Imports
import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Store from "./Store/Store";
import { Provider } from "react-redux"
import * as serviceWorker from './serviceWorker';

// Rendering App With Redux Store
ReactDOM.render(
                <Provider store = {Store}>   
                    <App />
                </Provider>, 
                document.getElementById('root')
                );

serviceWorker.unregister();
