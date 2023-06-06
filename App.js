// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native';

// const Stack = creaeStackNavigator();


export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [display, setDisplay] = useState('');

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  const handleInput = (inputText) => {
    setText(inputText);
  }

  const handleDone = () =>{
    setDisplay(text);
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      {/* Increase Decrease Count */}
      <View style={{ backgroundColor: '#eeee90', paddingVertical: 30, paddingHorizontal: 50, marginTop: 10, justifyContent: 'center', alignItems:'center' }}>
        
        {/* <StatusBar style="auto" /> */}
        <TouchableOpacity style={styles.buttones} onPress={increase}>
          <Text>Add</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity style={styles.buttonesm} onPress={decrease}>
          <Text>Minus</Text>
        </TouchableOpacity>
      </View>
      <></>

      {/* Inputs */}
      <View style={{ backgroundColor: '#eeee90', paddingVertical: 30, paddingHorizontal: 50, marginTop: 10, justifyContent: 'center', alignItems:'center' }}>
        <TextInput
          style={styles.textinput}
          onChangeText={handleInput}
          value={text}
          placeholder="Enter something"
        />
        <TouchableOpacity onPress={handleDone}>
          <Text> Done </Text>
        </TouchableOpacity>

        <Text>Inputs: {text}</Text>
        <Text>InputtedDone: {display}</Text>
      </View>
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
  buttones: {
    backgroundColor: 'pink',
    padding: 10,
    paddingHorizontal: 40,
    marginBottom: 10
  },
  buttonesm: {
    backgroundColor: 'lavender',
    marginTop: 10,
    padding: 10,
    paddingHorizontal: 40
  },
  textinput: {
    backgroundColor: 'lightgray',
    margin: 10,
    padding: 10
  }
});
