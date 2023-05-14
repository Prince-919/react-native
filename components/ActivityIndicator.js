import {ActivityIndicator, Button, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

const Loader = () => {
  const [show, setShow] = useState(false);

  setTimeout(() => {
    setShow(false);
  }, 5000);

  return (
    <>
      <View style={styles.container}>
        {show ? <ActivityIndicator size={'large'} color={'#52b69a'} /> : null}
        <Button title="Show Loader" onPress={() => setShow(true)} />
      </View>
    </>
  );
};

export default Loader;

const styles = StyleSheet.create({
  title: {
    color: '#52b69a',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
