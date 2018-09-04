import React from 'react';
import skillupLogo from './skillupLogo.png';
import NavBar from './NavBar/NavBar';
import classes from './Header.css';
import { Layout, Affix } from 'antd';
import {Link} from 'react-router-dom';

const { Header } = Layout;

const header = (props) => (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className={classes.logo}><Link to="/"><img src={skillupLogo} alt="skillup" /></Link></div>
      <NavBar />
    </Header>

)

export default header;
