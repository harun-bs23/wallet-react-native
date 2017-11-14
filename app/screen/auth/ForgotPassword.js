import React from 'react';
import { Button, Text, StyleSheet, View, ScrollView, TextInput, TouchableHighlight, Alert } from 'react-native';

const url = "https://rehive.com/api/3/auth/password/reset/";

export default class SignUp extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
    	user: '',
    	company: '',
    };
  }

    static navigationOptions = ({ navigation }) => ({
    title: 'Forgot password?',
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



_onPress=async()=>{
  	    let data = this.state;
  		let response = await fetch(url, {
  			method: 'POST',
  			 headers: {
  			 	'Content-Type': 'application/json'
  			 },
  			 body: JSON.stringify(data),
  		});

  		console.log(response);
  		
  		let responeJSON = await response.json();
  		if(responeJSON.status=='success'){
  			Alert.alert("An email is sent to your email");
  		}
  		else{
  			Alert.alert("Failed ! Try again");
  		}
  }

	render(){
		return(
			<View style={ styles.total_page }>

	            <View style={{ flex:13 }}>
					<ScrollView style={{ flex:1 }}>
						
							<View style={styles.box2}>

								<View style={{ flex:1 }}>
								    <View style={{ flex:1 }}>
									    <Text style={styles.designText}>Email or mobile number</Text>
										<TextInput
									        style={ styles.input_style }
									        placeholder='e.g hello@rehive.com'
									        onChangeText={(text) => this.setState({user:text})}
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

								    </View> 
								</View> 
							</View>
						
				    </ScrollView>
	            </View>   

				<TouchableHighlight style={ styles.wrap} onPress={ ()=> {this._onPress()} }>
					<View style={ styles.loginButton} >
		            	<Text style={{ color: '#FFFFFF' }}>Reset email</Text>
					</View>
                </TouchableHighlight>
	    	</View>		
		);
	}
}

const styles=StyleSheet.create({
	status_bar:{
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
	},
	designText:{
		flex:1,
		paddingTop:15,
		paddingLeft: 4,
	},
	forgotPassword:{
		flex:1,
		justifyContent: 'center',
        alignItems: 'center',
        paddingTop:15,
        paddingBottom:15,
	},
	box:{
        flex:20,
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