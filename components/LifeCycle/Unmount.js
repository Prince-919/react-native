import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Unmount = () => {
  return (
    <View>
      <Text style={styles.title}>UseEffect Unmount in Life Cycle </Text>
    </View>
  );
};

export default Unmount;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
});
