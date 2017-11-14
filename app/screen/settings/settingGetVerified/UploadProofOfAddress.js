import React from 'react';

import { Text, Button, Image, TouchableHighlight, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { ImagePicker } from 'expo';

export default class UploadProofOfAddress extends React.Component{

	static navigationOptions=(props)=> {
      return {
      	title: 'Upload',
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
	    	<TouchableHighlight underlayColor='#3D95CE' style={styles.icon} onPress={() => props.navigation.navigate('Proof_of_address')}>
		    	<View style={ styles.back }>
			    	<Icon
			            name="angle-left"
			            size={30}
			            color="white" />   
			        <Text style={ styles.textStyle }>Proof of address</Text>
		        </View>
			</TouchableHighlight> 
		),
		headerRight: <Text></Text>
      }	
    }; 

    _onPress= () => { 
    	this.props.navigation.navigate('Settings');
    }

    _pickImage = async()=>{
    	let res = await ImagePicker.launchImageLibraryAsync({
    		
    	});

    	console.log(res.uri);

    	if(!res.cancelled){
    		this.props.navigation.navigate("DocumentUpload", { url: res.uri });
    	}
    }

	render(){
		return(
			<View style={ styles.total_page }>
			    <View style={{ flex:1 }}>
			    	<TouchableHighlight underlayColor='null' style={ [styles.wrap, { paddingTop:20 }]} onPress={ ()=> { this._pickImage() } }>
						<View style={ styles.uploadButton } >
			            	<Text style={{ color: '#FFFFFF' }}>Upload or take a photo</Text>
						</View>
                    </TouchableHighlight>
			    </View>
			    <TouchableHighlight style={ styles.wrap} onPress={ ()=> {this._onPress()} }>
					<View style={ styles.loginButton} >
		            	<Text style={{ color: '#FFFFFF' }}>Cancel</Text>
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
	uploadButton:{
	    justifyContent: 'center',
		alignItems: 'center',
        paddingTop:7,
        paddingBottom:7,
        borderWidth: 1,
    	borderRadius: 3,
    	width:350,
    	height:42,
    	borderColor: '#3D95CE',
    	backgroundColor: '#3D95CE',
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
    	borderColor: '#E74C3C',
    	backgroundColor: '#E74C3C',
	},

	wrap:{
	    justifyContent: 'center',
		alignItems: 'center',
	},
});
