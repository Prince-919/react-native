import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const CustomModal = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      {show ? (
        <View style={styles.modalWrapper}>
          <View style={styles.bodyWrapper}>
            <Text style={styles.text}>Hello World!</Text>
            <Button title="Close" onPress={() => setShow(false)} />
          </View>
        </View>
      ) : null}
      <Button title="Open" onPress={() => setShow(true)} />
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 20,
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: 'rgba(50%,50%,50%,.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyWrapper: {
    backgroundColor: '#fff',
    width: 300,
    height: 200,
    padding: 20,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
});
