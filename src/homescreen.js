import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Context from './context';


export default function HomeScreen(props) {
  const {navigate} = props.navigation;
  const context = useContext(Context)

  return (
    <View style={styles.container}>
    <Text>Home Screen </Text>
    {context.auth
      ?  <Text> Logged In </Text>
      :  <Text> Logged Out </Text>}
      <Button
        title='Login'
        onPress={() => { navigate('Loading')} }
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
