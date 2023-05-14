import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const Login = props => {
  const [name, setName] = useState('');
  const age = 20;
  return (
    <View>
      <Text style={styles.title}>Login Screen</Text>

      <TextInput
        placeholder="Enter your name"
        style={styles.inputBox}
        onChangeText={text => setName(text)}
      />

      <View style={styles.btn}>
        <Button
          title="Home"
          onPress={() => props.navigation.navigate('Home', {name, age})}
        />
      </View>
      {/* <View style={styles.btn}>
        <Button
          title="Register"
          onPress={() => props.navigation.navigate('Register')}
        />
      </View> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    margin: 20,
  },
  btn: {
    padding: 30,
  },
  inputBox: {
    borderWidth: 2,
    borderRadius: 25,
    padding: 5,
    borderColor: '#ccc',
  },
});
