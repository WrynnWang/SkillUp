import React from 'react';
import NavItem from './NavItem/NavItem';
import { Menu} from 'antd';
import {Link} from 'react-router-dom';
import * as dropdownItems from './NavDropDownData';

const navBar = (props) => {

  let ContactUsMenu = (
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

    return(
      <Menu 
        mode="horizontal"
        theme='dark' 
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px'}}>
          <Menu.Item key="1"><NavItem link="/">Home</NavItem></Menu.Item>
          <Menu.SubMenu title="Program" >
              {ProgramMenus}
          </Menu.SubMenu>
          <Menu.Item key="3"><NavItem link="/membership">Membership</NavItem></Menu.Item>
          <Menu.Item key="4"><NavItem link="/library">Library</NavItem></Menu.Item>
          <Menu.SubMenu title="About Us" >
              {ContactUsMenus}
          </Menu.SubMenu>
          <Menu.Item key="6"><NavItem link="/contact-us">Contact Us</NavItem></Menu.Item>
          <Menu.Item key="7">{props.isAuthenticated ? <NavItem link="/profile">Profile</NavItem>: null}</Menu.Item>
          <Menu.Item key="8">{!props.isAuthenticated ? <NavItem link="/login">Login</NavItem>: <NavItem link="/logout">Log Out</NavItem> }</Menu.Item>
      </Menu>
          
    )
}

export default navBar;
