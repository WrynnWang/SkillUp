import React from 'react';
import classes from './Banners.css';
import Image1 from './Images/image1.jpg';
import Image2 from './Images/image2.jpg';
import Image3 from './Images/image3.jpg';

import { Carousel } from 'antd'

const banner = (props) => {

    return (
      <Carousel autoplay effect="fade">
        <div className={classes.Banners}><img src={Image1} alt=""/></div>
        <div className={classes.Banners}><img src={Image2} alt=""/></div>
        <div className={classes.Banners}><img src={Image3} alt=""/></div>
      </Carousel>
    )
}

export default banner;
