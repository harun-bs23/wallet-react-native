import React from 'react';

import { Text, TextInput, Button, TouchableHighlight, View, StyleSheet, ListView, AsyncStorage, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const url = 'https://rehive.com/api/3/auth/mobile/verify/';
import MobileNumber from './../../../components/MobileNumber';

export default class VerifyMobileNumber extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = { 
	    	otp: '',
	     };
    }

	static navigationOptions=(props)=> {
      return {
      	title: 'Verify mobile',
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
	    	<TouchableHighlight underlayColor='#3D95CE' style={styles.icon} onPress={() => props.navigation.navigate('SettingMobileNumber')}>
		    	<View style={ styles.back }>
			    	<Icon
			            name="angle-left"
			            size={30}
			            color="white" />   
			        <Text style={ styles.textStyle }>Mobile numbers</Text>
		        </View>
			</TouchableHighlight> 
		),
		headerRight: <Text></Text>
      }	
    }; 

    _onPress = async()=>{
    	const token = await AsyncStorage.getItem('token');

	    const headers = {
	        'Content-Type': 'application/json',
			'Authorization': 'Token ' + token,
	    }

	    const data={
	    	otp: this.state.otp
	    }

	    const response = await fetch(url,{
    		method:'POST',
    		headers: headers,
    		body: JSON.stringify(data)
    	});

    	const responseJson = await response.json();
    	
    	if(responseJson.status == 'success'){
    		this.props.navigation.navigate('SettingMobileNumber');
    	}
    	else{
    		Alert.alert(
    			'Error',
    			responseJson.message,
    			[{ text: 'OK' }],
    		);
    	}

    }

	render(){
		return(
			<View style={ styles.total_page }>
			 	<View style={{ flex: 1 }}>
					<View style={ styles.container }>
					    <Text style={{ paddingLeft: 15, paddingTop: 10 }}>OTP</Text>
						<TextInput
						    autoCorrect={false}
						    placeholder="12345"
					        style={{ height: 50,  borderWidth: 0, paddingLeft: 15}}
					        onChangeText={(otp) => this.setState({otp})}
					        value={this.state.otp}
					    />
				    </View>
			    </View>
			    <TouchableHighlight style={ styles.wrap} onPress={ ()=> { this._onPress() } }>
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
	container:{
		paddingLeft:13,
		paddingRight:13,
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

