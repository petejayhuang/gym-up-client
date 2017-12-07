// This is authenticated sign up 
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../../actions'
import Button from '../../components/buttons'
import { Redirect } from 'react-router-dom'

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
const Input = styled.input`
  height: 40px;
  margin-top: 10px;
  border: none;
  border: 1px solid ${appStyles.colors.grey};
  border-left: 2px solid ${appStyles.colors.primary};
  width: 300px;
  padding-left: 10px;
  font-size: 18px;
`

class AuthRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      password: "",
      passwordMatch: ""
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.doPasswordsMatch = this.doPasswordsMatch.bind(this)
  }

  handleClick() {
    if (this.state.password !== "" && this.state.password === this.state.passwordMatch) {
      const body = this.state;
      delete body.passwordMatch
      console.log("body before it is sent", body)
      this.props.createUser(body)
    }
  }

  handleInputChange(input, e) {
    let tempObject = {}
    tempObject[input] = e.target.value
    this.setState(tempObject)
  }

  doPasswordsMatch() {
    let string = '';
    (this.state.password !== "" && this.state.password === this.state.passwordMatch)
      ? string = "Passwords match"
      : string = "Passwords do not match. Please try again."

    return string;
  }

  // addUserToLocalStorage() {
  //   const user = this.props.auth;
  //   console.log(user)
  //   // localStorage.setItem('user', JSON.stringify(user));
  //   // const retrievedUser = localStorage.getItem('user');
  //   // console.log('retrievedUser: ', JSON.parse(retrievedUser));
  // }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps)
    const { token } = nextProps.user
    
    if (token) {
      localStorage.setItem('token', token)
    }
    const retrievedToken = localStorage.getItem('token');
    console.log(retrievedToken)
  }


  render() {
    return (
      <div>
        <div>
          <PageHeading>Authenticated Registration</PageHeading>
        </div>
        <Form>
          <div>
            <Input onChange={(e) => this.handleInputChange("firstName", e)} placeholder="First Name" />
            <Input onChange={(e) => this.handleInputChange("lastName", e)} placeholder="Last Name" />
            <Input onChange={(e) => this.handleInputChange("dateOfBirth", e)} placeholder="Date of Birth" />
            <Input onChange={(e) => this.handleInputChange("gender", e)} placeholder="Gender" />
            <Input onChange={(e) => this.handleInputChange("email", e)} placeholder="Email" />
            <Input onChange={(e) => this.handleInputChange("password", e)} placeholder="Password" />
            <Input onChange={(e) => this.handleInputChange("passwordMatch", e)} placeholder="Re-type password" />
            {this.doPasswordsMatch()}

            <Button

              primary
              className="filled"
              onClick={this.handleClick}>
              REGISTER
              </Button>

            {this.props.user.auth && <Redirect to="/profile" />}
          </div>
        </Form>
        <div>
          <a href="https://gym-up-server.herokuapp.com/api/v1/oauth/google"><Button warning>Register in with google</Button></a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { createUser })(AuthRegister)