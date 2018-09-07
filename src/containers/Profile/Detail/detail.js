import React, {Component, Fragment} from 'react'
import style from './detail.css';
import InfoCard from './InfoCard/InfoCard';
import Scoin from './Scoin/scoin';
import {connect} from 'react-redux';
import axios from 'axios';
import {Spin} from 'antd';
import * as actions from '../../../store/actions/index';


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
        axios.get('https://skillup-53fa3.firebaseio.com/profile/' + this.props.localId + '.json?auth=' + this.props.token)
            .then(
                response => {
                    let updatedProfiles = {};
                    for(let key in response.data){
                        if(key !== "returnSecureToken"){
                            updatedProfiles[key] = response.data[key]                                                  
                        }
                    }
                    console.log('UpdatedProfile:',updatedProfiles)
                this.props.onLoadProfile(
                    updatedProfiles.name,
                    updatedProfiles.email,
                    updatedProfiles.university,
                    updatedProfiles.position,
                    updatedProfiles.number,
                    updatedProfiles.web,
                );

                this.setState({isUpdating: false})
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
                    name={this.props.name}
                    position={this.props.position}
                    email={this.props.email}
                    company={this.props.university}
                    num={this.props.phone_number}
                    web={this.props.web}/>
                <Scoin coin={this.props.coin}/> 
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

        localId: state.auth.localId,
        token: state.auth.token
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadProfile: (name,email,university,phone_number,position,web) => dispatch(actions.profileFirstLoad(name,email,university,phone_number,position,web))
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
