import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavItem.css';

const navitem = (props) =>(
  <li className={classes.NavItem}>
    <NavLink
      to={props.link}
      extract>
      {props.children}</NavLink>
  </li>
)

export default navitem;
