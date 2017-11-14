import React from 'react';
import { Button, Text, StyleSheet, View, ScrollView, TextInput, TouchableHighlight, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Deposit extends React.Component{

	static navigationOptions=(props)=> {
      return {
      	title: 'Deposit',
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
				    <Text>Fund your account by transferring ZAR to the unique</Text>
				    <Text>reference number below.</Text>
				</View > 
				<View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#3CB371' }}>
					<Text style={{ color:'white', fontSize:18 }}>QWmkj7IVJB</Text>
				</View>
				<View style={{ flex:9 }}>
					<View style={ styles.box2 }>

						<View style={{ flex:1, flexDirection:'row' }}>
							<Text style={{ fontSize: 12, fontWeight:'bold' }}>Bank</Text>
							<View style={{ flex:1, alignItems:'flex-end'}}>
								<Text style={{ fontSize: 12 }}>FNB</Text>
							</View>
						</View>

						<View style={{ flex:1, flexDirection:'row' }}>
							<Text style={{ fontSize: 12, fontWeight:'bold'  }}>Account holder</Text>
							<View style={{ flex:1, alignItems:'flex-end'}}>
								<Text style={{ fontSize: 12 }}>PlusGo</Text>
							</View>
						</View>

						<View style={{ flex:1, flexDirection:'row' }}>
							<Text style={{ fontSize: 12, fontWeight:'bold'  }}>Account number</Text>
							<View style={{ flex:1, alignItems:'flex-end'}}>
								<Text style={{ fontSize: 12 }}>62511501844</Text>
							</View>
						</View>

						<View style={{ flex:1, flexDirection:'row' }}>
							<Text style={{ fontSize: 12, fontWeight:'bold'  }}>Account type</Text>
							<View style={{ flex:1, alignItems:'flex-end'}}>
								<Text style={{ fontSize: 12 }}>Cheque</Text>
							</View>
						</View>

						<View style={{ flex:1, flexDirection:'row' }}>
							<Text style={{ fontSize: 12, fontWeight:'bold'  }}>Bank code</Text>
							<View style={{ flex:1, alignItems:'flex-end'}}>
								<Text style={{ fontSize: 12 }}>254005</Text>
							</View>
						</View>

						<View style={{ flex:7 }}>
						</View>

					</View>
				</View>
		    </View>
		);
	}
}

const styles=StyleSheet.create({
	status_bar:{
		flex:1,
		justifyContent: 'center',
	    alignItems: 'center',
		backgroundColor: 'steelblue',
	    fontSize: 20, 
	    fontWeight: 'bold'
	},
	total_page:{
		flex:1,
		backgroundColor:'#FFFFFF'
	},
	input_style:{
		height: 40, 
		borderColor: 'white', 
		borderWidth: 1
	},
	designText:{
		flex:1,
		paddingTop:15,
	},
	forgotPassword:{
		flex:1,
		justifyContent: 'center',
        alignItems: 'center',
	},
	box:{
		flex:2,
        justifyContent: 'center',
        alignItems: 'center',
	},
	box2:{
	    flex:1,
		marginBottom:1,
		marginTop:20,
		marginLeft:20,
		marginRight:20,
	    borderBottomWidth :0,
		borderColor:'white'
	},
});