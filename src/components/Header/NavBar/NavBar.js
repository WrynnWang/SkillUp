import React, {Component} from 'react';
import classes from './NavBar.css';
import NavItem from './NavItem/NavItem';
import { Menu, Dropdown} from 'antd';
import {Link} from 'react-router-dom';
import * as dropdownItems from './NavDropDownData';

const navBar = (props) => {
 
    let ContactUsMenu = (
      dropdownItems.ABOUTUS.map( item => {
        return <Menu.Item><Link to={item.link}>{item.value}</Link></Menu.Item>
      })
    )

    let ContactUsMenus = <Menu>{ContactUsMenu}</Menu>

    return(
      <ul className={classes.NavBar}>
        <NavItem link="/">Home</NavItem>
        <NavItem link="/membership">Membership</NavItem>
        <NavItem link="/library">Library</NavItem>
        <Dropdown overlay={ContactUsMenus} ><a className="ant-dropdown-link">About Us</a></Dropdown>
        <NavItem link="/contact-us">Contact Us</NavItem>
        <NavItem link="/login">Login</NavItem>
      </ul>
    )
}

export default navBar;
