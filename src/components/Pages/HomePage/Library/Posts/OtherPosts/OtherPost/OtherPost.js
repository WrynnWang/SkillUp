import React from 'react';
import classes from './OtherPost.css';
import TestImage from '../../../../../../../assets/test.jpg'
const otherPost = (props) => (
    <div className={classes.OtherPost}>
        <img src={TestImage} alt="test" />
        <p>some description</p>
        <button>READ MORE</button>
    </div>
)

export default otherPost;