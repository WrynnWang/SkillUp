import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import style from './Auth.css';
import * as actions from '../../store/actions/index';
import {Layout} from 'antd';
import {withRouter} from 'react-router-dom';
import Header from '../../components/Header/Header';

const FormItem = Form.Item;
const {Content} = Layout;

class NormalLoginForm extends Component {
    
    state = {
        isSignup: true
    }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.onAuth(values.userName, values.password,this.props.isSignup)
      }
    });
  }

  switchHandler = () => {
      this.setState(previousState => {
        return {isSignup: !previousState.isSignup}
      });
      console.log(this.state.isSignup);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    
    if (this.props.token !== null){
      this.props.history.replace('/');
    }

    return (
        <Layout>
        <Header />
        <Content>
        <div className={style.container}>
        <Form onSubmit={this.handleSubmit} className={style.login_form}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className={style.login_form_forget} href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className={style.login_form_button}>
            {this.state.isSignup ? "Log in" : "SignUp"}
          </Button>
          Or <a onClick={this.switchHandler}>{this.state.isSignup? "register now!"  : "go back to log in"}</a>
        </FormItem>
      </Form>
        </div>
        </Content>
        </Layout>
    );
  }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        token: state.auth.token,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) )
    };
};

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default connect( mapStateToProps, mapDispatchToProps )( withRouter(WrappedNormalLoginForm) );