import React, {Component} from 'react';
import classes from './Banners.css';
import Image1 from '../../../../assets/Banner/image1.jpg';
import Image2 from '../../../../assets/Banner/image2.jpg';
import Image3 from '../../../../assets/Banner/image3.jpg';

import { Carousel } from 'antd'

const banner = (props) => {

    return (
      <Carousel autoplay effect="fade">
        <div className={classes.Banners}><img src={Image1} /></div>
        <div className={classes.Banners}><img src={Image2} /></div>
        <div className={classes.Banners}><img src={Image3} /></div>
      </Carousel>
    )
}

export default banner;
