import React from 'react';
import classes from './Mentors.css';
import TeamMember from '../../../../assets/Teammembers/testmember.jpeg';

import { Card, Carousel, Row, Col} from 'antd'

const mentors = (props) => {

  const {Meta} = Card;

  return(
    <div className={classes.Container}>
    <h5>Our Mentors</h5>
    <h1>PROFESSIONALS MENTORS</h1>
    <p>SKILL UP provides mentoring to students in terms of their career objectives. Multiple professional mentors will provide students a holistic perspective to various industries.</p>
    
    <Carousel autoplay>
      <div className={classes.Mentor}>
        <Row gutter={8}>
          <Col span={8}>
            <Card 
              hoverable
              cover={<img src={TeamMember} alt="team member" />}>
              <Meta title="Jonanthan" description="He is a mentor"/>
            </Card>
          </Col>
          <Col span={8}>
            <Card 
              hoverable
              cover={<img src={TeamMember} alt="team member" />}>
              <Meta title="Jonanthan" description="He is a mentor"/>
            </Card>
          </Col>
          <Col span={8}>
            <Card 
              hoverable
              cover={<img src={TeamMember} alt="team member" />}>
              <Meta title="Jonanthan" description="He is a mentor"/>
            </Card>
          </Col>
        </Row>
      </div>
      <div className={classes.Mentor}>
        <Row gutter={8}>
          <Col span={8}>
            <Card 
              hoverable
              cover={<img src={TeamMember} alt="team member" />}>
              <Meta title="Jonanthan" description="He is a mentor"/>
            </Card>
          </Col>
          <Col span={8}>
            <Card 
              hoverable
              cover={<img src={TeamMember} alt="team member" />}>
              <Meta title="Jonanthan" description="He is a mentor"/>
            </Card>
          </Col>
          <Col span={8}>
            <Card 
              hoverable
              cover={<img src={TeamMember} alt="team member" />}>
              <Meta title="Jonanthan" description="He is a mentor"/>
            </Card>
          </Col>
        </Row>
      </div>
      <div className={classes.Mentor}>
        <Row gutter={8}>
          <Col span={8}>
            <Card 
              hoverable
              cover={<img src={TeamMember} alt="team member" />}>
              <Meta title="Jonanthan" description="He is a mentor"/>
            </Card>
          </Col>
          <Col span={8}>
            <Card 
              hoverable
              cover={<img src={TeamMember} alt="team member" />}>
              <Meta title="Jonanthan" description="He is a mentor"/>
            </Card>
          </Col>
          <Col span={8}>
            <Card 
              hoverable
              cover={<img src={TeamMember} alt="team member" />}>
              <Meta title="Jonanthan" description="He is a mentor"/>
            </Card>
          </Col>
        </Row>
      </div>
    </Carousel>
  </div>
  )
}


export default mentors;
