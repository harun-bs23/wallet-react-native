import React from 'react';

import { Text, Button, TouchableHighlight, StyleSheet, View, ScrollView } from 'react-native';
import Options from './../../components/settingsOptions';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Withdraw extends React.Component{

	static navigationOptions=(props)=> {
      return {
      	title: 'Withdraw',
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
    
    goTo = (path) => {
    	this.props.navigation.navigate(path);
    }

	render(){
		return(
			<View style={styles.total_page }>
				<ScrollView>
					<Options name="Bank accounts" path="WithdrawBankAccount" goTo={this.goTo}/>
					<Options name="Bitcoin address" path="WithdrawBitcoinAddress" goTo={this.goTo}/>
			    </ScrollView>		
			</View>
		);
	}
}

const styles=StyleSheet.create({
	total_page:{
		flex:1,
		backgroundColor:'#FFFFFF',
	}
});