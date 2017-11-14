import React from 'react';
import { Button, Text, KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableHighlight, Alert, ScrollView, AsyncStorage } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

const url = "https://rehive.com/api/3/auth/login/";

export default class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
    	user: '',
    	company: '',
    	password:'',
    };
  }

  static navigationOptions = {
    title: 'Login',
	headerStyle: {
        backgroundColor: '#3D95CE',
		height: 38,
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 15,
      fontWeight:'normal',
      alignSelf:'center',
    },
    headerLeft: <Text></Text>,
    headerRight: <Text></Text>
  };

_onPress= async() => {
	//this.props.navigation.navigate('Drawer');
    let data=this.state;
    let response = await fetch(url,{
    	method: 'POST',
    	headers: {
  			 	'Content-Type': 'application/json'
  		},
    	body: JSON.stringify(data),
    });
    let responeJSON = await response.json();
	if(responeJSON.status=='success'){
        AsyncStorage.setItem('token',responeJSON.data.token);
        AsyncStorage.setItem('user',responeJSON.data.user.first_name);
        AsyncStorage.setItem('mail',responeJSON.data.user.email);
        AsyncStorage.setItem('proPic',responeJSON.data.user.profile);
		this.props.navigation.navigate('Drawer');
	}
	else{
		Alert.alert("Login Failled!");
	}
}

render(){
	return(
		<View style={ styles.total_page }>
            <View style={{ flex:10 }}>
            	<KeyboardAvoidingView style={styles.container } behavior={'padding'} keyboardVerticalOffset={100}>
				    <ScrollView style={{ flex:1 }}>

						<View style={ styles.box }>

						    <View style={ styles.box2 }>

							    <View style={{ flex:1 }}>
								    <Text style={styles.designText}>Email or mobile number</Text>
									<TextInput
									    autoCorrect={false}
								        style={ styles.input_style }
								        placeholder='e.g. ghjgthello@rehive.com'
								        onChangeText={(text) => this.setState({user:text})}
								    />
							    </View> 

							    <View style={{ flex:1 }}> 
								    <Text style={styles.designText}>Company</Text>
									<TextInput
									    autoCorrect={false}
								        style={ styles.input_style }
								        placeholder='e.g. rehive'
								        onChangeText={(text) => this.setState({company:text})}
								    />
							    </View>

							    <View style={{ flex:1 }}>
								    <Text style={styles.designText}>Password</Text>
									<TextInput
										autoCorrect={false}
									    secureTextEntry={true}
								        style={ styles.input_style }
								        placeholder='Password'
								        onChangeText={(text) => this.setState({password:text})}
								    />
							    </View>

							    <TouchableHighlight underlayColor='null' style={ styles.wrap} onPress={ ()=> { this._onPress() } }>
									<View style={ styles.loginButton} >
						            	<Text style={{ color: '#FFFFFF' }}>Login</Text>
									</View>
		                        </TouchableHighlight>

								<View style={styles.forgotPassword}>
								    <TouchableHighlight underlayColor='null' onPress={ ()=> this.props.navigation.navigate('ForgotPassword')}>
										<Text style={ styles.buttonText }>Forgot password?</Text>
									</TouchableHighlight>
						        </View>

						    </View>	
						</View> 	

				    </ScrollView> 
			    </KeyboardAvoidingView>
            </View>

		    <TouchableHighlight underlayColor='null' style={ styles.wrap} onPress={ ()=> this.props.navigation.navigate('SignUp') }>
				<View style={ styles.button} >
	            	<Text style={ styles.buttonText }>Create new account</Text>
				</View>
		    </TouchableHighlight>		

			<View style={ { flex:4.5 } }>
			</View>

		</View>
		);
	}
}

const styles=StyleSheet.create({
	login_bar:{
		flex: 1,
		flexDirection: 'row',
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
		height: 40,
		paddingLeft: 4,
		paddingBottom:15,
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
        paddingTop:15,
        paddingBottom:15,
	},
	buttonText:{
		color: '#3D95CE',
		fontSize:12,
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
    	width:320,
    	borderColor: '#3D95CE',
    	backgroundColor: '#3D95CE',
	},

	wrap:{
		flex:2,
	    justifyContent: 'center',
		alignItems: 'center',
		paddingTop:15,
	},
	box:{
        flex:4,
		marginBottom:1,
		marginTop:15,
		marginLeft:10,
		marginRight:10,
        borderWidth:0.5,
elevation: 2,
		borderColor:'lightgrey'
	},
	box2:{
	    flex:1,
		marginBottom:1,
		marginTop:10,
		marginLeft:20,

		marginRight:20,
	    borderBottomWidth :0,
		borderColor:'white'
	},
	container: {
	    flex: 1,
	    flexDirection: 'column',
    },
});