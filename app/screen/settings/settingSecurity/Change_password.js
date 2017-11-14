import React from 'react';

import { Text, Button, TouchableHighlight, View, StyleSheet, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Change_password extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = { text: '' };
    }

	static navigationOptions=(props)=> {
      return {
      	title: 'Change password',
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
			    <View style={{ flex:1 }}>
					<Text style={{ paddingLeft: 15, paddingTop: 10 }}>Old password</Text>
					<TextInput
					    placeholder="Old password"
				        style={{ height: 50,  borderWidth: 0, paddingLeft: 15, paddingBottom: 10}}
				        onChangeText={(text) => this.setState({text})}
				        value={this.state.text}
				    />

				    <Text style={{ paddingLeft: 15, paddingTop: 10 }}>New password</Text>
					<TextInput
					    placeholder="New password"
				        style={{ height: 50,  borderWidth: 0, paddingLeft: 15, paddingBottom: 10}}
				        onChangeText={(text) => this.setState({text})}
				        value={this.state.text}
				    />

				    <Text style={{ paddingLeft: 15, paddingTop: 10 }}>Confirm password</Text>
					<TextInput
					    placeholder="Confirm password"
				        style={{ height: 50,  borderWidth: 0, paddingLeft: 15, paddingBottom: 10}}
				        onChangeText={(text) => this.setState({text})}
				        value={this.state.text}
				    />
				</View>    

				<TouchableHighlight style={ styles.wrap} onPress={ ()=> {} }>
					<View style={ styles.loginButton} >
		            	<Text style={{ color: '#FFFFFF' }}>Change password</Text>
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
