import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Card} from 'antd';
const mentor = (props) => {

    const {Meta} = Card;
    return(
        <Col span={8}>
            <Card 
                hoverable
                cover={<Link to={props.linkedin}><img src={props.avatar} alt={props.name} /></Link>}>
                <Meta title={props.position} description={props.company}/>
            </Card>
        </Col>
    )
}

export default mentor;