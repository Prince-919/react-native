const {View, Text} = require('react-native');

const User = ({name, age}) => {
  return (
    <View>
      <Text style={{fontSize: 20}}>Name : {name}</Text>
      <Text style={{fontSize: 20}}>Age : {age}</Text>
    </View>
  );
};
export default User;
