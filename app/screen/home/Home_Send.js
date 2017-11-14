import React from 'react';

import { Text, Button, StyleSheet, View, TouchableHighlight, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home_Send extends React.Component{

	static navigationOptions=(props)=> {
      return {
      	title: 'Amount',
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
	    	<TouchableHighlight underlayColor='#3D95CE' style={styles.icon} onPress={() => props.navigation.navigate('Home')}>
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

    constructor(){
    	super()
    	this.state={
    		amount: 0,
    		note:''
    	}
    }
   
	render(){
		return(
			<View style={ styles.total_page }>
			    <View style={ styles.box }>

				    <View style={ styles.box2 }>

					    <View style={{ flex:1 }}>
						    <Text style={styles.designText}>Amount</Text>
							<TextInput
								keyboardType='numeric'
						        style={ styles.input_style }
						        placeholder='Amount'
						        onChangeText={(text) => this.setState({amount : text})}
						    />
					    </View> 

					    <View style={{ flex:1 }}> 
						    <Text style={styles.designText}>Note</Text>
							<TextInput
						        style={ styles.input_style }
						        placeholder='Note'
						        onChangeText={(text) => this.setState({note : text})}
						    />

					    </View>
				    </View>	
				</View>    
				<View style={{ flex:8 }}>
				</View>
				<TouchableHighlight onPress={ ()=> { this.props.navigation.navigate('Home_Send_To') } }>
					<View style={ styles.loginButton} >
		            	<Text style={{ color: '#FFFFFF' }}>Next</Text>
					</View>
	            </TouchableHighlight>
            </View>
		);
	}
}

const styles=StyleSheet.create({
    loginButton:{
	    justifyContent: 'center',
		alignItems: 'center',
        paddingTop:7,
        paddingBottom:7,
        borderWidth: 1,
    	borderRadius: 0,
    	width:390,
    	height:47,
    	borderColor: '#3D95CE',
    	backgroundColor: '#3D95CE',
	},
	box:{
        flex:4,
		marginBottom:1,
		marginTop:10,
		marginLeft:10,
		marginRight:10,
        borderWidth:0.5,
		borderColor:'white'
	},
	box2:{
	    flex:1,
		marginBottom:1,
		marginTop:0,
		marginLeft:0,
		marginRight:0,
	    borderBottomWidth :0,
		borderColor:'white'
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
	icon:{
       paddingLeft: 5,
	},
});