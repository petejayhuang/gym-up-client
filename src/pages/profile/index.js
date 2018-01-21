import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser, updateUser, deleteUser } from "../../actions";

import UpdateForm from "./UpdateForm";
import Button from "../../components/buttons";

import styled from "styled-components";
import appStyles from "../../assets/css/appStyles";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PageHeading = styled.h1`
  font-weight: 600;
  color: ${appStyles.colors.primary};
  font-size: ${appStyles.fontSizes.heading};
  text-align: center;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false,
      showDiscardChangesButton: false,
      showSaveChangesButton: false,
      showUpdateButton: true,
      showDeleteButton: true
    };
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleSaveChangesClick = this.handleSaveChangesClick.bind(this);
    this.handleDiscardChangesClick = this.handleDiscardChangesClick.bind(this);
  }
  handleUpdateClick() {
    this.setState({
      showUpdateForm: true,
      showUpdateButton: false,
      showDeleteButton: false,
      showDiscardChangesButton: true,
      showSaveChangesButton: true
    });
  }

  handleDeleteClick() {
    this.props.deleteUser();
  }

  handleSaveChangesClick() {
    this.setState({
      showUpdateForm: false,
      showUpdateButton: true,
      showDeleteButton: true,
      showDiscardChangesButton: false,
      showSaveChangesButton: false
    });
    this.props.updateUser();
  }

  handleDiscardChangesClick() {
    this.setState({
      showUpdateForm: false,
      showUpdateButton: true,
      showDeleteButton: true,
      showDiscardChangesButton: false,
      showSaveChangesButton: false
    });
  }

  render() {
    return (
      <Page>
        <div>
          <PageHeading>Your User Profile</PageHeading>
          <div>{this.props.user.email}</div>
          <div>{this.props.user.username}</div>
          <div>{this.props.user.firstName}</div>
          <div>{this.props.user.lastName}</div>
          {this.state.showUpdateForm ? <UpdateForm /> : ""}
        </div>
        <div>
          {this.state.showUpdateButton ? (
            <Button onClick={this.handleUpdateClick}>Update</Button>
          ) : (
            ""
          )}

          {this.state.showDeleteButton ? (
            <Button onClick={this.handleDeleteClick}>Delete</Button>
          ) : (
            ""
          )}

          {this.state.showDiscardChangesButton ? (
            <Button onClick={this.handleDiscardChangesClick}>
              Discard Changes
            </Button>
          ) : (
            ""
          )}

          {this.state.showSaveChangesButton ? (
            <Button onClick={this.handleSaveChangesClick}>Save</Button>
          ) : (
            ""
          )}
        </div>
      </Page>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps, { fetchUser, deleteUser, updateUser })(
  Profile
);
