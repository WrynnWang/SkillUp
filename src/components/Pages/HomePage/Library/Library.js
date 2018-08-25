import React from 'react';
import classes from './Library.css';
import Post from './Posts/Posts'
const library = (props) => (
  <div className={classes.Container}>
    <h5>LATEST ARTICLES</h5>
    <h1>LIBRARY</h1>
    <Post />
  </div>
)

export default library;
