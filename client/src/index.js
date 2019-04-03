import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Store from "./Store/Store";
import { Provider } from "react-redux"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
                <Provider>   
                    <App />
                </Provider>, 
                document.getElementById('root')
                );

serviceWorker.unregister();
