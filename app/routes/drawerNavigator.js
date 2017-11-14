import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Text,View,ScrollView,TouchableHighlight,Image,StyleSheet,AsyncStorage } from 'react-native';
import { DrawerItems } from 'react-navigation';

import UploadProfileImage from '../screen/settings/settingProfileImage/UploadProfileImage';
import DrawerHeader from '../components/DrawerHeader';

import Home from '../screen/home/Home';
import Deposit from '../screen/deposit/Deposit';
import Withdraw from '../screen/withdraw/Withdraw';
import Receive from '../screen/receive/Receive';
import Accounts from '../screen/accounts/Accounts';
import Promotions from '../screen/promotions/Promotions';
import Settings from '../screen/settings/Settings';
import About from '../screen/about/About';
import Logout from '../screen/auth/Logout';

export default Drawer = DrawerNavigator({
	Home:{ screen: Home },
	Deposit:{ screen: Deposit },
	Withdraw:{ screen: Withdraw },
	Receive:{ screen: Receive },
	Accounts:{ screen: Accounts },
	Promotions:{ screen: Promotions },
	Settings:{ screen: Settings },
	About:{ screen: About },
	Logout:{ screen: Logout },
  },{
    drawerWidth:300,
    contentComponent  : (props) => (
      <ScrollView style={{ backgroundColor: '#2a7eb6' }}>
        
        <DrawerHeader/>

        <Text></Text> 
        <DrawerItems {...props} />
      </ScrollView>   
    ),
    contentOptions: {
      inactiveTintColor :'white',
    	activeTintColor :'white',
    },
  }
);