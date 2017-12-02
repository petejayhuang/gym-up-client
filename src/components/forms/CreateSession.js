// Libraries & Methods
import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { createSession } from '../../actions'

// Styles
import styled from 'styled-components'
import appStyles from '../../assets/css/appStyles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const StartSessionButton = styled.button`
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
    background-color: ${appStyles.colors.primaryLight};
  }
`

class CreateWorkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sessionName: null,
      start: null
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStartSession = this.handleStartSession.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      name: event.target.value,
      startTime: moment().format("DD-MM-YYYY HH:MM")
    })
  }

  handleStartSession(event) {
    this.props.createSession(this.state)
  }

  render() {
    return (
      <Container>
        <Input
          onChange={this.handleInputChange}
          value={this.state.sessionName}
          placeholder="Session Name"
        />

        <StartSessionButton
          onClick={this.handleStartSession}
        >Start Session</StartSessionButton>
      </Container>

    )
  }
}

export default connect(null, { createSession })(CreateWorkout)