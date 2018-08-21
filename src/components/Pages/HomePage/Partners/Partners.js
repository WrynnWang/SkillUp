import React from 'react';
import classes from './Partners.css';
import Partner from './Partner/Partner';
import vsgLogo from '../../../../assets/Logo/vsgLogo.png';
import gegLogo from '../../../../assets/Logo/gegLogo.jpg';
import acbcLogo from '../../../../assets/Logo/acbcLogo.png';
const partners = (props) => (
  <div className={classes.Container}>
    <h5>Our Partners</h5>
    <h1>STRATEGIC PARTNERS</h1>
    <div className={classes.Partners}>
      <Partner partnerLogo={vsgLogo} partnerName="VSG" link="/vsg"/>
      <Partner partnerLogo={gegLogo} partnerName="GEG" link="/geg"/>
      <Partner partnerLogo={acbcLogo} partnerName="ACBC" link="/acbc"/>
    </div>
  </div>
)

export default partners;
