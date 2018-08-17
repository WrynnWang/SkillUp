import React, {Fragment} from 'react';
import classes from './NavBar.css';
import skillupLogo from '../../assets/Logo/skillupLogo.png';
import NavItem from './NavItem/NavItem';
const navBar = (props) => (
  <ul className={classes.NavBar}>
    <NavItem link="/">Home</NavItem>
    <NavItem link="/" type="dropdown">Program</NavItem>
    <NavItem link="/membership">Membership</NavItem>
    <NavItem link="/library">Library</NavItem>
    <NavItem link="/" type="dropdown">About Us</NavItem>
    <NavItem link="/contact-us">Contact Us</NavItem>
    <NavItem link="/login">Login</NavItem>
  </ul>
)

export default navBar;
