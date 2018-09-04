import React from 'react';
import Banners from '../../components/Home/Banners/Banners';
import Library from '../../components/Home/Library/Library';
import Mentors from '../../components/Home/Mentors/Mentors';
import Partners from '../../components/Home/Partners/Partners';
import Plans from '../../components/Home/Plans/Plans';
import Services from '../../components/Home/Services/Services';
import {Layout} from 'antd';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const {Content} = Layout;

const home = (props) => (
  <Layout className="layout">
    <Header />
    <Content>
      <Banners />
      <Services />
      <Partners />
      <Mentors />
      <Plans />
      <Library />
    </Content>
    <Footer />
  </Layout>
)

export default home;
