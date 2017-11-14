import React from 'react';

import { Text, Button, TouchableHighlight, TextInput, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddBitcoinAddress extends React.Component{

	static navigationOptions=(props)=> {
      return {
      	title: 'Add bitcoin address',
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
	    	<TouchableHighlight underlayColor='#3D95CE' style={styles.icon} onPress={() => props.navigation.navigate('SettingBitcoinAddress')}>
		    	<View style={ styles.back }>
			    	<Icon
			            name="angle-left"
			            size={30}
			            color="white" />   
			        <Text style={ styles.textStyle }>Back</Text>
		        </View>
			</TouchableHighlight> 
		),
		headerRight: <Text></Text>
      }	
    }; 
   
	render(){
		return(
			<View style={ styles.total_page }>
			    <View style={ styles.box }>
				    <Text style={styles.designText}>Bitcoin address</Text>
						<TextInput
				          style={ styles.input_style }
				          placeholder="e.g. 1L7m9D8gCS4DMCdzB8Sd9kk9X9yxG4nKUT"
				          onChangeText={(text) => this.setState({text})} />
		        </View>
		        <View style={{ flex: 7 }}>  
		        </View>
                <View>
			        <TouchableHighlight style={ styles.wrap} onPress={ ()=> {} }>
						<View style={ styles.loginButton} >
			            	<Text style={{ color: '#FFFFFF' }}>Save</Text>
						</View>
	                </TouchableHighlight>
                </View>
			</View>
		);
	}
}


const styles=StyleSheet.create({
	total_page:{
		flex:1,
		backgroundColor:'#FFFFFF',
	},
	box:{
		flex:1,
		paddingTop:10,
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

	wrap:{
	    justifyContent: 'center',
		alignItems: 'center',
	},
	input_style:{
		height: 35, 
		borderColor: 'white', 
		borderWidth: 0,
		paddingLeft: 15,
	},
	designText:{
		flex:1,
		paddingTop:5,
		marginLeft:4,
		paddingLeft:10,
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
	}
});