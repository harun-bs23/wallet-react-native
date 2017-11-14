import React from 'react';

import { Text, Button, Image, TouchableHighlight, StyleSheet, View, NativeModules, AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { ImagePicker } from 'expo';

export default class SettingProfileImage extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = { 
	    	proPic:''
	     };
    }

	static navigationOptions=(props)=> {
      return {
      	title: 'Profile image',
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

    async componentWillMount(){
    	const ProPic = await AsyncStorage.getItem('proPic');
    	
    	this.setState({ proPic: ProPic });

    	console.log(this.state.proPic)
    }
    
    _onPress = async() => {
	    let res = await ImagePicker.launchImageLibraryAsync({
    		allowsEditing: true,
      		aspect: [1, 1],
    	});

    	if(!res.cancelled){
    		this.props.navigation.navigate("UploadProfileImage", { url: res.uri });
    	}
    }

	render(){
		return(
			<View style={ styles.total_page }>

				<TouchableHighlight underlayColor='null' onPress={() => this._onPress()}>
				    {
			    		this.state.proPic?
			    		<Image style={ styles.profilePicture2 } source={{ uri: this.state.proPic }} />
			    		:
			    		<Image style={ styles.profilePicture } source={require('../../../../assets/icons/profile_2.png')} />
			    	}
					
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
	profilePicture:{
		marginLeft:165,
		marginTop:10,
		height:50,
		width:50,
	},
	profilePicture2:{
		marginLeft:110,
		marginTop:10,
		height:180,
		width:180,
		borderRadius:90
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
