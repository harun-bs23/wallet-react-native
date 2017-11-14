import React from 'react';

import { Text, Button, TouchableHighlight, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import CountryPicker from 'react-native-country-picker-modal';
import ModalDropdown from 'react-native-modal-dropdown';

export default class SavePromotionsAmount extends React.Component{

	static navigationOptions=(props)=> {
      return {
      	title: 'Congratulations, your promotion has been applied',
      	header: null,
	    headerStyle: {
	        backgroundColor: '#58d68d',
			height: 125,
        },
	    headerTitleStyle: {
	      color: 'white',
	      fontSize: 18,
	      fontWeight:'normal',
	      textAlign:'center',
	      alignSelf:'center'
	    },
		headerLeft: <Text></Text>,
		headerRight: <Text></Text>
      }	
    }; 
   
	render(){
		return(
			<View style={ styles.total_page }>
			    <View style={ styles.container }>
			    	<Text style={ styles.textStyle }>Congratulations, your promotion has</Text> 
			    	<Text style={ styles.textStyle }>been applied</Text>
				</View> 
				<View style={{ flex:3 }}>
				</View>   

				<TouchableHighlight style={ styles.wrap} onPress={ ()=> { this.props.navigation.navigate('Home')} }>
					<View style={ styles.loginButton} >
		            	<Text style={{ color: '#FFFFFF' }}>Done</Text>
					</View>
                </TouchableHighlight>
			</View>	
		);
	}
}

const styles=StyleSheet.create({
	total_page:{
		flex:1,
		backgroundColor: '#FFFFFF',
	},
	container:{
		flex:1, 
		backgroundColor: '#58d68d', 
		justifyContent: 'center', 
		alignItems: 'center'
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
        color: 'white',
        fontSize: 18,
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
