import React from 'react';
import classes from './Banners.css';
const banners = (props) => (
  <div className={classes.Banners}>
    <ul>
      <li><span>Image 01</span><div><h3>This is Amos</h3></div></li>
      <li><span>Image 02</span><div><h3>This is Pearl</h3></div></li>
      <li><span>Image 03</span><div><h3>This is Tony</h3></div></li>
    </ul>
  </div>
)

export default banners;
