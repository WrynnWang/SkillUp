import React from 'react';
import Banners from '../../components/Pages/HomePage/Banners/Banners';
import Library from '../../components/Pages/HomePage/Library/Library';
import Mentors from '../../components/Pages/HomePage/Mentors/Mentors';
import Partners from '../../components/Pages/HomePage/Partners/Partners';
import Plans from '../../components/Pages/HomePage/Plans/Plans';
import Services from '../../components/Pages/HomePage/Services/Services';

const home = (props) => (
  <div>
    <Banners />
    <Library />
    <Mentors />
    <Partners />
    <Plans />
    <Services />
  </div>
)

export default home;
