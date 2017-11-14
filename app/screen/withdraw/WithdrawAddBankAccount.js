import React from 'react';
import { Button, Text, KeyboardAvoidingView, StyleSheet, View, ScrollView, TextInput, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class WithdrawAddBankAccount extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
    	accountHolder:'',
    	accountNumber:'',
    	accountType: '',
    	bankName:'',
    	branchCode: '',
    	swiftCode:'',
    	IBANnumber:'',
    	BICnumber:''
    };
  }

    static navigationOptions=(props)=> {
      return {
      	title: 'Add bank account',
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
	    	<TouchableHighlight underlayColor='#3D95CE' style={styles.icon} onPress={() => props.navigation.navigate('WithdrawBankAccount')}>
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
  _onPress= () =>{

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
										    <Text style={styles.designText}>Account holder</Text>
											<TextInput
										        style={ styles.input_style }
										        placeholder='Account holder'
										        onChangeText={(text) => this.setState({accountHolder:text})}
										    />
								        </View> 

									   	<View style={{ flex:1 }}>
										    <Text style={styles.designText}>Account number</Text>
											<TextInput
										        style={ styles.input_style }
										        placeholder='Account number'
										        onChangeText={(text) => this.setState({accountNumber:text})}
										    />
									    </View> 

									   	<View style={{ flex:1 }}>
										    <Text style={styles.designText}>Account type</Text>
											<TextInput
										        style={ styles.input_style }
										        placeholder='Account type'
										        onChangeText={(text) => this.setState({accountType:text})}
										    />
									    </View> 

									    <View style={{ flex:1 }}> 
										    <Text style={styles.designText}>Bank name</Text>
											<TextInput
										        style={ styles.input_style }
										        placeholder='Bank name'
										        onChangeText={(text) => this.setState({bankName:text})}
										    />
									    </View>

									    <View style={{ flex:1 }}>
										    <Text style={styles.designText}>Branch code</Text>
											<TextInput
										        style={ styles.input_style }
										        placeholder='Branch code'
										        onChangeText={(text) => this.setState({branchCode:text})}
										    />
									    </View>

									    <View style={{ flex:1 }}>
										    <Text style={styles.designText}>Swift code</Text>
											<TextInput
										        style={ styles.input_style }
										        placeholder='Swift code'
										        onChangeText={(text) => this.setState({swiftCode:text})}
										    />
									    </View>
									    <View style={{ flex:1 }}>
										    <Text style={styles.designText}>IBAN number</Text>
											<TextInput
										        style={ styles.input_style }
										        placeholder='IBAN number'
										        onChangeText={(text) => this.setState({IBANnumber:text})}
										    />
									    </View>
									    <View style={{ flex:1 }}>
										    <Text style={styles.designText}>BIC number</Text>
											<TextInput
										        style={ styles.input_style }
										        placeholder='BIC number'
										        onChangeText={(text) => this.setState({BICnumber:text})}
										    />
									    </View>
								    </View> 
								</View>
						    	    
					    </ScrollView >
					</KeyboardAvoidingView>				    
				</View>	   

				<TouchableHighlight style={ styles.wrap} onPress={ ()=> {this._onPress()} }>
					<View style={ styles.loginButton} >
		            	<Text style={{ color: '#FFFFFF' }}>Save</Text>
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