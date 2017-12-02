// Libraries & Methods
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateWorkout } from '../../actions'

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
  border-left: 2px solid ${appStyles.colors.warning};
  width: 300px;
  padding-left: 10px;
  font-size: 18px;
`
const DiscardChangesButton = styled.button`
  margin-top: 20px;
  border-radius: 3px;
  border: 1px solid ${appStyles.colors.warningLight};
  color: ${appStyles.colors.warningLight};
  background-color: white;
  height: 40px;
  width: 300px;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background-color: ${appStyles.colors.warning};
    color: ${appStyles.colors.warningLight};
  }
`
const UpdateWorkoutButton = styled.button`
  border-radius: 3px;
  border: none;
  color: white;
  background-color: ${appStyles.colors.warningLight};
  height: 40px;
  width: 300px;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background-color: ${appStyles.colors.warning};
  }
`

class UpdateWorkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      weight: "",
      repetitions: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleUpdateWorkout = this.handleUpdateWorkout.bind(this)
  }

  handleInputChange(key, e) {
    const tempObject = {}
    tempObject[key] = parseInt(e.target.value);
    this.setState(tempObject)
  }

  handleUpdateWorkout(event) {
    this.props.updateWorkout(this.state, this.props.workoutId)
  }

  componentWillMount() {
    this.setState(this.props.workout)
  }

  render() {
    console.log("update workout component state", this.state)
    return (
      <Container>
        <div>
          {this.props.workout.name}
        </div>
        <label>Weight</label>
        <Input
          onChange={(e) => this.handleInputChange("weight", e)}
          value={this.state.weight}
        />
        <label>Repetitions</label>
        <Input
          onChange={(e) => this.handleInputChange("repetitions", e)}
          value={this.state.reps}
        />


        <DiscardChangesButton
          onClick={this.props.hideUpdateWorkoutForm}
        >Discard Changes</DiscardChangesButton>

        <UpdateWorkoutButton
          onClick={this.handleUpdateWorkout}
        >Update Workout</UpdateWorkoutButton>
      </Container>
    )
  }
}

export default connect(null, { updateWorkout })(UpdateWorkout)