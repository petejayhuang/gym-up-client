// Libraries & Methods
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSessions, deleteSession } from "../../actions";

// Components
import UpdateSession from "../../components/forms/UpdateSession";

// Styles
import styled from "styled-components";
import appStyles from "../../assets/css/appStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SessionCard = styled.div`
  width: 500px;
  height: 100px;
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
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 45%;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 3px;
  background: white;
  border: 1px solid ${appStyles.colors.warning};
  color: ${appStyles.colors.warning};
  &:hover {
    background-color: ${appStyles.colors.warning};
    color: white;
  }
`;

class Sessions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateSessionId: null
    };
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.findSessionAndRenderUpdateForm = this.findSessionAndRenderUpdateForm.bind(
      this
    );
    this.hideUpdateSessionForm = this.hideUpdateSessionForm.bind(this);
  }

  componentWillMount() {
    this.props.fetchSessions();
  }

  handleUpdateClick(id) {
    this.setState({ updateSessionId: id });
  }
  handleDeleteClick(id) {
    console.log("handleDeleteClick in pages/Sessions/index.js", id);
  }

  hideUpdateSessionForm() {
    this.setState({ updateSessionId: null });
  }

  findSessionAndRenderUpdateForm(id) {
    if (id === null) {
      return "";
    }
    const session = this.props.sessions.find(
      session => session.id === id
    );
    return (
      <UpdateSession
        hideUpdateSessionForm={this.hideUpdateSessionForm}
        session={session}
      />
    );
  }

  render() {
    return (
      <Container>
        Your sessions
        {this.props.sessions.map((session, index) => {
          return (
            <SessionCard className="shadow" key={index}>
              <p>Session Id: {session.id}</p>
              <p>Session Name: {session.sessionName}</p>
              <p>Start Time: {session.start}</p>
              <Buttons>
                <Button
                  onClick={() =>
                    this.handleUpdateClick(session.id)
                  }
                >
                  (update)
                </Button>
                <Button
                  onClick={() =>
                    this.handleDeleteClick(session.id)
                  }
                >
                  (delete)
                </Button>
              </Buttons>
            </SessionCard>
          );
        })}
        {this.findSessionAndRenderUpdateForm(this.state.updateSessionId)}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  sessions: state.sessions
});

export default connect(mapStateToProps, { fetchSessions })(Sessions);
