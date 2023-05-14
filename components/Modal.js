import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Modal} from 'react-native';

const Dialog = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Modal transparent={true} visible={show} animationType="fade">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text}>I am Modal and Dialog Box</Text>
            <Button
              title="Close"
              color={'#465775'}
              onPress={() => setShow(false)}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.openButton}>
        <Button title="Open" color={'#59C9A5'} onPress={() => setShow(true)} />
      </View>
    </>
  );
};

export default Dialog;

const styles = StyleSheet.create({
  openButton: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#59C9A5',
    padding: 30,
    borderRadius: 5,
  },
  text: {
    fontSize: 25,
    marginBottom: 15,
  },
});
