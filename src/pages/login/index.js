import React, { Component } from "react";
import TextInput from "../../components/forms/TextInput";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import Button from "../../components/buttons";
import { Redirect } from "react-router-dom";

import styled from "styled-components";
import appStyles from "../../assets/css/appStyles";

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
const Input = styled.input`
  height: 40px;
  margin-top: 10px;
  border: none;
  border: 1px solid ${appStyles.colors.grey};
  border-left: 2px solid ${appStyles.colors.primary};
  width: 300px;
  padding-left: 10px;
  font-size: 18px;
`;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(key, e) {
    this.setState({
      [key]: e.target.value
    });
  }
  handleSubmit() {
    this.props.loginUser(this.state);
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div>
          <PageHeading>Log In</PageHeading>
        </div>
        <Form>
          <Inputs>
            <Input
              type="text"
              placeholder="Email"
              onChange={e => this.handleInputChange("email", e)}
            />
            <Input
              type="text"
              placeholder="Password"
              onChange={e => this.handleInputChange("password", e)}
            />
            <Button primary className="filled" onClick={this.handleSubmit}>
              LOG IN
            </Button>
          </Inputs>
        </Form>
        {this.props.user.loggedIn && <Redirect to="/profile" />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { loginUser })(Login);
