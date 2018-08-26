import React, {Fragment} from 'react';
import Banners from '../../components/Pages/HomePage/Banners/Banners';
import Library from '../../components/Pages/HomePage/Library/Library';
import Mentors from '../../components/Pages/HomePage/Mentors/Mentors';
import Partners from '../../components/Pages/HomePage/Partners/Partners';
import Plans from '../../components/Pages/HomePage/Plans/Plans';
import Services from '../../components/Pages/HomePage/Services/Services';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import classes from './Home.css';

import {Layout} from 'antd';

const {Content} = Layout;

const home = (props) => (
  <Layout>
    <Content>
      <Banners />
      <Services />
      <Partners />
      <Mentors />
      <Plans />
      <Library />
    </Content>
    <footer>
      <Footer />
    </footer>
  </Layout>
)

export default home;
