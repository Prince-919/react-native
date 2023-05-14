import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PlatformOS = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Platform : {Platform.OS}</Text>
      {Platform.OS === 'android' ? (
        <Text
          style={{width: 100, height: 100, backgroundColor: '#219ebc'}}></Text>
      ) : (
        <Text
          style={{width: 100, height: 100, backgroundColor: '#e63946'}}></Text>
      )}
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
};

export default PlatformOS;

const styles = StyleSheet.create({
  text: {
    color: Platform.OS === 'android' ? '#ffcad4' : '#284b63',
  },
});
