// Libraries & Methods
import React, { Component } from 'react'
import { deleteWorkout } from '../../actions'
import { connect } from 'react-redux'

// Components
import UpdateWorkout from '../forms/UpdateWorkout'
import Button from '../buttons'

// Styles
import styled, { css } from 'styled-components'
import appStyles from '../../assets/css/appStyles'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
const WorkoutCard = styled.div`
  width: 300px;
  border: 1px solid ${appStyles.colors.grey};
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  p {
    margin: 0px;
    padding: 0px;
  }
  box-shadow: 2px 2px 5px ${appStyles.colors.grey};
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

class WorkoutPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updateWorkoutId: null
    }
    this.handleUpdateClick = this.handleUpdateClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.findWorkoutAndRenderUpdateForm = this.findWorkoutAndRenderUpdateForm.bind(this)
    this.hideUpdateWorkoutForm = this.hideUpdateWorkoutForm.bind(this)
  }

  handleUpdateClick(id) {
    console.log("update workout with id:", id)
    this.setState({ updateWorkoutId: id })
  }
  handleDeleteClick(id) {
    console.log("delete workout with id:", id)
    // this isn't working yet
    // this.props.deleteWorkout(id)
  }

  hideUpdateWorkoutForm() {
    this.setState({ updateWorkoutId: null })
  }

  findWorkoutAndRenderUpdateForm(id) {
    if (id === null) { return "" }

    const workout = this.props.workouts.find(workout => workout.sessionDetailId === id)

    return <UpdateWorkout hideUpdateWorkoutForm={this.hideUpdateWorkoutForm} workout={workout} />
  }

  render() {
    return (
      <Container>
        {this.props.workouts.map((workout, index) => {
          return (

            <WorkoutCard key={index}>

              <p><strong>Database ID:</strong> {workout.workoutId}</p>
              <p><strong>Session Detail ID:</strong> {workout.sessionDetailId}</p>
              <p><strong>Exercise</strong> {workout.workoutOrder}</p>
              <p><strong>Name:</strong> {workout.name}</p>
              <p><strong>Weight:</strong> {workout.weight}</p>
              <p><strong>Repetitions: </strong>{workout.reps}</p>
              <Buttons>
                <Button
                  warning
                  className="outline small"
                  onClick={() => this.handleUpdateClick(workout.sessionDetailId)}>
                  update
                </Button>
                <Button
                  warning
                  className="filled small"
                  onClick={() => this.handleDeleteClick(workout.sessionDetailId)}>
                  delete</Button>
              </Buttons>
            </WorkoutCard>

          )
        })}
        {this.findWorkoutAndRenderUpdateForm(this.state.updateWorkoutId)}
      </Container>
    )
  }
}


export default connect(null, { deleteWorkout })(WorkoutPanel)