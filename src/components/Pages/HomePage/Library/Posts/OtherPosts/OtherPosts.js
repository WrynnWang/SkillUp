import React from 'react';
import classes from './OtherPosts.css';
import OtherPost from './OtherPost/OtherPost';
const otherPosts = (props) => (
    <div className={classes.OtherPosts}>
        <OtherPost />
        <OtherPost />
        <OtherPost />
        <OtherPost />       
    </div>
)

export default otherPosts;