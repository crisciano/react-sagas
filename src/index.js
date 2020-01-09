import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// import Menu from './componets/Menu/Menu'

// import  {
//     BrowserRouter as Router, 
//     Switch, 
//     Route,
//     // Link
// } from 'react-router-dom'

// import routes from './routes'

import { store } from './redux/store'
// redux
import { Provider } from 'react-redux'

import App from './app'

ReactDOM.render(
    <Provider store={store}>
        <App />
        {/* <Router >
            <Menu />
            <Switch>
                <Router path="/:page" />
                { routes.map( (route , key) => ( <Route path={route.path} component={ route.component } exact={route.exact} key={key}  /> )) } 
            </Switch>
        </Router> */}
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
