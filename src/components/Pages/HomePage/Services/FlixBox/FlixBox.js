import React from 'react';
import {Link} from 'react-router-dom';
import classes from './FlixBox.css';

import {Button} from 'antd';

const flipbox = (props) => (
  <div className={classes.FlipBoxContainer}>
    <div className={classes.FlipBox}>
      <div className={classes.FlipFront}>
        <img src={props.Image} alt="666" />
      </div>
      <div className={classes.FlipBack}>
        <h1>{props.content.title}</h1>
        <p>{props.content.content}</p>
        <Link to={props.content.link}>
            <Button size="large" className={classes.Button}>Learn More</Button>
        </Link>
      </div>

    </div>
  </div>
)

export default flipbox;
