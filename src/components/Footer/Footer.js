import React from 'react';
import classes from './Footer.css';
import {Link} from 'react-router-dom';
import skillupLogo from '../../assets/Logo/skillupLogo.png';
import Post from './Post/Post';
import wechatQR from '../../assets/QRcode/wechat-300x300.jpg';
import {Layout} from 'antd';
const footer = (props) => {

  const {Footer} = Layout;

  return (
    <Footer className={classes.Footer}>
        <div className={classes.Section}>
          <p>INFORMATIONS</p>
          <hr style={{background: '#a2a2a2', height: '1px', width: '80%'}}/>
          <ul>
            <li><Link to="/skillup">Skill Up</Link></li>
            <li><Link to="/">Our Services</Link></li>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/libaray">Library</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/">Our Facebook</Link></li>
            <li><Link to="/">Our Instagram</Link></li>
          </ul>
          <img className={classes.WechatQR} src={wechatQR} alt="QR" />
          <p style={{color:"c2c2c2", fontSize: "8px" }}>WeChat: skillupservices</p>
        </div>
        <div className={classes.Section}>
          <p>RECENT POSTS</p>
          <hr style={{background: '#a2a2a2', height: '1px', width: '80%'}}/>
          <Post />
          <Post />
        </div>
        <div className={classes.Section}>
          <p>CONTACT US</p>
          <hr style={{background: '#a2a2a2', height: '1px', width: '80%'}}/>
          <div className={classes.Infobox}>
            ADDRESS: LEVEL 2, 134 FLINDERS STREET MELBOURNE VIC 3000
          </div>
          <div className={classes.Infobox}>
            PHONE: +61 000 000 000
            EMAIL: INFO@SKILLUP.ORG.AU
          </div>
        </div>
    </Footer>
  )
}


export default footer
