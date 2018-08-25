import React from 'react';
import skillupLogo from '../../assets/Logo/skillupLogo.png';
import NavBar from './NavBar/NavBar';
import classes from './Header.css';
import {Link} from 'react-router-dom';

const header = (props) => (
  <header className={classes.Header}>
    <Link to="/"><img src={skillupLogo} alt="skillup" /></Link>
    <nav>
      <NavBar />
    </nav>
  </header>
)

export default header;
