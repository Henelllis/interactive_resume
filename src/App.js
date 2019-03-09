import React, { Component } from 'react';
// import SVGIcon from "./SVGIcon";
import logo from './logo.svg';
import './App.css';
import FrontPage from './js/FrontPage';
import ProfilePage from './js/ProfilePage';

import { withRouter, Switch, Route } from 'react-router-dom'
// import Icon from "./icon";


class App extends Component {
  render() {
    return (
      <div className="resume--app">
        <Switch>
          <Route path="/Profile" component={ProfilePage}/>
          <Route path="/" component={FrontPage}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
