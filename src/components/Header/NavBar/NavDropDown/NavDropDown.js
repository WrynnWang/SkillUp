import React from 'react';
import {Link} from 'react-router-dom';
import classes from './NavDropDown.css';

const navDropDown = (props) => {
  let list = null;
  list = props.list.map(item => {
    return <div><Link to={item.link}>{item.value}</Link></div>
  })

  return (
  <li className={classes.NavDropDown}>
    {props.title}
    <ul className={classes.DropDown}>
      {list}
    </ul>
  </li>
  )
}

export default navDropDown;
