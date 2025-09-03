import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const age = 22;
  const licenseyears = 5;
  let feedback = '';

  if (age >= 18) 
    if (licenseyears >= 3) 
      {
        feedback = 'You are a qualified, safe driver.';
      }
      else 
        {
        feedback = 'You are allowed to drive. YAY!'
        } else {
        feedback = 'You are not allowed to drive yet.'
        }
      


  return (
    <View style={styles.container}>
     <Text style={styles.response}> {feedback} </Text> {/* message to be displayed to the user */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  response: {
    fontSize: 28,
    color: 'white'
  }
});
