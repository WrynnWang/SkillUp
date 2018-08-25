import React from 'react';
import classes from './MainPost.css';
import TestImage from '../../../../../../assets/test.jpg';
const MainPost = (props) => (
    <div className={classes.MainPost}>
        <img src={TestImage} alt="test" />
        <p>some description</p>
        <button>READ MORE</button>
    </div>
)

export default MainPost;