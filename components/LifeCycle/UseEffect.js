import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    console.warn('Update data');
  }, [data]);

  useEffect(() => {
    console.warn('Update Counting ');
  }, [count]);

  return (
    <>
      <View style={styles.box}>
        <Text style={styles.count}>{count}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.count}>{data}</Text>
      </View>
      <Button title="Count" onPress={() => setCount(count + 1)} />
      <Button title="Data" onPress={() => setData(data + 1)} />
    </>
  );
};

export default UseEffect;

const styles = StyleSheet.create({
  count: {
    color: 'white',
    fontSize: 30,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'royalblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 150,
    marginTop: 20,
  },
});
