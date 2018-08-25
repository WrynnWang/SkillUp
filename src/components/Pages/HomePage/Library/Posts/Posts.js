import React from 'react';
import classes from './Posts.css';
import MainPost from './MainPost/MainPost';
import OtherPosts from './OtherPosts/OtherPosts';
const posts = (props) => (
    <div className={classes.Posts}>
        <MainPost />
        <OtherPosts />  
    </div>
)

export default posts;