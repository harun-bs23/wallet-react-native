import React from 'react';

import { Text, Button, TouchableHighlight, View, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Options from './../../../components/settingsOptions';

export default class SettingBitcoinAddress extends React.Component{

	static navigationOptions=(props)=> {
      return {
      	title: 'Bitcoin addresses',
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
   
    goTo = (path) => {
    	this.props.navigation.navigate(path);
    }

	render(){
		return(
			<View style={styles.total_page }>
				<ScrollView>
					<Options name="Add bitcoin address" path="AddBitcoinAddress" goTo={this.goTo}/>
			    </ScrollView>		
			</View>
		);
	}
}

const styles=StyleSheet.create({
	total_page:{
		flex:1,
		backgroundColor: '#FFFFFF',
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
