import React from 'react';
import {Link} from 'react-router-dom';
import classes from './FlixBox.css';

const flipbox = (props) => (
  <div className={classes.FlipBoxContainer}>
    <div className={classes.FlipBox}>
      <div className={classes.FlipFront}>
        <img src={props.Image} alt="666" />
      </div>
      <div className={classes.FlipBack}>
        <h1>{props.content.content}</h1>
        <Link to={props.content.link}>Learn More</Link>
      </div>

    </div>
  </div>
)

export default flipbox;
