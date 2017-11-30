// Libraries & Methods
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleEditSessionForm } from '../../actions'

// Styles
import styled from 'styled-components'
import appStyles from '../../assets/css/appStyles'

// Components
import SessionPanel from '../../components/sessionPanel'
import WorkoutPanel from '../../components/workoutPanel'
import NewSessionForm from '../../components/forms/NewSession'
import EditSessionForm from '../../components/forms/EditSession'
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
    this.state = {}
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.props.toggleEditSessionForm()
  }

  render() {
    return (
      <Container>
        {
          this.props.showEditSessionForm &&
          <EditSessionForm session={this.props.session} />
        }

        {
          this.props.session.sessionMasterId
            ?
            <div>
              <SessionPanel {...this.props.session} />
              <button onClick={this.handleToggleClick}>Show/Hide Edit Session Form</button>
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

const mapStateToProps = state => ({
  session: state.currentSession,
  showEditSessionForm: state.userInterface.showEditSessionForm
})

export default connect(mapStateToProps, { toggleEditSessionForm })(NewSession)