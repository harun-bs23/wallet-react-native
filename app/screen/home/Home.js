import React from 'react';
import { Button, Text, Image, StyleSheet, View, Alert, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Home extends React.Component{

	static navigationOptions=(props)=> {
      return {
      	headerStyle: {
	        backgroundColor: '#3D95CE',
	        height: 130,
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
				    <View style={ styles.box2 }>
					    <Text style={{ fontSize:20 }}>Welcome to Rehive</Text>
					    <Text></Text>
					    <Text></Text>
					    <Text>Please verify your email adress to redeem any unclaimed
					    transactions. Pull to refresh your balance.</Text>
					</View> 
				</View> 

			    <View style={{ flex:2 }}>

				</View>

				<TouchableHighlight onPress={ ()=> { this.props.navigation.navigate('Home_Send') } }>
					<View style={ styles.loginButton} >
		            	<Text style={{ color: '#FFFFFF' }}>Send</Text>
					</View>
                </TouchableHighlight>

		    </View>
		);
	}
}

const styles=StyleSheet.create({
	status_bar:{
		flex:1,
		justifyContent: 'center',
	    alignItems: 'center',
		backgroundColor: 'steelblue',
	    fontSize: 40, 
	    fontWeight: 'bold'
	},
	total_page:{
		flex:1,
	},
	input_style:{
		height: 40, 
		borderColor: 'white', 
		borderWidth: 1
	},
	designText:{
		flex:1,
		paddingTop:15,
	},
	forgotPassword:{
		flex:1,
		justifyContent: 'center',
        alignItems: 'center',
	},
	box:{
        flex:1,
		borderBottomWidth :1,
		borderLeftWidth :1,
		marginLeft:10,
		marginTop:15,
		marginRight:10,
		borderTopWidth:0.5,
		borderColor:'lightgrey',
		backgroundColor: '#FFFFFF',
	},
	box2:{
		marginBottom:1,
		marginTop:15,
		marginLeft:15,
		marginRight:10,
	    borderBottomWidth :0,
		borderColor:'white',

	},
    loginButton:{
	    justifyContent: 'center',
		alignItems: 'center',
        paddingTop:7,
        paddingBottom:7,
        borderWidth: 1,
    	borderRadius: 0,
    	width:390,
    	height:47,
    	borderColor: '#3D95CE',
    	backgroundColor: '#3D95CE',
	},
});