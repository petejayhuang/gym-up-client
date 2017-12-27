import React, { Component } from "react";
import TextInput from "../../components/forms/TextInput";
import { connect } from "react-redux";
// import { sendRegisterForm } from '../../actions';
import Button from "../../components/buttons";

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

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    return (
      <div>
        <div>
          <PageHeading>Log In</PageHeading>
        </div>
        <Form>
          <TextInput textKey="email" label="Email" />
          <TextInput textKey="password" label="Password" type="password" />
          <Button primary className="filled" onClick={this.handleClick}>
            LOG IN
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect()(Login);
