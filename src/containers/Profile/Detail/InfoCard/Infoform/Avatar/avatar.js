import { Upload, Icon, Modal } from 'antd';
import React, {Component} from 'react';

import {connect} from 'react-redux';
import * as actions from '../../../../../../store/actions/index';

class Avatar extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => {
    this.setState({ fileList });
    this.props.onAvatar(this.state.fileList[0].thumbUrl, this.props.localId, this.props.token);
  };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
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
    return {
        onAvatar: (avatar, localId, token) => dispatch (actions.avatar(avatar, localId, token))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Avatar);