import React from 'react';
import classes from './Teammember.css';
import TestMember from '../../../../../../assets/Teammembers/testmember.jpeg';
const teamMembers = (props) => (
    <div className={classes.TeamMember}>
        <img src={TestMember} alt="testMember" />
        <p>props.name</p>
        <p>props.title</p>
        <p>props.description</p>
    </div>
)

export default teamMembers;