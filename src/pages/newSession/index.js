// Libraries & Methods
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Styles
import styled from 'styled-components'

// Components
import SessionPanel from '../../components/sessionPanel'
import WorkoutPanel from '../../components/workoutPanel'
import NewSessionForm from '../../components/forms/NewSession'
import NewWorkoutForm from '../../components/forms/NewWorkout'

const Container = styled.div`
  margin: 30px auto;
  width: 400px;
  border: 1px solid red;
`

class NewSession extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    console.log("props in NewSession", Array.isArray(this.props.session.workouts))
    return (
      <Container>
        {
          this.props.session.startTime
            ?
            <div>
              <SessionPanel {...this.props.session} />
              <WorkoutPanel workouts={this.props.session.workouts} />
              <NewWorkoutForm />

            </div>

            : <NewSessionForm />
        }
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    session: state.currentSession
  }
}

export default connect(mapStateToProps, {})(NewSession)