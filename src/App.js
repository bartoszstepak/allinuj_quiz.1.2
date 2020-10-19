import React from 'react';
import { HashRouter , Route, Switch } from "react-router-dom";
import Dashboard from './components/dashboard/dashboard';
import Quiz from './components/quiz/quiz';
import Impreza from './components/results/impreza';
import Sport from './components/results/sport';
import Nauka from './components/results/nauka';
import Kultura from './components/results/kultura';

import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/result/impreza" component={Impreza} />
          <Route exact path="/result/sport" component={Sport} />
          <Route exact path="/result/nauka" component={Nauka} />
          <Route exact path="/result/kultura" component={Kultura} />
        </Switch>
      </HashRouter >
    );
  }
}
