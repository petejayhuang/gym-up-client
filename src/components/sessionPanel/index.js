import React from 'react'

import styled from 'styled-components'
import appStyles from '../../assets/css/appStyles'

const Container = styled.div`
  height: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SessionPanel = (props) => {

  return (
    <Container>
      <div>
        Session "{props.name}" started at {props.createdAt} (edit)
      </div>
    </Container>
  )
}

export default SessionPanel