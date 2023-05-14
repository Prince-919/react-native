import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

const ApiCall = () => {
  const [data, setData] = useState(undefined);

  const getApiData = async () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    const data = await fetch(API_URL);
    const json = await data.json();
    setData(json);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <ScrollView>
      <Text style={{fontSize: 30}}>API Call</Text>
      {data
        ? data.map(item => (
            <View
              style={{padding: 20, borderBottomColor: '#ccc', borderWidth: 2}}>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
};

export default ApiCall;
