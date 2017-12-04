// Libraries & Methods
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleUpdateSessionForm } from '../../actions'

// Styles
import styled from 'styled-components'
import appStyles from '../../assets/css/appStyles'

// Components
import SingleSessionPanel from '../../components/panels/SingleSessionPanel'
import WorkoutPanel from '../../components/panels/WorkoutPanel'
import CreateSessionForm from '../../components/forms/CreateSession'
import UpdateSessionForm from '../../components/forms/UpdateSession'
import CreateWorkoutForm from '../../components/forms/CreateWorkout'
import Button from '../../components/buttons'

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
class CreateSession extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showUpdateSessionForm: false
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
          this.props.session.sessionMasterId
            ? ''
            : <CreateSessionForm />
        }

        {
          this.state.showUpdateSessionForm &&
          <UpdateSessionForm session={this.props.session} />
        }


        {
          this.props.session.sessionMasterId &&
          <div>
            <SingleSessionPanel session={this.props.session} />
            <CreateWorkoutForm />
            <WorkoutPanel workouts={this.props.session.workouts} />
          </div>
        }
        {
          this.props.session.workouts.length > 0 &&
          <Button className="filled">Finish Session</Button>
        }

      </Container>
    )
  }
}

const mapStateToProps = state => ({
  session: state.currentSession
})

export default connect(mapStateToProps, { toggleUpdateSessionForm })(CreateSession)