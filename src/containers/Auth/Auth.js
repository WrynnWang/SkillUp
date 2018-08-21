import React, {Component} from 'react';
import {connect} from 'react-redux';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import classes from './Auth.css';

import * as actions from '../../store/index';

class Auth extends Component{

    state={
        controls:{
            email:  {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value:'',
                validation:{
                    require: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password:  {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value:'',
                validation:{
                    require: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            }
        }
    };

    checkValidation = (value, rules) => {
        let isValid = true;

        if(rules.required){
            isValid =  value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    };

    inputChangedHandler =(event,controlName) =>{

        const updatedControls = {
            ...this.state.controls,
            [controlName]:{
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidation(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }

        this.setState({controls: updatedControls});
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
    };

    render(){

        const formElementArray = [];

        for (let key in this.state.controls){
            formElementArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        const form = formElementArray.map(formElement => (
            <Input
                key = {formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                Value = {formElement.config.value}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}
                invalid={!formElement.config.valid}
                shouldvalidate ={formElement.config.validation}
                touched={formElement.config.touched}
            />
        ));

        return(
            <div className={classes.Auth}>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success">Sign Up</Button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAuth: (email,password) => dispatch(actions.auth(email, password))
    };
};
export default connect(null, mapDispatchToProps)(Auth);