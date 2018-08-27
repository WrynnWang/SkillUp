import React from 'react';
import NavItem from './NavItem/NavItem';
import { Menu} from 'antd';
import {Link} from 'react-router-dom';
import * as dropdownItems from './NavDropDownData';

const navBar = (props) => {

  {/*let ContactUsMenu = (
    dropdownItems.ABOUTUS.map( (item, index) => {
      return <Menu.Item key={index}><Link to={item.link}>{item.value}</Link></Menu.Item>
    })
  )
  let ContactUsMenus = <Menu.ItemGroup>{ContactUsMenu}</Menu.ItemGroup>

  let ProgramMenu = (
    dropdownItems.PROGRAM.map( (item, index)=> {
      return <Menu.Item key={index}><Link to={item.link}>{item.value}</Link></Menu.Item>
    })
  )
  let ProgramMenus = <Menu.ItemGroup>{ProgramMenu}</Menu.ItemGroup>
*/}
    return(
      <Menu 
        mode="horizontal"
        theme='dark' 
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px'}}>
          <Menu.Item key="1"><NavItem link="/">Home</NavItem></Menu.Item>
          <Menu.SubMenu title="Program" >
            <Menu.Item key="3"><Link to="/internship">Internship</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/mentoring">Mentoring</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/training">Training</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/networking">Networking</Link></Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="7"><NavItem link="/membership">Membership</NavItem></Menu.Item>
          <Menu.Item key="8"><NavItem link="/library">Library</NavItem></Menu.Item>
          <Menu.SubMenu title="About Us" >
            <Menu.Item key="10"><Link to="/skillup">Skill Up</Link></Menu.Item>
            <Menu.Item key="11"><Link to="/vsg">The Victor Smorgon Group</Link></Menu.Item>
            <Menu.Item key="12"><Link to="/geg">Good Education Group</Link></Menu.Item>
            <Menu.Item key="13"><Link to="/acbc">Australia China Business Council</Link></Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="14"><NavItem link="/contact-us">Contact Us</NavItem></Menu.Item>
          <Menu.Item key="15">{props.isAuthenticated ? <NavItem link="/profile">Profile</NavItem>: null}</Menu.Item>
          <Menu.Item key="16">{!props.isAuthenticated ? <NavItem link="/login">Login</NavItem>: <NavItem link="/logout">Log Out</NavItem> }</Menu.Item>
      </Menu>
          
    )
}

export default navBar;
