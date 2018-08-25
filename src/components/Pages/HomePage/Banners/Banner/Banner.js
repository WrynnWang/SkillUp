import React from 'react';
import classes from './Banner.css'
const banner = (props) =>(
  <div className={[classes.Banner, classes.fade].join(' ')}>
    <img src={props.img} alt={props.alt} />
    <div>{props.caption}</div>
  </div>
)

export default banner;
