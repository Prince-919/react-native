import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Toggle = () => {
  return (
    <View>
      <Text style={styles.title}>Prince Sharma</Text>
    </View>
  );
};

export default Toggle;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'royalblue',
    textAlign: 'center',
    margin: 20,
  },
});
