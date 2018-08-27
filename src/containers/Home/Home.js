import React from 'react';
import Banners from '../../components/Pages/HomePage/Banners/Banners';
import Library from '../../components/Pages/HomePage/Library/Library';
import Mentors from '../../components/Pages/HomePage/Mentors/Mentors';
import Partners from '../../components/Pages/HomePage/Partners/Partners';
import Plans from '../../components/Pages/HomePage/Plans/Plans';
import Services from '../../components/Pages/HomePage/Services/Services';
import PageTemplate from '../../components/PageTemplate/PageTemplate';

const home = (props) => (
  <PageTemplate>
    <Banners />
    <Services />
    <Partners />
    <Mentors />
    <Plans />
    <Library />
  </PageTemplate>
)

export default home;
