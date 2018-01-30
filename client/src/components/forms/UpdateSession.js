// Libraries & Methods
import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { updateSession, deleteSession } from '../../actions'

// Components
import Button from '../buttons'
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

class UpdateSession extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      createdAt: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleUpdateSession = this.handleUpdateSession.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.session)
  }

  handleInputChange(inputField, e) {
    const tempObject = {}
    tempObject[inputField] = e.target.value;
    this.setState(tempObject)
  }

  handleUpdateSession(event) {
    this.props.updateSession(this.state)
  }

  render() {
    console.log(this.state)
    return (
      <Container>

        <Input
          onChange={(e) => this.handleInputChange("name", e)}
          value={this.state.name}
          placeholder="Session Name"
        />

        <Input
          onChange={(e) => this.handleInputChange("createdAt", e)}
          value={this.state.createdAt}
          placeholder="Session Start Time"
        />

        <Button
          onClick={this.props.hideUpdateSessionForm}
        >Discard Changes</Button>

        <Button
          onClick={this.handleUpdateSession}
        >Update Session</Button>
      </Container>

    )
  }
}

export default connect(null, { updateSession, deleteSession })(UpdateSession)