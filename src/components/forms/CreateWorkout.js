// Libraries & Methods
import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { lookupExercises, createWorkout } from '../../actions'

// Component 
import Button from '../buttons'

// Styles
import styled from 'styled-components'
import appStyles from '../../assets/css/appStyles'

const Container = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FormWrapper = styled.div`
  margin-top: 30px;
  padding: 30px 20px;
  background: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .1);   
  border-radius: 8px;
  margin-bottom: 10px;
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Input = styled.input`
  margin-top: 15px;
  background: white;
  height: 40px;
  border: none;
  border: 1px solid ${appStyles.colors.grey};
  border-left: 2px solid ${appStyles.colors.primary};
  width: 140px;
  padding-left: 10px;
  font-size: 18px;
`
const Dropdown = styled.select`
  height: 40px;
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

class CreateWorkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workoutId: "",
      weight: "",
      reps: ""
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
    console.log(event.target.value)
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
    this.setState({
      workoutId: "",
      weight: "",
      reps: ""
    })
  }

  render() {
    return (
      <Container>

        <FormWrapper>
          {this.renderExercisesDropdown()}
          <InputWrapper>
            <div>
              <Input
                onChange={(e) => this.handleInputChange("weight", e)}
                value={this.state.weight}
                placeholder="Weight"
              />
            </div>
            <div>
              <Input
                onChange={(e) => this.handleInputChange("reps", e)}
                value={this.state.reps}
                placeholder="Reps"
              />
            </div>
          </InputWrapper>
        </FormWrapper >

        <Button
          className="filled"
          onClick={this.handleAddWorkout}
        >Add Workout</Button>
      </Container>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises
  }
}

export default connect(mapStateToProps, { lookupExercises, createWorkout })(CreateWorkout)