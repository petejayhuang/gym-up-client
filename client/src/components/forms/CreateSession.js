// Libraries & Methods
import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { createSession } from "../../actions";
import Button from "../buttons";

// Styles
import styled from "styled-components";
import appStyles from "../../assets/css/appStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding-left: 20px;
  padding-right: 20px;
  width: 300px;
  background: white;
  border-radius: 8px;
`;
const Input = styled.input`
  height: 40px;
  border: none;
  width: 300px;
  border: 1px solid ${appStyles.colors.grey};
  border-left: 2px solid ${appStyles.colors.primary};
  padding-left: 10px;
  font-size: 18px;
`;

class CreateWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionName: null,
      start: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStartSession = this.handleStartSession.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      name: event.target.value,
      startTime: moment().format("DD-MM-YYYY HH:MM")
    });
  }

  handleStartSession(event) {
    this.props.createSession(this.state);
  }

  render() {
    return (
      <Container>
        <InputWrapper className="shadow">
          <Input
            onChange={this.handleInputChange}
            value={this.state.sessionName}
            placeholder="Session Name"
          />
        </InputWrapper>

        <Button className="filled" onClick={this.handleStartSession}>
          Start Session
        </Button>
      </Container>
    );
  }
}

export default connect(null, { createSession })(CreateWorkout);
