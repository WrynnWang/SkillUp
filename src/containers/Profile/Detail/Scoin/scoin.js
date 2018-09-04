import React, { Component } from 'react'
import {Popover, Icon,Button} from 'antd';
import style from './scoin.css';
export default (props) => {

    let content = (
        <div>
            <p>This is SKill Coin</p>
            <Button type="primary">Learn More</Button>
        </div>
    )

    return (
      <div>
        <h5>Skill Coin: {props.coin}
            <Popover 
                title={<p style={{textAlign: 'center'}}>SkillUp Coin</p>}
                content={<p>{content}</p>} >
                <Icon type="question-circle-o" />
            </Popover>
        </h5>
      </div>
    )
}

