import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

const ApiFaltList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApiData();
  });
  const getApiData = async () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    const data = await fetch(API_URL);
    const json = await data.json();
    setData(json);
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>Api Call and FlatList</Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                fontSize: 20,
                padding: 20,
                borderWidth: 2,
              }}>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default ApiFaltList;
