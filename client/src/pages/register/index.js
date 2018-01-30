// This is authenticated sign up
import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions";
import Button from "../../components/buttons";
import { Redirect } from "react-router-dom";

import styled from "styled-components";
import appStyles from "../../assets/css/appStyles";

const Container = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: 400px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PageHeading = styled.h1`
  font-weight: 600;
  color: ${appStyles.colors.primary};
  font-size: 40px;
  text-align: center;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
class AuthRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick() {
    console.log("register handle click");
    this.props.createUser(this.state);
  }

  handleInputChange(input, e) {
    let tempObject = {};
    tempObject[input] = e.target.value;
    this.setState(tempObject);
  }

  componentWillReceiveProps(nextProps) {
    const { token } = nextProps.user;
    if (token) {
      localStorage.setItem("token", token);
    }
    const retrievedToken = localStorage.getItem("token");
  }

  render() {
    return (
      <Container className="shadow">
        <Form>
          <PageHeading>Register</PageHeading>
          <Inputs>
            <input
              type="text"
              onChange={e => this.handleInputChange("firstName", e)}
              placeholder="First Name"
            />
            <input
              type="text"
              onChange={e => this.handleInputChange("lastName", e)}
              placeholder="Last Name"
            />
            <input
              type="text"
              onChange={e => this.handleInputChange("email", e)}
              placeholder="Email"
            />
            <input
              type="text"
              onChange={e => this.handleInputChange("password", e)}
              placeholder="Password"
            />

            <Button primary className="filled" onClick={this.handleClick}>
              CREATE ACCOUNT
            </Button>
          </Inputs>
          <div>
            <a href="https://gym-up-server.herokuapp.com/api/v1/oauth/google">
              <Button warning primary className="filled">
                REGISTER WITH GOOGLE
              </Button>
            </a>
          </div>
        </Form>
        {this.props.user.loggedIn && <Redirect to="/profile" />}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { createUser })(AuthRegister);
