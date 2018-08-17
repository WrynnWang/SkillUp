import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavItem.css';
import * as dropdown from './DropDownMenu';

const navitem = (props) =>{
  let link = (<li className={classes.NavItem}>
    <NavLink
      to={props.link}
    extract>
      {props.children}</NavLink>
  </li>)

  if(props.type = 'dropdown')
  return(
    {link}
  )
}

export default navitem;
