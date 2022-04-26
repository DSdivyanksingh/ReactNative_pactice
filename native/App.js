import React from 'react';
import { Text, View,TextInput, Button, StyleSheet } from 'react-native';
import Texts from './components/test_component';
import Lists from './components/list.js';

const App = () => {
  return (
    <View>
      <Text style={styles.textstyle}>Form in native</Text>
      <Texts/>
      <Lists/>
    </View>
  );
}
const styles=StyleSheet.create({
  textstyle :{
    textAlign:"center",
    fontSize: 50,
    color: 'red'

  }
})

export default App;