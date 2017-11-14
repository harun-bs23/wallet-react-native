import React from 'react';

import { Text, Button, Image, TouchableHighlight, View, StyleSheet, AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Receive extends React.Component{

	static navigationOptions=(props)=> {
      return {
      	title: 'Receive',
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
		  <TouchableHighlight style={{paddingLeft: 10, paddingBottom: 0 }}>
		    <Icon
		      name="ios-menu-outline"
		      size={30}
		      color="white"
		      onPress={() => props.navigation.navigate('DrawerOpen')}
		    />
		  </TouchableHighlight>
		), 
		headerRight: <Text></Text>
      }	
    }; 

    constructor() {
    	super()

    	this.state = {
      		QR_code: 'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=undefined&choe=UTF-8',
    	}
	}

	async componentWillMount(){
		const email = await AsyncStorage.getItem('mail');
		console.log(email);
		let link = 'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl='+email+'&choe=UTF-8';
		this.setState({ QR_code: link });
		console.log(link);
		console.log(QR_code);
	}

	render(){
		return(
			<View style={ styles.total_page }>
				<View>
					<Text style={ styles.textStyle }>The QR code is your public address for accepting payments.</Text>
					<Image
			          style={{ width: 250, height: 250, alignSelf:'center' }}
			          source={{ uri: this.state.QR_code }}
					/>
				</View>	
			</View>	
		);
	}
}

const styles=StyleSheet.create({
	total_page:{
		flex:1,
		backgroundColor: '#FFFFFF',
	},
	textStyle:{
		paddingLeft:20,
		paddingRight:10,
		paddingTop:10,
		fontSize:13,
	}
});	
