import React from 'react';
import { Button, Text, KeyboardAvoidingView, StyleSheet, View, ScrollView, TextInput, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Login from './../auth/Login';
const url = "https://rehive.com/api/3/auth/register/";

export default class SignUp extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
    	first_name:'',
    	last_name:'',
    	email: '',
    	mobile_number:'',
    	company: '',
    	password1:'',
    	password2:''
    };
  }

    static navigationOptions = ({ navigation }) => ({

    title: 'Create new account',
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
    headerLeft: <Text></Text>,
    headerRight: (
    	<TouchableHighlight underlayColor='null' onPress={ ()=> navigation.navigate('Login') }>
			<View>
				<Text style={{ color: '#FFFFFF', paddingRight:10, fontSize: 15, }}>Cancel</Text>
			</View>
		</TouchableHighlight>
    )
  });

  _onPress= async() =>{
  	    let data = this.state;
  		let response = await fetch(url, {
  			method: 'POST',
  			 headers: {
  			 	'Content-Type': 'application/json'
  			 },
  			 body: JSON.stringify(data),
  		});
  		
  		let responeJSON = await response.json();
  		if(responeJSON.status=='success'){
  			Alert.alert("Successfully Registerd");
  		}
  		else{
  			Alert.alert("Registration not successful");
  		}
  }

	render(){
		return(
			<View style={ styles.total_page }>

				<View style={{ flex:13 }}>
					<KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={100}>
					    <ScrollView style={{ flex:1 }} keyboardDismissMode={'interactive'}>

						   
						    	<View style={ styles.box2 }>
								    <View style={{ flex:1 }}>
								        <View style={{ flex:1 }}>
										    <Text style={styles.designText}>Email</Text>
											<TextInput
										        style={ styles.input_style }
										        placeholder='Email adress'
										        onChangeText={(text) => this.setState({email:text})}
										    />
								        </View> 

									   	<View style={{ flex:1 }}>
										    <Text style={styles.designText}>Mobile</Text>
											<TextInput
										        style={ styles.input_style }
										        placeholder='Mobile number'
										        onChangeText={(text) => this.setState({mobile_number:text})}
										    />
									    </View> 

									   	<View style={{ flex:1 }}>
										    <Text style={styles.designText}>First name</Text>
											<TextInput
										        style={ styles.input_style }
										        placeholder='First name'
										        onChangeText={(text) => this.setState({first_name:text})}
										    />
									    </View> 

									    <View style={{ flex:1 }}> 
										    <Text style={styles.designText}>Company</Text>
											<TextInput
										        style={ styles.input_style }
										        placeholder='e.g. rehive'
										        onChangeText={(text) => this.setState({company:text})}
										    />
									    </View>

									    <View style={{ flex:1 }}>
										    <Text style={styles.designText}>Password</Text>
											<TextInput
										        style={ styles.input_style }
										        placeholder='Password'
										        onChangeText={(text) => this.setState({password1:text})}
										    />
									    </View>

									    <View style={{ flex:1 }}>
										    <Text style={styles.designText}>Confirm password</Text>
											<TextInput
										        style={ styles.input_style }
										        placeholder='Retype password'
										        onChangeText={(text) => this.setState({password2:text})}
										    />
									    </View>
								    </View> 
								</View>
						    	    
					    </ScrollView >
					</KeyboardAvoidingView>				    
				</View>	   

				<TouchableHighlight style={ styles.wrap} onPress={ ()=> {this._onPress()} }>
					<View style={ styles.loginButton} >
		            	<Text style={{ color: '#FFFFFF' }}>Create</Text>
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
		backgroundColor: '#3D95CE',
	    fontSize: 20, 
	    fontWeight: 'bold'
	},
	total_page:{
		flex:1,
		backgroundColor: '#FFFFFF',
	},
	input_style:{
		height: 35, 
		borderColor: 'white', 
		borderWidth: 0,
		paddingLeft: 4,
	},
	designText:{
		flex:1,
		paddingTop:15,
		marginLeft:4,
	},
	forgotPassword:{
		flex:1,
		justifyContent: 'center',
        alignItems: 'center',
	},
	box:{
        flex:4,
		marginBottom:1,
		marginTop:15,
		marginLeft:10,
		marginRight:10,
        borderWidth:0.5,
		borderColor:'lightgrey'
	},
	box2:{
	    flex:1,
		marginBottom:1,
		marginTop:0,
		marginLeft:10,
		marginRight:10,
	    borderBottomWidth :0,
		borderColor:'white'
	},
	container: {
	    flex: 1,
	    flexDirection: 'column',
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
});