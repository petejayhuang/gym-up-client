import React, { Component } from 'react';
import TextInput from '../../components/forms/TextInput'
import { connect } from 'react-redux';
// import { sendRegisterForm } from '../../actions';

import styled from 'styled-components';
import appStyles from '../../assets/css/appStyles';

const PageHeading = styled.h1`
  font-weight: 600;
  color: ${appStyles.colors.primary};
  font-size: 40px;
  text-align: center;
`
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SignUpButton = styled.button`
  margin-top: 40px;  
  border-radius: 3px;
  border: none;
  color: white;
  background-color: ${appStyles.colors.primary};
  height: 40px;
  width: 300px;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background-color: ${appStyles.colors.secondary}
  }
`

class Login extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
  }

  render() {
    return (
      <div>
        <div>
          <PageHeading>Log In</PageHeading>
        </div>
        <Form>
          <TextInput textKey="email" label="Email" value="aosda@gmail.com" />
          <TextInput textKey="password" label="Password" type="password" value="aosidjaoisdj" />
          <SignUpButton onClick={this.handleClick}>
            Log In
        </SignUpButton>
        </Form>
      </div>

    )
  }
}

export default connect()(Login)