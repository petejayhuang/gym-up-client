import React, { Component } from 'react';
import TextInput from '../common_components/TextInput';
import { connect } from 'react-redux';
import { sendRegisterForm } from '../../actions';

class Register extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.sendRegisterForm(this.props.registerForm)
  }
  
  render() {
    return (
      <div className="form-group">
        <TextInput textKey="userFName" label="First Name" placeholder="Enter first name" />
        <TextInput textKey="userLName" label="Last Name" placeholder="Enter last name" />
        <TextInput textKey="email" label="Email" placeholder="Enter email" />
        <TextInput textKey="password" label="Password" placeholder="Enter password" type="password"/>
        <button onClick={() => this.handleClick()}>
          Sign Up
        </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    registerForm: state.registerForm
  }
}

export default connect(mapStateToProps, { sendRegisterForm })(Register)