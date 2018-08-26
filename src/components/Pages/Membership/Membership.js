import React from 'react';
import PageTemplate from '../../PageTemplate/PageTemplate';
import classes from './Membership.css';
import Test from '../../../assets/test.jpg'
const membership = (props) => (
  <PageTemplate background imageSrc={Test} name="Skill Up">
    <div className={classes.Membership}>
      <div className={classes.Title}>
        WELCOME TO OUR CLUB
      </div>
      <div className={classes.Content}>
          <span>Join SKillup Now!</span>
          <div>You will grow and develop by sharing ideas with the club, participating in events and networking through our platform.</div>
      </div>
    </div>
  </PageTemplate>

)

export default membership;
