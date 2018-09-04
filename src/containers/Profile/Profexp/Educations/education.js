import React, { Component } from 'react'
import style from './education.css';
import {List, Card} from 'antd';
export default class experiences extends Component {
    state = {
        education: [
            {
                id:"1",
                uni: "The Australian National University",
                degree: "Bachelor Degree",
                major:"Computer Science",
                startYear: "2014",
                endYear: "2016",
            },
            {
                id:"2",
                uni: "Beijing Institute of Technology",
                degree: "Bachelor Degree",
                major:"Computer Science",
                startYear: "2012",
                endYear: "2014",
            }
        ]
    }
  render() {
    return (
      <div className={style.educations}>
        <h2>Education</h2>
        <List
            itemLayout="horizontal"
            dataSource={this.state.education}
            renderItem={ edu => (
            <List.Item>
                <Card bordered={false}>
                    <h3>{edu.uni}</h3>
                    <h4>{edu.degree}, {edu.major}</h4>
                    <h4>{edu.startYear} - {edu.endYear}</h4>
                </Card>
            </List.Item>
        )}/>
      </div>
    )
  }
}
