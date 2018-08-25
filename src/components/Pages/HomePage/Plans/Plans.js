import React from 'react';
import classes from './Plans.css';
import Plan from './Plan/Plan'
const plans = (props) => (
  <div className={classes.Container}>
    <div className={classes.Background}>
      <h5>Membership</h5>
      <h1>Choose Your Plan</h1>
      <p>SKILL UP provides different membership plan to fulfil various demands of students,  customised services will be provided for each tier of membership.</p>
      <div className={classes.PlanContainer}>
        <Plan type="Bronze" />
        <Plan type="Silver" />
        <Plan type="Gold" />
      </div>
    </div>
  </div>
)

export default plans;
