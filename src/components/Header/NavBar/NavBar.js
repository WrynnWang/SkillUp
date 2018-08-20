import React, {Component} from 'react';
import classes from './NavBar.css';
import NavItem from './NavItem/NavItem';
import Dropdown from './NavDropDown/NavDropDown';
import * as dropdownItems from './NavDropDownData';

const navBar = (props) => {

    return(
      <ul className={classes.NavBar}>
        <NavItem link="/">Home</NavItem>
        <Dropdown
          list={dropdownItems.PROGRAM}
        title="Program"></Dropdown>
        <NavItem link="/membership">Membership</NavItem>
        <NavItem link="/library">Library</NavItem>
        <Dropdown
          list={dropdownItems.ABOUTUS}
        title="About us"></Dropdown>
        <NavItem link="/contact-us">Contact Us</NavItem>
        <NavItem link="/login">Login</NavItem>
      </ul>
    )
}

export default navBar;
