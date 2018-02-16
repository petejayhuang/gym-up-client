import React, { Component } from "react";
import TextInput from "../../components/forms/TextInput";
import { connect } from "react-redux";

import styled from "styled-components";
import appStyles from "../../assets/css/appStyles";

const PageSecondaryHeading = styled.h1`
  font-weight: 600;
  color: ${appStyles.colors.secondary};
  font-size: 30px;
  text-align: center;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  render() {
    return (
      <div>
        <div>
          <PageSecondaryHeading>Update profile</PageSecondaryHeading>
        </div>
        <Form>
          <div>
            <TextInput
              textKey="firstName"
              label="First Name"
              value={this.props.user.firstName}
            />
            <TextInput
              textKey="lastName"
              label="Last Name"
              value={this.props.user.lastName}
            />
            <TextInput
              textKey="email"
              label="Email"
              value={this.props.user.email}
            />
          </div>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, null)(UpdateForm);
