import React, { Component, Frangment } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import Membership from './components/Pages/Membership/Membership';
import Library from './components/Pages/Library/Library';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import Internship from './components/Pages/TheProgram/Internship/Internship';
import Mentoring from './components/Pages/TheProgram/Mentoring/Mentoring';
import Training from './components/Pages/TheProgram/Training/Training';
import Networking from './components/Pages/TheProgram/Networking/Networking';
import SkillUp from './components/Pages/AboutUs/SkillUp/SkillUp';
import Vsg from './components/Pages/AboutUs/VSG/VSG';
import Acbc from './components/Pages/AboutUs/ACBC/ACBC';
import Geg from './components/Pages/AboutUs/GEG/GEG';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/membership" component={Membership} />
            <Route exact path="/library" component={Library} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/internship" component={Internship} />
            <Route exact path="/mentoring" component={Mentoring} />
            <Route exact path="/training" component={Training} />
            <Route exact path="/networking" component={Networking} />
            <Route exact path="/skillup" component={SkillUp} />
            <Route exact path="/vsg" component={Vsg} />
            <Route exact path="/geg" component={Geg} />
            <Route exact path="/acbc" component={Acbc} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
