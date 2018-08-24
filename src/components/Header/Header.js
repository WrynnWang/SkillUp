import React from 'react';
import skillupLogo from '../../assets/Logo/skillupLogo.png';
import NavBar from './NavBar/NavBar';
import classes from './Header.css';

const header = (props) => {
    return(
      <header className={classes.Header}>
        <img src={skillupLogo} alt="skillup" />
        <nav>
          <NavBar isAuthenticated={props.isAuthenticated}/>
        </nav>
      </header>
    );
};

export default header;
