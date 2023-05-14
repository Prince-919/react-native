import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const CustomButton = () => {
  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight>
          <Text style={[styles.button, styles.success]}>Sucess</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[styles.button, styles.primary]}>Warning</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[styles.button, styles.error]}>Press Me</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[styles.button, styles.yellow]}>Click Here</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#2a9d8f',
    color: '#fff',
    padding: 10,
    margin: 20,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 25,
    width: 200,
  },
  success: {
    backgroundColor: '#06d6a0',
  },
  primary: {
    backgroundColor: '#00b4d8',
  },
  error: {
    backgroundColor: '#c9184a',
  },
  yellow: {
    backgroundColor: '#ffcb77',
  },
});
