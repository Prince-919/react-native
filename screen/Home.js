import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = props => {
  const {name, age} = props.route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.title}> Name : {name}</Text>
      <Text style={styles.title}>Age : {age}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
