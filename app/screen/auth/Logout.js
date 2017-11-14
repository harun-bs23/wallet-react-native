import React from 'react';
import { Button, Text, KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableHighlight, Alert, ScrollView, AsyncStorage } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

const url = "https://rehive.com/api/3/auth/logout/";

export default class Logout extends React.Component{

 componentWillMount(){
 	this.logout();
 }

 logout= async() => {
 	const token = await AsyncStorage.getItem('token');
    let response = await fetch(url,{
    	method: 'POST',
    	headers: {
  			 	'Content-Type': 'application/json',
  			 	'Authorization': 'Token '+token
  		},
    });
  let responseJSON = await response.json();
    
	if(responseJSON.status=='success'){
		await AsyncStorage.removeItem('user');
		await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('mail');
		await AsyncStorage.removeItem('proPic');
		this.props.navigation.navigate('Login');
	}
	else{
		Alert.alert("Logout Failled!");
	}
}

render(){
	return(
		<View style={styles.container}>
          <Text style={{ fontSize: 30 }}>Logging Out</Text>
		</View>
	);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
})