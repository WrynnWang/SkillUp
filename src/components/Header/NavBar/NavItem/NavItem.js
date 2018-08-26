import React from 'react';
import {NavLink} from 'react-router-dom';

const navitem = (props) =>(
  <NavLink to={props.link} exact>{props.children}</NavLink>
)



export default navitem;
