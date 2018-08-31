import React from 'react';
import classes from './Teammember.css';

const teamMembers = (props) => (
    <div className={classes.TeamMember}>
        <img src='' alt="testMember" />
        <p>props.name</p>
        <p>props.title</p>
        <p>props.description</p>
    </div>
)

export default teamMembers;