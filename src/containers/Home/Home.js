import React, {Fragment} from 'react';
import Banners from '../../components/Pages/HomePage/Banners/Banners';
import Library from '../../components/Pages/HomePage/Library/Library';
import Mentors from '../../components/Pages/HomePage/Mentors/Mentors';
import Partners from '../../components/Pages/HomePage/Partners/Partners';
import Plans from '../../components/Pages/HomePage/Plans/Plans';
import Services from '../../components/Pages/HomePage/Services/Services';
import Footer from '../../components/Footer/Footer';
import classes from './Home.css';
const home = (props) => (
  <div className={classes.Home}>
    <div className={classes.Body}>
      <Banners />
      <Library />
      <Mentors />
      <Partners />
      <Plans />
      <Services />
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default home;
