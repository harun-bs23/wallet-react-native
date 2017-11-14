import React from 'react';

import { Text, Button, TouchableHighlight, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class ID_Document extends React.Component{

	static navigationOptions=(props)=> {
      return {
      	title: 'ID Document',
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
	    	<TouchableHighlight underlayColor='#3D95CE' style={styles.icon} onPress={() => props.navigation.navigate('SettingGetVerified')}>
		    	<View style={ styles.back }>
			    	<Icon
			            name="angle-left"
			            size={30}
			            color="white" />   
			        <Text style={ styles.textStyle }>Get verified</Text>
		        </View>
			</TouchableHighlight> 
		),
		headerRight: <Text></Text>
      }	
    }; 

    _onPress= () => { 
    	this.props.navigation.navigate('UploadIdDocument');
    }

	render(){
		return(
			<View style={ styles.total_page }>
			    <View style={ styles.messege }>
			    	<Text style={{ fontSize:16, paddingLeft:10 }}>Instructions</Text>
			    	<Text></Text>
			    	<Text style={{ fontSize:14, paddingLeft:10 }}>Instructions of why and how to upload a picture of ID document.</Text>
			    </View>
			    <View style={{ flex:3.5 }}>
			    </View>
			    <TouchableHighlight style={ styles.wrap} onPress={ ()=> {this._onPress()} }>
					<View style={ styles.loginButton} >
		            	<Text style={{ color: '#FFFFFF' }}>Next</Text>
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
	messege:{
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#FAFAFA',
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
