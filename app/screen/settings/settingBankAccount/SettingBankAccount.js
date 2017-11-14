import React from 'react';

import { Text, Button, TouchableHighlight, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class WithdrawBankAccount extends React.Component{

	static navigationOptions=(props)=> {
      return {
      	title: 'Bank accounts',
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
	    	<TouchableHighlight underlayColor='#3D95CE' style={styles.icon} onPress={() => props.navigation.navigate('Settings')}>
		    	<View style={ styles.back }>
			    	<Icon
			            name="angle-left"
			            size={30}
			            color="white" />   
			        <Text style={ styles.textStyle }>Settings</Text>
		        </View>
			</TouchableHighlight> 
		),
	    headerRight: <Text></Text>
      }	
    }; 
   
   onPress= ()=>{
   	 this.props.navigation.navigate("SettingAddBankAccount");
   }
	render(){
		return(
			<View style={ styles.total_page }>
				<TouchableHighlight style={ styles.container } onPress={ ()=>{ this.onPress() } }>
					<View style={ styles.item }>
					    <Text>Add bank account</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles=StyleSheet.create({
	container:{
		height:50,
		borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        justifyContent:'center',
        paddingLeft:10,
	},
	total_page:{
		flex:1,
		backgroundColor:'#FFFFFF'
	},
	item:{
		flex:1,
		alignItems:'center',
		flexDirection:'row',
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
	}
});
