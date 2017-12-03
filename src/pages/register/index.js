import React, { Component } from 'react'
import TextInput from '../../components/forms/TextInput'
import { connect } from 'react-redux'
import { createUser } from '../../actions'
import Button from '../../components/buttons'

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

            <Button
              primary
              className="filled"
              onClick={this.handleClick}>
              REGISTER
              </Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default connect(null, { createUser })(Register)