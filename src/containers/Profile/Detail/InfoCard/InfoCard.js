import React, { Component } from 'react'
import {Card, Icon, Modal, Avatar} from 'antd';
import testAvatar from './testAvatar.jpg';
import InfoForm from './Infoform/Infoform';
export default class InfoCard extends Component {
    state = {
        modal: false
    }

    showModal = () =>{
        this.setState({modal:true})
        console.log(this.state.modal);
    }

    confirmHandler = (e) => {
        console.log(e);
        this.setState({
          modal: false,
        });
      }
    
    cancelHandler = (e) => {
        console.log(e);
        this.setState({
          modal: false,
        });
      }

  render() {

    return (
      <div>
        <Card
            bordered={false}
            cover={<Avatar size={64} src={testAvatar} />}>
            <h5>{this.props.name} 
                <button onClick={this.showModal} ><Icon type="edit" /></button>
                </h5>
                <p>{this.props.email}</p>
                <hr style={{background: '#e2e2e2', width: '100%'}}/>
                <p>{this.props.position}</p>
                <p>{this.props.website}</p>
        </Card>
        <Modal
                    title="Edit Personal Information"
                    visible={this.state.modal}
                    onOk={this.confirmHandler}
                    onCancel={this.cancelHandler}
                    okText="Confirm"
                    cancelText="Cancel">
                    <InfoForm />
                </Modal>
      </div>
    )
  }
}
