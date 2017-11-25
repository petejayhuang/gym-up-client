import React from 'react'

import styled from 'styled-components'
import appStyles from '../../assets/css/appStyles'

const Container = styled.div`
  border: 1px solid green;
  height: 50px;
  text-align: center;
`

const SessionPanel = (props) => {

  return (
    <Container>
      New Session Started!
      {props.name}
      {props.startTime}
      (edit)
    </Container>
  )
}

export default SessionPanel