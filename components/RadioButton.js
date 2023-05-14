import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {skills} from './Skills';

const RadioButton = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);
  return (
    <>
      {skills.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedRadio === item.id ? (
                <View style={styles.radioBg}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    fontSize: 25,
    color: '#52b69a',
  },
  radio: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#52b69a',
    borderWidth: 2,
    margin: 10,
  },
  radioBg: {
    width: 30,
    height: 30,
    backgroundColor: '#52b69a',
    borderRadius: 15,
    margin: 3,
  },
});
