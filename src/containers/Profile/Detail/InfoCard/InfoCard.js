import React, { Component } from 'react'
import {Card, Icon, Modal, Avatar} from 'antd';
import testAvatar from './testAvatar.jpg';
import InfoForm from './Infoform/Infoform';
import {connect} from 'react-redux';
import axios from 'axios';
import * as actions from '../../../../store/actions/index';


class InfoCard extends Component {
    state = {
        modal: false,
        avatar_src: ''
    };

    componentDidMount(){
        //this.setState({ avatar_src: this.props.avatar});

        axios.get('https://skillup-53fa3.firebaseio.com/avatar/' + this.props.localId + '.json?auth=' + this.props.token)
            .then(
                response => {
                    console.log(response.data.avatar);
                    this.props.onLoadAvatar(response.data.avatar);
                })
            .catch(
                error => {
                    console.log(error);
            });
    };

    showModal = () => {
        this.setState({modal: true});
    };

    confirmHandler = (e) => {
        this.setState({
            modal: false,
            avatar_src: this.props.avatar
        });
    };

    cancelHandler = (e) => {
        this.setState({
            modal: false,
        });
    };

    render() {

        return (
            <div>
                <Card
                    bordered={false}
                    cover={<Avatar size={64} src={this.props.avatar}/>}>
                    <h5>{this.props.name}
                        <button onClick={this.showModal}><Icon type="edit"/></button>
                    </h5>
                    <p>{this.props.email}</p>
                    <hr style={{background: '#e2e2e2', width: '100%'}}/>
                    <p>{this.props.position}</p>
                    <p>{this.props.website}</p>
                </Card>
                <Modal
                    title="Edit Personal Information"
                    visible={this.state.modal}
                    footer={null}>
                    <InfoForm
                        name={this.props.name}
                        position={this.props.position}
                        email={this.props.email}
                        company={this.props.company}
                        num={this.props.num}
                        web={this.props.web}
                        confirm={this.confirmHandler}
                        cancel={this.cancelHandler}
                    />
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        avatar: state.avatar.avatar,

        localId: state.auth.localId,
        token: state.auth.token
    }
};

const mapDispatchToProps = dispatch => {
    return{
        onLoadAvatar: (avatar) => dispatch(actions.avatarFirstLoad(avatar))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(InfoCard);
