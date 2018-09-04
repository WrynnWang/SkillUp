import React, {Component} from 'react'
import style from './detail.css';
import InfoCard from './InfoCard/InfoCard';
import Scoin from './Scoin/scoin';
import {connect} from 'react-redux';
import axios from 'axios';

class Detail extends Component{
    state = {
        profile: {
            name: '',
            email: '',
            university: '',
            phone_number: '',
            position: '',
            web: '',
            membership: '',
            coin: ''
        }
    }
    componentDidMount(){
        axios.get('https://skillup-53fa3.firebaseio.com/profile/' + this.props.userId + '.json?auth=' + this.props.token)
            .then(
                response => {
                    for(let key in response.data){
                        if(key !== "returnSecureToken"){
                            const updatedProfiles = {
                                ...this.state.profile,
                                [key]: response.data[key]                            
                            };
                            console.log(updatedProfiles);
                            this.setState({profile: updatedProfiles});
                        }
                    }
            }).catch(
                error => {
                    console.log(error);
            });
    }
    
    render(){

        const memstyle = [style.detail];
        switch (this.props.membership){
            case ('gold'):
                memstyle.push(style.gold);
                break;
            case ('silver'):
                memstyle.push(style.silver);
                break;
            case ('bronze'):
                memstyle.push(style.bronze);
                break;
        }


        return (
            <div className={memstyle.join(' ')}>
                <InfoCard 
                    name={this.props.name}
                    position={this.props.position}
                    email={this.props.email}
                    company={this.props.university}
                    num={this.props.phone_number}
                    web={this.props.web}
                />
                <Scoin coin={this.props.coin}/>
            </div>
      )
    }
}

const mapStateToProps = state => {
    return {
        name: state.profile.name,
        email: state.profile.email,
        university: state.profile.university,
        phone_number: state.profile.phone_number,
        position: state.profile.position,
        web: state.profile.web,
        membership: state.profile.membership,
        coin: state.profile.coin
    }
}
 
export default connect(mapStateToProps)(Detail);
