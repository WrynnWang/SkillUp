import React from 'react';
import classes from './Partner.css';
import {Link} from 'react-router-dom';
const partner = (props) => (
  <div className={classes.Partner}>
    <Link to={props.link}><img src={props.partnerLogo} alt={props.partnerName}/></Link>
  </div>
)

export default partner;
