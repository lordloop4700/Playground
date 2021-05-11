import React from 'react';
import { Pressable, Text } from 'react-native';

const MyButton = () =>{
    return(
        <Pressable accessibilityRole="button">
            <Text style={{ fontSize: 20 }}>My button 2</Text>
        </Pressable>
    );
};

export default MyButton;