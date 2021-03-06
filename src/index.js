import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
// import Event from './Pages/event';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <BrowserRouter>
  //   <Switch>
  //     <Route exact path="/" component={Event} />
  //     <Route path="/event" component={Event} />
  //   </Switch>
  // </BrowserRouter>,
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
