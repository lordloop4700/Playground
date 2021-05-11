import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Mybutton from './Mybutton';

export default function App() {
  return (
    //<Fragment></Fragment> 특정 역할을 하지 않는 컴포넌트. 단축 문법으로 <></>로 사용이 가능하다.
    <View style={styles.container}>
      <Text>당신은 임포스터였습니다!</Text>
      <StatusBar style="auto" />
      <Button title="shibal" onPress={ ()=> alert('Click!')}></Button>
      <Text style={{fontSize: 20}}> My button component</Text>
      <TouchableOpacity>
        <Text onPress={() => alert("check")}>show</Text>
      </TouchableOpacity>
      <EventButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
