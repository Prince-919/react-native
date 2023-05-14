import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const OwnApi = () => {
  const [data, setData] = useState([]);
  const getApiData = async () => {
    const URL = 'http://10.0.2.2:3000/users';
    const data = await fetch(URL);
    const json = await data.json();
    setData(json);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <View>
      <Text>OwnApi</Text>
      {data.length
        ? data.map((item, index) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default OwnApi;
