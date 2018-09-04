import React, { Component } from 'react'
import style from './experiences.css';
import {List, Card} from 'antd';
export default class experiences extends Component {
    state = {
        experience: [
            {
                id:"1",
                company: "Tuftec Solutions",
                position: "Software Engineer",
                startDate: "08/2017",
                endDate: "Present",
                description: "Tuftec Solutions is a specialist electronics engineering organisation that concentrates on the supply of technology solutions for use in demanding applications",
                responsibility: [
                    'Took part in data transmission part of DipStik project, which is an independent flood level monitoring and alert system ',
                    'Developed a Linux server to receive flooding data from onsite equipment and send to a program running on Windows platform ',
                    'In charge of a start-up background program running on VicRoads flood monitor system',    
                    'Worked on a Internet of Things project based on LoRaWAN and The Thing Network platform such as the migration of code to RAK811 LoRaWAN chip'
                ],
            },
            {
                id:"2",
                company: "National Australia Institute of Technology",
                position: "IOS App Developer Intern",
                startDate: "09/2017",
                endDate: "02/2018",
                description: "National Australian Institute of Technology is an educational Institution founded in 2015. This institution delivers high- stakes training and examinations services including Pearson, Microsoft and Adobe",
                responsibility: [
                    'Experimented with management system development of NAIT on both iOS and Android platform using Ionic Framework',
                    'Deployed the app to App Store and Google Play',
                    'Developed iOS application for an start-up Bitcoin trading company, which provides Bitcoin news, price, trend and trade information'     
                ],
            }
        ]
    }
  render() {
    return (
      <div className={style.experiences}>
        <h2>Experience</h2>
        <List
            itemLayout="horizontal"
            dataSource={this.state.experience}
            renderItem={ exp => (
            <List.Item>
                <Card bordered={false}>
                    <h3>{exp.position}</h3>
                    <h4>{exp.company}</h4>
                    <h4>{exp.startDate} - {exp.endDate}</h4>
                    <p>{exp.description}</p>
                    <ul>
                        {exp.responsibility.map((res, index) =>{
                        return <li key={index}>{res}</li>
                    })}
                    </ul>
                </Card>
            </List.Item>
        )}/>
      </div>
    )
  }
}
