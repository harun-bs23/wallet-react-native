import React from 'react';

import { Text, TextInput, Button, TouchableHighlight, View, StyleSheet, ListView, AsyncStorage, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const url = 'https://www.rehive.com/api/3/user/mobiles/';
import MobileNumber from './../../../components/MobileNumber';

export default class SettingMobileNumber extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = { 
	    	mobile: '',
	    	dataSource: new ListView.DataSource({ rowHasChanged: (r1,r2)=> JSON.stringify(r1)!==JSON.stringify(r2) })
	     };
    }

	static navigationOptions=(props)=> {
      return {
      	title: 'Mobile numbers',
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

    componentWillMount(){
    	this.getData();
    }
    
    getData = async()=>{

    	const token = await AsyncStorage.getItem('token');

	    const headers = {
	        'Content-Type': 'application/json',
			'Authorization': 'Token ' + token,
	    }

    	const response = await fetch(url,{
    		method:'GET',
    		headers: headers,
    	});

        const responseJson = await response.json();

    	if(responseJson.status == 'success'){
    		const data = responseJson.data;
    		const ds = new ListView.DataSource({ rowHasChanged: (r1,r2)=> JSON.stringify(r1)!==JSON.stringify(r2)} );
    		this.setState({ dataSource: ds.cloneWithRows(data) });
    	}
    	else{
    		Alert.alert(
    			'Error',
    			responseJson.messege,
    			[{ text: 'OK' }],
    		);
    	}
    }

    _onPress = async()=>{
    	const token = await AsyncStorage.getItem('token');

	    const headers = {
	        'Content-Type': 'application/json',
			'Authorization': 'Token ' + token,
	    }

	    const data={
	    	number: this.state.mobile
	    }

	    const response = await fetch(url,{
    		method:'POST',
    		headers: headers,
    		body: JSON.stringify(data)
    	});

    	const responseJson = await response.json();

    	if(responseJson.status == 'success'){
    		this.props.navigation.navigate('VerifyMobileNumber');
    	}
    	else{
    		Alert.alert(
    			'Error',
    			responseJson.message,
    			[{ text: 'OK' }],
    		);
    	}

    }
   
	render(){
		return(
			<View style={ styles.total_page }>
			 <View style={{ flex: 1 }}>
					<View style={ styles.container }>
					    <Text style={{ paddingLeft: 15, paddingTop: 5 }}>Mobile</Text>
						<TextInput
						    autoCorrect={false}
						    placeholder="Mobile number"
					        style={{ height: 50,  borderWidth: 0, paddingLeft: 15}}
					        onChangeText={(mobile) => this.setState({mobile})}
					        value={this.state.mobile}
					    />
				    </View>
				    <View style={ styles.container }>
				    	<ListView
				    		dataSource = { this.state.dataSource }
				    		renderRow={ (rowData)=> <MobileNumber data = { rowData } /> }
				    	/>
				    </View>
			    </View>
			    <TouchableHighlight style={ styles.wrap} onPress={ ()=> { this._onPress() } }>
						<View style={ styles.loginButton} >
			            	<Text style={{ color: '#FFFFFF' }}>Save</Text>
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
	container:{
		paddingLeft:13,
		paddingRight:13,
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

