import React from 'react';
import { HashRouter , Route, Switch } from "react-router-dom";
import Dashboard from './components/dashboard/dashboard';

import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </HashRouter >
    );
  }
}
