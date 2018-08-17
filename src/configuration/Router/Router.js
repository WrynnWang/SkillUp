import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../../containers/Home/Home';
import NavBar from '../../components/NavBar/NavBar';
import Membership from '../../containers/Membership/Membership';
import Library from '../../containers/Library/Library';
import ContactUs from '../../containers/ContactUs/ContactUs';

const router = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/membership" component={Membership} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/contactus" component={ContactUs} />
      </Switch>
)

export default router;
