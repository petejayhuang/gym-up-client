// Libraries & Methods
import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { lookupExercises, createWorkout } from '../../actions'

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

const Dropdown = styled.select`
  height: 40px;
  margin-top: 10px;
  border: none;
  border: 1px solid ${appStyles.colors.grey};
  border-left: 2px solid ${appStyles.colors.primary};
  border-radius: 0;
  appearance: none;
  background: white;
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
      workoutId: null,
      weight: null,
      reps: null,
    }

    this.handleDropdownChange = this.handleDropdownChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddWorkout = this.handleAddWorkout.bind(this)
    this.renderExercisesDropdown = this.renderExercisesDropdown.bind(this)
  }

  componentDidMount() {
    this.props.lookupExercises()
  }

  handleDropdownChange(event) {
    this.setState({
      workoutId: parseInt(event.target.value)
    })
  }

  handleInputChange(key, e) {
    const tempObject = {}
    tempObject[key] = parseInt(e.target.value)
    this.setState(tempObject)
  }

  
  renderExercisesDropdown() {
    return (
      <Dropdown onChange={this.handleDropdownChange}>
        {
          this.props.exercises.map((exercise, index) => {
            return (<option value={exercise.workoutId} key={index}> {exercise.name}</option>)
          })
        }
      </Dropdown>
    )
  }
  
  handleAddWorkout(event) {
    this.props.createWorkout(this.state)
  }

  render() {
    return (
      <Container>

        {this.renderExercisesDropdown()}

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
      </Container>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises
  }
}

export default connect(mapStateToProps, { lookupExercises, createWorkout })(NewWorkout)