import {View, Text} from 'react-native';

export const UserData = () => {
  return (
    <View>
      <Text style={{fontSize: 30, backgroundColor: 'green'}}>User Data</Text>
      <Text style={{fontSize: 20}}>Name : "Prince"</Text>
      <Text style={{fontSize: 20}}>Age : 22</Text>
      <Text style={{fontSize: 20}}>email : "prince@test.com"</Text>
    </View>
  );
};

export const CompanyData = () => {
  return (
    <View>
      <Text style={{fontSize: 30, backgroundColor: 'purple'}}>
        Company Data
      </Text>
      <Text style={{fontSize: 20}}>Name : "ABC Company"</Text>
      <Text style={{fontSize: 20}}>employee : 500</Text>
      <Text style={{fontSize: 20}}>products : "ABC Products"</Text>
    </View>
  );
};
