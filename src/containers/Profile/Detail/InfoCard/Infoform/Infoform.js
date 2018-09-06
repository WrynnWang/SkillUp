import React, {Component} from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

import Avatar from './Avatar/avatar';
import {connect} from 'react-redux';
import * as actions from '../../../../../store/actions/index';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values.email, values.name, values.university);
        this.props.confirm();
        this.props.onProfile(
          values.name,
          values.email,
          values.university,
          values.position,
          values.number,
          values.website,
          this.props.localId,
          this.props.token
        )
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '61',
    })(
      <Select style={{ width: 70 }}>
        <Option value="61">+61</Option>
        <Option value="86">+86</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="Avatar"
          >
          {getFieldDecorator('avatar', {
            rules: [{
              required: false, message: 'Please set your avatar!',
            }],
          })(
            <Avatar />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }], 
            initialValue: this.props.email,
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Preferred Name&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your preferred name!', whitespace: true }],
            initialValue: this.props.name,
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Company/Uni"
        >
          {getFieldDecorator('university', {
            rules: [{ required: true, message: 'Please input your company/university!', whitespace: true }],
            initialValue: this.props.company,
          })(
            <Input />
          )}
        </FormItem>
          
        <FormItem
          {...formItemLayout}
          label="Position"
        >
          {getFieldDecorator('position', {
            rules: [{ required: true, message: 'Please input your position!', whitespace: true }],
            initialValue: this.props.position,
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Phone Number"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: false}],
            initialValue: this.props.num,
          })(
            <Input 
              addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Personal Website"
        >
          {getFieldDecorator('website', {
            rules: [{ required: false}],
            initialValue: this.props.web,
          })(
            <AutoComplete
              dataSource={websiteOptions}
              onChange={this.handleWebsiteChange}
            >
              <Input />
            </AutoComplete>
          )}
        </FormItem>
        <Button
            type="primary"
            htmlType="submit"
          >
            Confirm
          </Button>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

const mapStateToProps = state => {
  return {
      localId: state.auth.localId,
      token: state.auth.token
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onProfile: ( name, email, university, position, number, website,localId, token ) => dispatch( actions.profile( name, email, university, position, number, website, localId, token ) )
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(WrappedRegistrationForm);