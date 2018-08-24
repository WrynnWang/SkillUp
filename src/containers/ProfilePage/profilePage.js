/**
 * Created by wqc on 2018/8/23.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './profilePage.css';
import * as actions from '../../store/actions/index';

class ProfilePage extends Component {

    state={
        profile: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            phone_number: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Phone Number'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            university: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'University Name'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            major: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Major'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            }
        }
    };

    componentDidMount(){
        axios.get('https://skillup-53fa3.firebaseio.com/profile/' + this.props.userId + '.json?auth=' + this.props.token)
            .then(
                response => {
                    for(let key in response.data){
                        if(key !== "returnSecureToken"){
                            const updatedProfiles = {
                                ...this.state.profile,
                                [key]: {
                                    ...this.state.profile[key],
                                    value: response.data[key]
                                }
                            };
                            this.setState({profile: updatedProfiles});
                        }
                    }
            }).catch(
                error => {
                    console.log(error);
            });
    }

    checkValidity ( value, rules ) {
        let isValid = true;
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid
        }

        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid
        }

        return isValid;
    }

    inputChangedHandler = ( event, profileName ) => {
        const updatedProfiles = {
            ...this.state.profile,
            [profileName]: {
                ...this.state.profile[profileName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.profile[profileName].validation ),
                touched: true
            }
        };
        this.setState( { profile: updatedProfiles } );
    };

    submitHandler = ( event ) => {
        event.preventDefault();
        this.props.onProfile(
            this.state.profile.name.value,
            this.state.profile.email.value,
            this.state.profile.phone_number.value,
            this.state.profile.university.value,
            this.state.profile.major.value,
            this.props.userId,
            this.props.token
        );

        this.props.history.push("/");
    };

    render() {

        const formElementsArray = [];
        for ( let key in this.state.profile ) {
            formElementsArray.push( {
                id: key,
                config: this.state.profile[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        if(this.props.loading){
            form = <Spinner/>;
        }

        let errorMessage = null;

        if(this.props.error){
            errorMessage = <p>{this.props.error}</p>
        }

        return (
            <div className={classes.ProfilePage}>
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success">Save your profile</Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.profile.name,
        email: state.profile.email,
        phone_number: state.profile.phone_number,
        university: state.profile.university,
        major: state.profile.major,
        error: state.profile.error,
        loading: state.profile.loading,

        userId: state.auth.userId,
        token: state.auth.token
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onProfile: ( name, email, phone_number,university, major, userId, token ) => dispatch( actions.profile( name, email, phone_number,university, major, userId, token ) )
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage);