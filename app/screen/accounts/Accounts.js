import React from 'react';

import { Text, Button, TouchableHighlight, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Accounts extends React.Component{

	static navigationOptions=(props)=> {
      return {
      	title: 'Accounts',
	    headerStyle: {
	        backgroundColor: '#3D95CE',
			height: 38,
        },
	    headerTitleStyle: {
	      color: 'white',
	      fontSize: 15,
	      fontWeight:'normal',
	      textAlign:'center',
	      alignSelf:'center'
	    },
    	headerLeft:(
		  <TouchableHighlight style={{paddingLeft: 10, paddingBottom: 0 }}>
		    <Icon
		      name="ios-menu-outline"
		      size={30}
		      color="white"
		      onPress={() => props.navigation.navigate('DrawerOpen')}
		    />
		  </TouchableHighlight>
		), 
		headerRight: <Text></Text>
      }	
    }; 
   
	render(){
		return(
			<View style={ styles.total_page }>
				<View style={ styles.box }>
					<Text>Hello There</Text>
				</View>
				<View style={{ flex:9 }}>
				</View>
		    </View>		
		);
	}
}

const styles= StyleSheet.create({
	total_page:{
		flex:1,
		backgroundColor: '#FFFFFF',
	},
	box:{
		flex:1,
		backgroundColor:'#FAFAFA',
	}
});