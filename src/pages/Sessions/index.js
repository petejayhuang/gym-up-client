// Libraries & Methods
import React, { Component } from 'react'
import { deleteSession } from '../../actions'

// Components
import UpdateSession from '../../components/forms/UpdateSession'

// Styles
import styled from 'styled-components'
import appStyles from '../../assets/css/appStyles'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
const SessionCard = styled.div`
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

class Sessions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updateSessionId: false
    }
    this.handleUpdateClick = this.handleUpdateClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleUpdateClick(id) {
    this.setState({ updateSessionId: id })
  }
  handleDeleteClick(id) {
    this.props.deleteSession(id)
  }
  findSessionAndRenderUpdateForm(id) {
    if (id === null) { return "" }
    const session = this.props.workouts.find(session => session.id === id)
    return <UpdateSession session={session} />
  }

  render() {
    return (
      <Container>
        {props.workouts.map((session, index) => {
          return (
            <div>
              <SessionCard key={index}>
                <p>Session Name: {session.name}</p>
                <p>Start Time: {session.startTime}</p>
                <p>End Time: {session.endTime}</p>
                <button onClick={() => handleUpdateClick(session.id)}>(update)</button>
                <button onClick={() => handleDeleteClick(session.id)}>(delete)</button>
              </SessionCard>
            </div>
          )
        })}
        {findSessionAndRenderUpdateForm(this.state.updateSessionId)}
      </Container>
    )
  }
}


export default Sessions