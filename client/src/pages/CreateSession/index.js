// Libraries & Methods
import React, { Component } from "react";
import { connect } from "react-redux";
import { finishSession } from "../../actions";

// Styles
import styled from "styled-components";
import appStyles from "../../assets/css/appStyles";

// Components
import SingleSessionPanel from "../../components/panels/SingleSessionPanel";
import WorkoutPanel from "../../components/panels/WorkoutPanel";
import CreateSessionForm from "../../components/forms/CreateSession";
import UpdateSessionForm from "../../components/forms/UpdateSession";
import CreateWorkoutForm from "../../components/forms/CreateWorkout";
import Button from "../../components/buttons";

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
class CreateSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateSessionForm: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.finishSession();
  }
  render() {
    return (
      <Container>
        {!this.props.currentSession.id && <CreateSessionForm />}

        {this.state.showUpdateSessionForm && (
          <UpdateSessionForm session={this.props.session} />
        )}

        {this.props.currentSession.id && (
          <div>
            <SingleSessionPanel session={this.props.currentSession} />
            <CreateWorkoutForm />
            <WorkoutPanel workouts={this.props.currentSession.workouts} />
          </div>
        )}
        {this.props.currentSession.id && (
          <Button className="filled" onClick={this.handleClick}>
            Finish Session
          </Button>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentSession: state.currentSession
});

export default connect(mapStateToProps, { finishSession })(CreateSession);
