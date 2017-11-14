import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';

export default class Email extends React.Component{
	render(){
			return(
				<View style={styles.container}>
					<Text>{ this.props.data.email }</Text>
					{
					   this.props.data.verified === true ?	
					   <Text>Verified</Text> : null 
					}
					<View style={{ flex:1, flexDirection:'row' }}>
					{
					   this.props.data.verified !== true ?	
					   <TouchableHighlight underlayColor='null' style={ styles.button } onPress={ ()=> {} }>
					       <Text style={{ color: 'white' }}>Verify</Text>
					   </TouchableHighlight>
					   :
					   null 
					}
					{
					   this.props.data.primary === true ?	
					   <TouchableHighlight underlayColor='null' style={ [styles.button, { backgroundColor: '#abebc6',width:55 }] } onPress={ ()=> {null} }>
					       <Text style={{ color: 'white' }}>Primary</Text>
					   </TouchableHighlight>
					   :
					   <TouchableHighlight underlayColor='null' style={ [styles.button, { width:100 }] } onPress={ ()=> {} }>
					       <Text style={{ color: 'white' }}>Make primary</Text>
					   </TouchableHighlight> 
					}
					{
					   this.props.data.primary !== true ?	
					   <TouchableHighlight underlayColor='null' style={ [styles.button, { backgroundColor: 'red' }] } onPress={ ()=> {} }>
					       <Text style={{ color: 'white' }}>Delete</Text>
					   </TouchableHighlight>
					   :
					   null 
					}
					</View>

				</View>
			);
		}
}

const styles=StyleSheet.create({
	container:{
		paddingLeft:2,
		paddingTop:10,
		paddingBottom:10,
	    borderBottomWidth: 1,
	    borderBottomColor: "lightgrey",
	},
	button:{
		backgroundColor: '#3D95CE',
		height: 25,
		width:45,
		borderRadius:3,
		justifyContent: 'center',
        alignItems: 'center',
        marginRight:5,
        marginTop:5,
	},
	item:{
		flex:1,
		alignItems:'center',
		flexDirection:'row',
	},
	icon:{
		flex:1,
		alignItems:'flex-end',
	}
});
