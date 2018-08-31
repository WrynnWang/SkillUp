import React from 'react';
import classes from './Services.css';
import Flipbox from './FlixBox/FlixBox';
import Internship from './Images/internship.png';
import Mentoring from './Images/mentoring.png';
import Networking from './Images/networking.png';
import Training from './Images/training.png';
import * as flipbox from './FlipContent';
const services = (props) => (
  <div className={classes.Container}>
    <div className={classes.Background}>
      <div className={classes.Services}>
        <h5>SKILLUP</h5>
        <h1>AN EXCLUSIVE PROGRAM FOR INTERNATIONAL STUDENTS</h1>
      </div>
    </div>
    <div style={{display: "flex"}}>
      <Flipbox Image={Internship} content={flipbox.internship}/>
      <Flipbox Image={Mentoring} content={flipbox.mentoring}/>
      <Flipbox Image={Networking} content={flipbox.networking}/>
      <Flipbox Image={Training} content={flipbox.training}/>
    </div>
  </div>
)

export default services;
