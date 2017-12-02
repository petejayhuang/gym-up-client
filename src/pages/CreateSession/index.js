// Libraries & Methods
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleUpdateSessionForm } from '../../actions'

// Styles
import styled from 'styled-components'
import appStyles from '../../assets/css/appStyles'

// Components
import SessionPanel from '../../components/panels/SessionPanel'
import WorkoutPanel from '../../components/panels/WorkoutPanel'
import CreateSessionForm from '../../components/forms/CreateSession'
import UpdateSessionForm from '../../components/forms/UpdateSession'
import CreateWorkoutForm from '../../components/forms/CreateWorkout'

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

class CreateSession extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showUpdateSessionForm
    }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.props.toggleUpdateSessionForm()
  }

  render() {
    return (
      <Container>
        {
          this.props.showUpdateSessionForm &&
          <UpdateSessionForm session={this.props.session} />
        }

        {
          this.props.session.sessionMasterId
            ?
            <div>
              <SessionPanel {...this.props.session} />


              <WorkoutPanel workouts={this.props.session.workouts} />
              <CreateWorkoutForm />
              {
                this.props.session.workouts.length > 0 &&
                <FinishSession>Finish Session</FinishSession>
              }
            </div>

            : <CreateSessionForm />
        }
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  session: state.currentSession,
  showUpdateSessionForm: state.userInterface.showUpdateSessionForm
})

export default connect(mapStateToProps, { toggleUpdateSessionForm })(CreateSession)