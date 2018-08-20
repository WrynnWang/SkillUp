import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavItem.css';

const navitem = (props) =>{

  return(
    <li className={classes.NavItem}>
      <NavLink
        to={props.link}
      exact>
        {props.children}</NavLink>
    </li>
  )
}

export default navitem;
