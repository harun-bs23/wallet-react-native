import React from 'react';

import { Text, Button, TouchableHighlight, View, StyleSheet, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Two_factor extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = { text: '' };
    }

	static navigationOptions=(props)=> {
      return {
      	title: 'Two factor',
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
	    	<TouchableHighlight underlayColor='#3D95CE' style={styles.icon} onPress={() => props.navigation.navigate('SettingSecurity')}>
		    	<View style={ styles.back }>
			    	<Icon
			            name="angle-left"
			            size={30}
			            color="white" />   
			        <Text style={ styles.textStyle }>Security</Text>
		        </View>
			</TouchableHighlight> 
		),
		headerRight: <Text></Text>
      }	
    }; 
   
	render(){
		return(
			<View style={ styles.total_page }>
			    <View style={ styles.messege }>
			    	<Text>You can manage two factor settings at</Text>
			    	<Text>https://www.rehive.com.</Text>
			    </View>
			    <View style={{ flex:6 }}>
			    </View>
			</View>	
		);
	}
}

const styles=StyleSheet.create({
	total_page:{
		flex:1,
		backgroundColor: '#FFFFFF',
	},
	messege:{
		flex: 1,
		justifyContent: 'center',
        alignItems: 'center',
		backgroundColor: '#FAFAFA',
	},
	icon:{
       paddingLeft: 5,
	},
	back:{
		flexDirection: 'row', 
		justifyContent: 'center', 
		alignItems: 'center',
	},
	textStyle:{
		paddingLeft: 5,
        color: 'white',
        fontSize: 16,
	},
	wrap:{
	    justifyContent: 'center',
		alignItems: 'center',
	},
	button:{
	    justifyContent: 'center',
		alignItems: 'center',
        paddingTop:7,
        paddingBottom:7,
        borderWidth: 1,
    	borderRadius: 3,
    	width:150,
    	borderColor: '#3D95CE',
	},
	loginButton:{
	    justifyContent: 'center',
		alignItems: 'center',
        paddingTop:7,
        paddingBottom:7,
        borderWidth: 1,
    	borderRadius: 3,
    	width:500,
    	borderColor: '#3D95CE',
    	backgroundColor: '#3D95CE',
	},
});
