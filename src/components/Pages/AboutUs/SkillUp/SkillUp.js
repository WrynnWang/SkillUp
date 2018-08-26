import React from 'react';
import classes from './SkillUp.css';
import PageTemplate from '../../PageTemplate/PageTemplate';
import TeamMembers from './TeamMembers/TeamMembers';
import { Menu, Dropdown,Icon} from 'antd';
import {Link} from 'react-router-dom';
import * as dropdownItems from './NavDropDownData';
const SkillUp = (props) => {

  let ContactUsMenu = (
    dropdownItems.ABOUTUS.map( item => {
      return <Menu.Item><Link to={item.link}>{item.value}</Link></Menu.Item>
    })
  )

  let ContactUsMenus = <Menu>{ContactUsMenu}</Menu>
  return(
  <PageTemplate>
    <div className={classes.SkillUp}>
      <Dropdown overlay={ContactUsMenus}><span>About Us</span></Dropdown>
      <p>Skill Up is aiming to provide an interactive and dynamic social community for international students to help them achieve their career development aspirations in Australia and globally.</p>
      <ur>
        Our Objectives Are:
        <li>Provide a dedicated platform for students to cater to all their study and lifestyle needs</li>
        <li>Leverage off the supportive business ecosystem to build a meaningful value-added program</li>
        <li>Provide employers with a direct channel to an already vetted, high quality, employable international student cohort</li>
        <li>Increase specialisation of students towards their desired career path – through practical and dynamic forms of education utilising digital media and gamification</li>
        <li>Host events and workshops to address the various needs of the student community</li>
        <li>Provide the corporate world better opportunities to promote products and brands through better understanding the student community and their needs.</li>
      </ur>
      <p>Skill Up offers different membership levels, with different services provided for each tier of membership. Students will grow and develop through sharing ideas, participating in events and networking through the platform.</p>
      <h1 style={{textAlign:'center'}}>Our Team</h1>
    </div>
    <TeamMembers />
  </PageTemplate>
  )
}

export default SkillUp;
