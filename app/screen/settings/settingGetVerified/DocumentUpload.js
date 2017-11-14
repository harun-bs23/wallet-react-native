import React from 'react';

import { Text, Button, Image, TouchableHighlight, View, StyleSheet, AsyncStorage, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const baseUrl = 'https://rehive.com/api/3/user/documents/';

export default class DocumentUpload extends React.Component{

	constructor(props) {
	    super(props)
	    const params = this.props.navigation.state.params
	    this.state = {
	      image: params.url,
	    }
    }

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
	    	<TouchableHighlight underlayColor='#3D95CE' style={styles.icon} onPress={() => props.navigation.navigate('UploadIdDocument')}>
		    	<View style={ styles.back }>
			    	<Icon
			            name="angle-left"
			            size={30}
			            color="white" />   
			        <Text style={ styles.textStyle }>Upload</Text>
		        </View>
			</TouchableHighlight> 
		),
		headerRight: <Text></Text>
      }	
    }; 

    _saveImage= async() => { 

    	const url = this.state.image;
    	const parts = url.split("/");
    	const name = parts[parts.length-1];

    	const file={
    		url,
    		name,
    		type: 'image/jpg',
    	}
    	var type = "other";

    	let data = new FormData();
        data.append('file', file);
        data.append('document_category', type);
        data.append('document_type', type);
        
        try{
	        const token= await AsyncStorage.getItem('token');
	        console.log(token);

console.log("before fetch call");
console.log(data);
			let response = await fetch(baseUrl, {
				method: 'POST',
				headers:{
			      'Content-Type': 'multipart/form-data',
			      'Authorization': 'Token ' + token,
				},
				body: data,
			});
console.log('after fetch call');
console.log(response);

	        let responseJson = await response.json();

	        console.log("Response is "+ responseJson.status);

	        if(responseJson.status=='success'){
	        	Alert.alert(
	        		'Upload successful',
	        		"Your information will shortly be reviewed by our team.",
	        		[{ text: 'OK' }]
	        	);
	        }
	        else{
	        	Alert.alert(
	        		'Error',
	        		responseJson.messege,
	        		[{ text: 'OK' }]
	        	);
	        }
	    }
	    catch(error){
	    	console.log(error);
	    	Alert.alert(
	    		'Error1',
	    		JSON.stringify(error),
	    		[{ text: 'OK' }]
	    	);
	    }    
    }

	render(){
		return(
			<View style={ styles.total_page }>
			    <View style={{ flex:1 }}>
			    	 <Image source={{ uri: this.state.image }} style={ styles.image }/>
			    </View>
			    <TouchableHighlight style={ styles.wrap} onPress={ ()=> {this._saveImage()} }>
					<View style={ styles.loginButton} >
		            	<Text style={{ color: '#FFFFFF' }}>Upload</Text>
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
	image:{
		marginLeft:8, 
		marginTop:8, 
		width: 368, 
		height: 350,
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
    	borderColor: '#3D95CE',
    	backgroundColor: '#3D95CE',
	},

	wrap:{
	    justifyContent: 'center',
		alignItems: 'center',
	},
});
