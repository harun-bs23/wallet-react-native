import React from 'react';

import { Text, Button, View, StyleSheet, Linking, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class About extends React.Component{

	static navigationOptions=(props)=> {
      return {
      	title: 'About',
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
   
	render(){
		return( 
			<View style={ styles.total_page }>
				<View style={ styles.box }>
				    <View style={ styles.box2 }>
					    <Text style={{ fontSize:20 }}>ZapGo</Text>
					    <Text></Text>
					    <Text>Send money to friends.
						    <Text style={{color: 'blue'}}
	                        onPress={() => Linking.openURL('http://www.zapgo.co/')}>
	                        (Link)
                        	</Text>
                        </Text>
					</View> 
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
	box:{
        flex:1,
		borderBottomWidth :1,
		borderLeftWidth :1,
		marginLeft:15,
		marginTop:15,
		marginRight:20,
		borderTopWidth:0.5,
		borderColor:'white',
	},
	box2:{
		flex:1,
		marginBottom:1,
		marginTop:10,
		marginLeft:10,
		marginRight:10,
	    borderBottomWidth :0,
		borderColor:'white'
	}
});