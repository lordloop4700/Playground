import React from 'react'
import styled from 'styled-components/native'

const AreaView = styled.View`
  height: 18;
  width: 47;
  border: 1.5px solid #0D3692;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`

const AreaNumber = styled.Text`
  font-size: 12px;
  font-family: 'S-CoreDream-4Regular';
`

const AreaTag = ({ area }) => {
  return(
    <AreaView>
      <AreaNumber>{ area }구역</AreaNumber>
    </AreaView>
  )
}

export default AreaTag