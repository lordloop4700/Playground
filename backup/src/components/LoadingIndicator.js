import React from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const LoadingIndicator = () => {
  return(
    <Container>
      <ActivityIndicator />
    </Container>
  )
}

export default LoadingIndicator