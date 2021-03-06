import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Link,NavLink} from "react-router-dom";
import {AnimatedSwitch} from 'react-router-transition';
import Experiments from './Experiments';
import About from './About';

export default class App extends React.Component {
  render() {
    return (<Router>
      <div>
        <nav>
          <NavLink exact to="/">Experiments</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <AnimatedSwitch atEnter={{
            opacity: 0
          }} atLeave={{
            opacity: 0
          }} atActive={{
            opacity: 1
          }} className="switch-wrapper">
          <Route exact path="/" render={(props) => <Experiments experiments={this.props.experiments}/>}/>
          <Route path="/about" component={About}/>
        </AnimatedSwitch>
      </div>
    </Router>)
  }
}
