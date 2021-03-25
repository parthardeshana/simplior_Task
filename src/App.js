import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomePage from './components/pages/HomePage';
import FirstPage from './components/pages/FirstPage';
import { Route, Switch } from 'react-router-dom';
import Log_in from './components/pages/Log_in';
import Sign_up from './components/pages/Sign_up';

class App extends Component {

  render() {
    return (
      <div>
        <Switch >
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={Log_in} />
          <Route path='/signup' component={Sign_up} />
          <Route path='/firstpage' component={FirstPage} />
        </Switch>
      </div>
    )
  }
}

export default App
