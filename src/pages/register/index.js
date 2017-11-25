import React, { Component } from 'react'
import TextInput from '../../components/forms/TextInput'
import { connect } from 'react-redux'
import { createUser } from '../../actions'

import styled from 'styled-components'
import appStyles from '../../assets/css/appStyles'

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

class Register extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.createUser()
  }

  render() {
    return (
      <div>
        <div>
          <PageHeading>Register</PageHeading>
        </div>
        <Form>
          <div>
            <TextInput textKey="firstName" label="First Name" />
            <TextInput textKey="lastName" label="Last Name" />
            <TextInput textKey="DOB" label="Date of Birth" />
            <TextInput textKey="gender" label="Gender" />
            <TextInput textKey="email" label="Email" />
            <TextInput textKey="password" label="Password" type="password" />
            <SignUpButton onClick={this.handleClick}>
              Register
        </SignUpButton>
          </div>
        </Form>
      </div>
    )
  }
}

export default connect(null, { createUser })(Register)