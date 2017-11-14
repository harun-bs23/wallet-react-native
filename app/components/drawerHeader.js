import React from 'react';
import { View, TouchableHighlight, Text, Image, StyleSheet, AsyncStorage } from 'react-native';

export default class DrawerHeader extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = { 
	    	name:'',
	    	email:'',
	    	proPic:''
	     };
    }

    async componentWillMount(){
    	const Name = await AsyncStorage.getItem('user');
    	const Email = await AsyncStorage.getItem('mail');
    	const ProPic = await AsyncStorage.getItem('proPic');
    	
    	this.setState({ name: Name, email: Email, proPic: ProPic });
    }

	render(){
			return(
				<View style={{ flex:1, flexDirection:'row' }}>
	
					<View>
						<TouchableHighlight underlayColor='null'>
						{
							this.state.proPic?
							<Image style={ styles.profilePicture } source={{ uri: this.state.proPic }} />
							:
							<Image style={ styles.profilePicture } source={require('../../assets/icons/profile_1.png')} />
						}
						</TouchableHighlight>
				    </View>
					
					<View style={{ flex:1, flexDirection:'column' }}>
						<Text style={{ color:'white', marginLeft:40, marginTop:25 }}>{ this.state.name }</Text>
						<Text style={{ color:'white', marginLeft:40, fontSize:12 }}>{ this.state.email }</Text>
					</View>

				</View>
			);
		}
}

const styles=StyleSheet.create({
	container:{
		height:50,
		borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        justifyContent:'center',
        paddingLeft:10,
	},
	item:{
		flex:1,
		alignItems:'center',
		flexDirection:'row',
	},
	icon:{
		flex:1,
		alignItems:'flex-end',
	},
	profilePicture:{
	    marginLeft:10,
	    marginTop:25,
	    height:40,
	    width:40,
	    borderRadius:30
    },
});
