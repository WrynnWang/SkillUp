import React from 'react';
import classes from './Mentors.css';
import MentorsInfo from './MentorsInfo/Mentors';
import Mentor from './Mentor/Mentor';

import { Carousel, Row} from 'antd'

const mentors = (props) => {

  const ImgPerPage = 3;
  const MentorGroups = [];
  for (let i = 0; i< Math.round(MentorsInfo.length/ImgPerPage); i++){
    //console.log("i:", i)
    let Mentors = [];
    for(let j = 0; j< ImgPerPage; j++){
      let currentIndex = i*ImgPerPage + j;
      //console.log(currentIndex);
      Mentors.push( 
        <Mentor 
          key={currentIndex}
          avatar={MentorsInfo[currentIndex].avatar}
          linkedin={MentorsInfo[currentIndex].linkedin}
          name={MentorsInfo[currentIndex].name}
          position={MentorsInfo[currentIndex].position}
          company={MentorsInfo[currentIndex].company} /> 
      )
    }
    MentorGroups.push(
      <div className={classes.Mentor} key={i}>
        <Row gutter={24}>
          {Mentors}
        </Row>
      </div>
    )
  }

  return(
    <div className={classes.Container}>
      <h5>Our Mentors</h5>
      <h1>PROFESSIONALS MENTORS</h1>
      <p>SKILL UP provides mentoring to students in terms of their career objectives. Multiple professional mentors will provide students a holistic perspective to various industries.</p>
    
      <Carousel autoplay>
        {MentorGroups}
      </Carousel>
    </div>
  )
}


export default mentors;
