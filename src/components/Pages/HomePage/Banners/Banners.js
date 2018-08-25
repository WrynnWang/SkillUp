import React, {Component} from 'react';
import classes from './Banners.css';
import Banner from './Banner/Banner';
import Image1 from '../../../../assets/Banner/image1.jpg';
import Image2 from '../../../../assets/Banner/image2.jpg';
import Image3 from '../../../../assets/Banner/image3.jpg';
class Banners extends Component {
  state = {
    image: ['image1','image2','image3'],
    currentIndex: '0',

  }
  render() {

    return (
      <div>
        <div className={classes.Banners}>
          <Banner img={Image1}/>
          <Banner img={Image2}/>
          <Banner img={Image3}/>
        </div>
        <div className={classes.DotContainer}>
          <span className={classes.Dot}></span>
          <span className={classes.Dot}></span>
          <span className={classes.Dot}></span>
        </div>
      </div>
    )
  }
}

export default Banners;
