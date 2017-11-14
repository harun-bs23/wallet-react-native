import React from 'react';

import { Text, Button, StyleSheet, View, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Promotions extends React.Component{

	static navigationOptions=(props)=> {
      return {
      	title: 'Promotions',
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
					<Text>Your referral code is XYZ</Text>
				</View>
				<View style={{ flex:5 }}>
				</View>
				<TouchableHighlight onPress={ ()=> { this.props.navigation.navigate('PromotionsAmount')} }>
					<View style={ styles.loginButton} >
		            	<Text style={{ color: '#FFFFFF' }}>Redeem</Text>
					</View>
	            </TouchableHighlight>
            </View>
		);
	}
}

const styles=StyleSheet.create({
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
	box:{
		flex:1,
        justifyContent: 'center',
        alignItems: 'center',
		backgroundColor:'#FAFAFA',
	},
	total_page:{
		flex:1,
		backgroundColor: '#FFFFFF',
	},
});