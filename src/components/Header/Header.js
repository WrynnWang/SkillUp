import React from 'react';
import skillupLogo from '../../assets/Logo/skillupLogo.png';
import NavBar from './NavBar/NavBar';
import classes from './Header.css';
import { Layout, Affix } from 'antd';
import {Link} from 'react-router-dom';

const { Header } = Layout;

const header = (props) => (
  <Affix offset='0'>
    <Header>
      <div className={classes.logo}><Link to="/"><img src={skillupLogo} alt="skillup" /></Link></div>
      <NavBar />
    </Header>
  </Affix>

)

export default header;
