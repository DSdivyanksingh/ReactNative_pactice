/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import Signup from './component/src/signup';
 
 
 const App = () =>{
   return (
     <View>
       <Signup/>
     </View>
     
   );
 };
 export default App;
 