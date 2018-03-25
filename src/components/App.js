import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import '../styles/App.css';

import Header from './Header/Header';
import Home from './Home';
import About from './About';
import News from './News';
import Portfolio from './Portfolio';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    const {location} = this.props;
    return (<div className="App">
      <Header location={location} />
      <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/About" exact component={About}/>
          <Route path="/News" exact component={News}/>
          <Route path="/Portfolio" exact component={Portfolio}/>
          <Route path="/Team" exact component={Team}/>
          <Route path="/Contact" exact component={Contact}/>
        </Switch>
      </div>
      <Footer />
    </div>);
  }
}

export default withRouter(App);
