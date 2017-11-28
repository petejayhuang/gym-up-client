// Libraries & Methods
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Styles
import styled from 'styled-components'
import appStyles from '../../assets/css/appStyles'
// Components
import SessionPanel from '../../components/sessionPanel'
import WorkoutPanel from '../../components/workoutPanel'
import NewSessionForm from '../../components/forms/NewSession'
import NewWorkoutForm from '../../components/forms/NewWorkout'

const Container = styled.div`
  background-color: ${appStyles.colors.backroundGrey};
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FinishSession = styled.button`
  margin-top: 40px;  
  border-radius: 3px;
  border: 1px solid ${appStyles.colors.warning};
  color: ${appStyles.colors.warning};
  background-color: white;
  height: 40px;
  width: 300px;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background-color: ${appStyles.colors.warning};
    color: white;
  }
`

class NewSession extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Container>
        {
          this.props.session.sessionMasterId
            ?
            <div>
              <SessionPanel {...this.props.session} />
              <WorkoutPanel workouts={this.props.session.workouts} />
              <NewWorkoutForm />
              {
                this.props.session.workouts.length > 0 &&
                <FinishSession>Finish Session</FinishSession>
              }
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