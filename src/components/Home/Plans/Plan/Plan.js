import React from 'react';
import classes from './Plan.css';
const plan = (props) => (
    <div className={classes.Plan}>
        {props.type}
    </div>
)

export default plan;