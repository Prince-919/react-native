import React from 'react';
import {View, Text} from 'react-native';

class Student extends React.Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 25, color: 'green'}}>Student Component</Text>
      </View>
    );
  }
}

export default Student;
