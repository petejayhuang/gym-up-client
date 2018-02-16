// Libraries & Methods
import React, { Component } from "react";
import { deleteWorkout } from "../../actions";
import { connect } from "react-redux";

// Components
import UpdateWorkout from "../forms/UpdateWorkout";
import Button from "../buttons";

// Styles
import styled, { css } from "styled-components";
import appStyles from "../../assets/css/appStyles";

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const WorkoutCard = styled.div`
  width: 150px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 10px;
  p {
    margin: 0px;
    padding: 0px;
  }
`;
const Buttons = styled.div``;

class WorkoutPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateWorkoutId: null
    };
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.findWorkoutAndRenderUpdateForm = this.findWorkoutAndRenderUpdateForm.bind(
      this
    );
    this.hideUpdateWorkoutForm = this.hideUpdateWorkoutForm.bind(this);
  }

  handleUpdateClick(id) {
    console.log("update workout with id:", id);
    this.setState({ updateWorkoutId: id });
  }
  handleDeleteClick(sessionMasterId, sessionDetailId) {
    this.props.deleteWorkout(sessionMasterId, sessionDetailId);
  }

  hideUpdateWorkoutForm() {
    this.setState({ updateWorkoutId: null });
  }

  findWorkoutAndRenderUpdateForm(id) {
    if (id === null) {
      return "";
    }

    const workoutToUpdate = this.props.workouts.find(
      workout => workout.id === id
    );

    return (
      <UpdateWorkout
        hideUpdateWorkoutForm={this.hideUpdateWorkoutForm}
        workout={workoutToUpdate}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.props.workouts.map((workout, index) => {
          console.log(
            "this is a single workout in workouts",
            workout.sessionMasterId
          );
          return (
            <WorkoutCard className="shadow" key={index}>
              <strong>Session Master ID:</strong> {workout.sessionMasterId}
              <strong>Session Detail Id:</strong> {workout.id}
              <strong>Workout Name:</strong> {workout.Workout.name}
              <strong>Workout Id:</strong> {workout.workoutId}
              <strong>Workout Order</strong> {workout.workoutOrder}
              <strong>Weight:</strong> {workout.weight}
              <strong>Reps: </strong>
              {workout.reps}
              <Buttons>
                <Button
                  className="small"
                  onClick={() => this.handleUpdateClick(workout.id)}
                >
                  update
                </Button>
                <Button
                  className="small"
                  onClick={() =>
                    this.handleDeleteClick(workout.sessionMasterId, workout.id)
                  }
                >
                  delete
                </Button>
              </Buttons>
            </WorkoutCard>
          );
        })}
        {this.findWorkoutAndRenderUpdateForm(this.state.updateWorkoutId)}
      </Container>
    );
  }
}

export default connect(null, { deleteWorkout })(WorkoutPanel);
