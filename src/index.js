import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './views/App';
import * as serviceWorker from './serviceWorker';


// import 'react-perfect-scrollbar/dist/css/styles.css';
// import PerfectScrollbar from 'react-perfect-scrollbar'


import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "../src/assets/css/nucleo-icons.css";
import "../src/assets/scss/blk-design-system-react.scss?v=1.2.0";
import "../src/assets/demo/demo.css";
// import "/node_modules/perfect-scrollbar/css/perfect-scrollbar.css";

import MainPage from "../src/views/MainPage"
import ResultsPage from "../src/views/ResultsPage"
import TestPage from "../src/test/test"


ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route
                    path='/results'
                    render={(props) => (
                        <ResultsPage {...props} isAuthed={true} />
                    )}
                />
                <Route
                    path='/test'
                    render={(props) => (
                        <TestPage {...props} isAuthed={true} />
                    )}
                />
                <Route
                    path='/'
                    render={(props) => (
                        <MainPage {...props} isAuthed={true} />
                    )}
                />
            </Switch>
        </BrowserRouter>,

  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
