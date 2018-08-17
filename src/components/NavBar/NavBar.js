import React from 'react';
import classes from './NavBar.css';
const navBar = (props) => (
  <div className={classes.NavBar}>
    <p className={classes.NavBarItem}>The program</p>
    <p className={classes.NavBarItem}>Membership</p>
    <p className={classes.NavBarItem}>Library</p>
    <p className={classes.NavBarItem}>About us</p>
    <p className={classes.NavBarItem}>Contact us</p>
  </div>
)

export default navBar;
