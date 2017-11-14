import React from 'react';

import { Text, Button, TouchableHighlight, StyleSheet, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Options from './../../components/settingsOptions';

export default class Settings extends React.Component{

	static navigationOptions=(props)=> {
      return {
      	title: 'Settings',
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
		      size={20}
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
					<Options name="Profile image" path= "SettingProfileImage" goTo={this.goTo}/>
					<Options name="Personal details" path= "SettingPersonalDetail" goTo={this.goTo}/>
					<Options name="Mobile numbers" path= "SettingMobileNumber" goTo={this.goTo}/>
					<Options name="Email addresses" path= "SettingEmailAddress" goTo={this.goTo}/>
					<Options name="Social networks" path= "SettingSocialNetwork" goTo={this.goTo}/>
					<Options name="Get verified" path= "SettingGetVerified" goTo={this.goTo}/>
					<Options name="Address" path= "SettingAddress" goTo={this.goTo}/>
					<Options name="Bank accounts" path= "SettingBankAccount" goTo={this.goTo}/>
					<Options name="Bitcoin addresses" path= "SettingBitcoinAddress" goTo={this.goTo}/>
					<Options name="Cards" path= "SettingCard" goTo={this.goTo}/>
					<Options name="Security" path= "SettingSecurity" goTo={this.goTo}/>
					<Options name="Notifications" path= "SettingNotification" goTo={this.goTo}/>
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