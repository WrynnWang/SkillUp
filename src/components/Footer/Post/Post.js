import React from 'react';
import classes from './Post.css';

const post = (props) => (
  <div className={classes.Post}>
    <div className={classes.Dat}><span className={classes.number}> 24</span> July </div>
    <div className={classes.Content}>
      <p>This is the article</p>
      <p>This is the auther</p>
    </div>
  </div>
)

export default post;
