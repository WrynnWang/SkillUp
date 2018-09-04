import React, { Component } from 'react'
import style from './profexp.css';
import {Card} from 'antd';
import Experiences from './Experiences/experiences';
import Educations from './Educations/education';
export default class Profexp extends Component {
  render() {
    return (
      <div className={style.profexp}>
        <Card bordered={false}>
            <Experiences />
            <Educations />
        </Card>
      </div>
    )
  }
}
