// Libraries & Methods
import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { createWorkout } from '../../actions'

// Styles
import styled from 'styled-components'
import appStyles from '../../assets/css/appStyles'

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

const AddWorkoutButton = styled.button`
  margin-top: 40px;  
  border-radius: 3px;
  border: none;
  color: white;
  background-color: ${appStyles.colors.primaryLight};
  height: 40px;
  width: 300px;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background-color: ${appStyles.colors.primary};
  }
`

class NewWorkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      weight: "",
      repetitions: "",
      sets: "",
      difficulty: "",
      comment: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddWorkout = this.handleAddWorkout.bind(this)
  }

  handleInputChange(key, e) {
    console.log("handleInputChange()")
    const tempObject = {}
    tempObject[key] = e.target.value;
    this.setState(tempObject)
  }

  handleAddWorkout(event) {
    console.log("handleAddWorkout()")
    this.props.createWorkout(this.state)
  }


  render() {
    console.log("nWorkout state", this.state)
    return (
      <div>
        <Input
          onChange={(e) => this.handleInputChange("name", e)}
          value={this.state.name}
          placeholder="Workout Name"
        />
        <Input
          onChange={(e) => this.handleInputChange("weight", e)}
          value={this.state.weight}
          placeholder="Workout Weight"
        />
        <Input
          onChange={(e) => this.handleInputChange("repetitions", e)}
          value={this.state.repetitions}
          placeholder="Workout Repetitions"
        />

        <AddWorkoutButton
          onClick={this.handleAddWorkout}
        >Add Workout</AddWorkoutButton>
      </div>

    )
  }
}

export default connect(null, { createWorkout })(NewWorkout)