import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';

const UserData = ({item}) => {
  return (
    <View style={styles.list}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};

export default UserData;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  list: {
    borderWidth: 2,
    borderColor: 'royalblue',
    flexDirection: 'row',

    marginBottom: 10,
    padding: 10,
  },
  item: {
    textAlign: 'center',
    flex: 1,
    margin: 2,
    color: 'royalblue',
    fontSize: 25,
  },
});
