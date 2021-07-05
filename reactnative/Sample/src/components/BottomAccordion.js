import React, { useState } from 'react'
import styled from 'styled-components/native'


const AccordionContainer = styled.View`
  flex: 1;
  background-color: #33A23D4D;
`

const Accodion = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Accordions">
      <List.Accordion
        title="Uncontrolled Accordion">
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
  )
}

const BottomAccodion = () => {
  return(
    <AccordionContainer>
      
    </AccordionContainer>
  )
}

export default BottomAccodion