import React from 'react';

import { Text, Button, TouchableHighlight, View, StyleSheet, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class SettingAddress extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = { text: '' };
    }

	static navigationOptions=(props)=> {
      return {
      	title: 'Address',
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
   
	render(){
		return(
			<View style={ styles.total_page }>
			    <View style={{ flex:1 }}>
					<Text style={{ paddingLeft: 15, paddingTop: 10 }}>Address line 1</Text>
					<TextInput
					    placeholder="Address line 1"
				        style={{ height: 40,  borderWidth: 0, paddingLeft: 15, paddingBottom: 10}}
				        onChangeText={(text) => this.setState({text})}
				        value={this.state.text}
				    />

				    <Text style={{ paddingLeft: 15, paddingTop: 10 }}>Address line 2</Text>
					<TextInput
					    placeholder="Address line 2"
				        style={{ height: 40,  borderWidth: 0, paddingLeft: 15, paddingBottom: 10}}
				        onChangeText={(text) => this.setState({text})}
				        value={this.state.text}
				    />

				    <Text style={{ paddingLeft: 15, paddingTop: 10 }}>City</Text>
					<TextInput
					    placeholder="City"
				        style={{ height: 40,  borderWidth: 0, paddingLeft: 15, paddingBottom: 10}}
				        onChangeText={(text) => this.setState({text})}
				        value={this.state.text}
				    />

				    <Text style={{ paddingLeft: 15, paddingTop: 10 }}>Province/State</Text>
					<TextInput
					    placeholder="e.g. Western Cape"
				        style={{ height: 40,  borderWidth: 0, paddingLeft: 15, paddingBottom: 10}}
				        onChangeText={(text) => this.setState({text})}
				        value={this.state.text}
				    />

				    <Text style={{ paddingLeft: 15, paddingTop: 10 }}>Country</Text>
					<TextInput
					    placeholder="Country"
				        style={{ height: 40,  borderWidth: 0, paddingLeft: 15, paddingBottom: 10}}
				        onChangeText={(text) => this.setState({text})}
				        value={this.state.text}
				    />

				    <Text style={{ paddingLeft: 15, paddingTop: 10 }}>Postal code</Text>
					<TextInput
					    placeholder="Postal code"
				        style={{ height: 40,  borderWidth: 0, paddingLeft: 15, paddingBottom: 10}}
				        onChangeText={(text) => this.setState({text})}
				        value={this.state.text}
				    />
				</View>    

				<TouchableHighlight style={ styles.wrap} onPress={ ()=> {} }>
					<View style={ styles.loginButton} >
		            	<Text style={{ color: '#FFFFFF' }}>Save</Text>
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
