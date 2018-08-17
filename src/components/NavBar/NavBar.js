import React, {Fragment} from 'react';
import classes from './NavBar.css';
import skillupLogo from '../../assets/Logo/skillup.jpg';
import NavItem from './NavItem/NavItem';
const navBar = (props) => (
  <ul className={classes.NavBar}>
    <img src={skillupLogo} alt="SkillUp" />
    <NavItem link="/">Home</NavItem>
    <NavItem link="/">Program</NavItem>
    <NavItem link="/">Membership</NavItem>
    <NavItem link="/">Library</NavItem>
    <NavItem link="/">About Us</NavItem>
    <NavItem link="/">Contact Us</NavItem>
  </ul>
    )

export default navBar;
