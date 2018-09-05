import React, {Component, Fragment} from 'react'
import style from './detail.css';
import InfoCard from './InfoCard/InfoCard';
import Scoin from './Scoin/scoin';
import {connect} from 'react-redux';
import axios from 'axios';
import {Spin} from 'antd';


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
        },
        isUpdating: false,
    }
    componentDidMount(){
        this.setState({isUpdating: true})
        axios.get('https://skillup-53fa3.firebaseio.com/profile/' + this.props.userId + '.json?auth=' + this.props.token)
            .then(
                response => {
                    for(let key in response.data){
                        if(key !== "returnSecureToken"){
                            const updatedProfiles = {
                                ...this.state.profile,
                                [key]: response.data[key]                            
                            };
                            this.setState({profile: updatedProfiles, isUpdating: false});
                            
                        }
                    }
                console.log(this.state.profile)
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

        let detail = null;
        if(!this.state.isUpdating){
            detail = 
            <Fragment>
                <InfoCard 
                    name={this.state.profile.name}
                    position={this.state.profile.position}
                    email={this.state.profile.email}
                    company={this.state.profile.university}
                    num={this.state.profile.phone_number}
                    web={this.state.profile.web}/>
                <Scoin coin={this.state.profile.coin}/> 
            </Fragment>
        }

        if(this.state.isUpdating) {
            detail = <Spin />
        }

        return (
            <div className={memstyle.join(' ')}>
                {detail}
            </div>
        );
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
        coin: state.profile.coin,

        userId: state.auth.userId,
        token: state.auth.token
    }
}
 
export default connect(mapStateToProps)(Detail);
