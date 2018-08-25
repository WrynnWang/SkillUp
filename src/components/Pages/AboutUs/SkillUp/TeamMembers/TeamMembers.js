import React, {Fragment} from 'react';
import TeamMember from './TeamMember/Teammember';
import classes from './TeamMembers.css';
const teamMembers = (props) => (
    <div className={classes.TeamMembers}>
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
    </div>
)

export default teamMembers;