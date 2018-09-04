import React, { Component } from 'react'
import experiences from './containers/Profile/Profexp/Educations/education';

export default class data extends Component {
    state = {
        id:'',
        personalInfo:{
            name: 'Zikai Zhao',
            position: 'Casual Software Developer Tuftec Solutions',
            membership: 'gold',
            email: 'lionelcdqz@gmail.com',
            coin: '55'
        },
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
        ],
        education: []
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
