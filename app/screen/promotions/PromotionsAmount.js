import React from 'react';

import { Text, Button, TouchableHighlight, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import CountryPicker from 'react-native-country-picker-modal';
import ModalDropdown from 'react-native-modal-dropdown';

export default class PromotionsAmount extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = { 
	    	text: ''
	     };
    }

	static navigationOptions=(props)=> {
      return {
      	title: 'Amount',
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
	    	<TouchableHighlight underlayColor='#3D95CE' style={styles.icon} onPress={() => props.navigation.navigate('Promotions')}>
		    	<View style={ styles.back }>
			    	<Icon
			            name="angle-left"
			            size={30}
			            color="white" />   
			        <Text style={ styles.textStyle }>Promotions</Text>
		        </View>
			</TouchableHighlight> 
		),
		headerRight: <Text></Text>
      }	
    }; 
   
	render(){
		return(
			<View style={ styles.total_page }>
			    <View style={{ flex:1 }}>

			        <View style={ styles.container }>
						<Text style={{ paddingLeft: 15, paddingTop: 5 }}>Promotion code</Text>
						<TextInput
						    placeholder="Promotion code"
					        style={{ height: 40,  borderWidth: 0, paddingLeft: 15, paddingBottom: 15}}
					        onChangeText={(text) => this.setState({text})}
					        value={this.state.text}
					    />
				    </View>

				</View>    

				<TouchableHighlight style={ styles.wrap} onPress={ ()=> { this.props.navigation.navigate('SavePromotionsAmount')} }>
					<View style={ styles.loginButton} >
		            	<Text style={{ color: '#FFFFFF' }}>Next</Text>
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
	container:{
		padding:15,
	    borderBottomWidth: 1,
	    borderBottomColor: "lightgrey",
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
	},
	wrap:{
	    justifyContent: 'center',
		alignItems: 'center',
	},
	button:{
	    justifyContent: 'center',
		alignItems: 'center',
        paddingTop:7,
        paddingBottom:7,
        borderWidth: 1,
    	borderRadius: 3,
    	width:150,
    	borderColor: '#3D95CE',
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
});
