import React, { Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Home from './containers/Home/Home';
import Membership from './static/Membership/Membership';
import Library from './static/Library/Library';
import ContactUs from './static/ContactUs/ContactUs';
import Internship from './static/TheProgram/Internship/Internship';
import Mentoring from './static/TheProgram/Mentoring/Mentoring';
import Training from './static/TheProgram/Training/Training';
import Networking from './static/TheProgram/Networking/Networking';
import SkillUp from './static/AboutUs/SkillUp/SkillUp';
import Vsg from './static/AboutUs/VSG/VSG';
import Acbc from './static/AboutUs/ACBC/ACBC';
import Geg from './static/AboutUs/GEG/GEG';
import Auth from './containers/Auth/Auth';
import ProfilePage from './containers/ProfilePage/profilePage';
import Profile1 from './containers/Profile/profile';
import Logout from './containers/Auth/Logout/Logout';
import profile from './containers/Profile/profile';

import Routes from './Routes';
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
            <Route exact path="/profile1" component={profile} />
            <Route exact path="/login" component={Auth} />
            {/*<Route exact path="/profile" component={ProfilePage} />*/}
            <Route exact path="/profile" component={Profile1} />
            <Route exact path="/logout" component={Logout}/>
            <Redirect to="/"/>
        </Switch>
    );

    return (
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(actions.authCheckState())
    };
};

export default connect(null,mapDispatchToProps)(App);
