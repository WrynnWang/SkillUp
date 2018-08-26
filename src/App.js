import React, { Component, Frangment } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

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
import Auth from './containers/Auth/Auth';
import ProfilePage from './containers/ProfilePage/profilePage';
import Logout from './containers/Auth/Logout/Logout';

import * as actions from './store/actions/index';

class App extends Component {

  componentDidMount(){
    this.props.onTryAutoSignUp();
  }

  render() {

    let routes = (
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
            <Route exact path="/login" component={Auth}/>
            <Redirect to="/"/>
        </Switch>
    );

    if(this.props.isAuthenticated){
        routes = (
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
              <Route exact path="/profile" component={ProfilePage} />
              <Route exact path="/logout" component={Logout}/>
              <Redirect to="/"/>
            </Switch>
        );
    }

    return (
      <BrowserRouter>
        <div>
          <Header isAuthenticated={this.props.isAuthenticated}/>
            {routes}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(actions.authCheckState())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
