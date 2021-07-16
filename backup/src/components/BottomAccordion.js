import React, { useState } from 'react'
import styled from 'styled-components/native'
import Accordion from 'react-native-collapsible/Accordion'
import { View, Text } from 'react-native'
import { List } from 'react-native-paper'
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';


const AccordionContainer = styled.View`
  width: 80%;
  justify-content: center;
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

const BottomAccodion = ({onPress, value}) => {
  
  return(
    <AccordionContainer>
      
    </AccordionContainer>
  )
}

export default BottomAccodion


{/* <Collapse>
        <CollapseHeader>
          <View>
            <Text>수빌리지</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View>
            <Text>Aaron Bennet</Text>
          </View>
        </CollapseBody>
      </Collapse> */}