import React from 'react';

import { Text, Button, TouchableHighlight, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import CountryPicker from 'react-native-country-picker-modal';
import ModalDropdown from 'react-native-modal-dropdown';

export default class SettingPersonalDetail extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = { 
	    	text: '',
	    	nationality:'US',
	    	language: 'English',
	     };
    }

	static navigationOptions=(props)=> {
      return {
      	title: 'Personal details',
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
   
	render(){
		return(
			<View style={ styles.total_page }>
			    <View style={{ flex:1 }}>

			        <View style={ styles.container }>
						<Text style={{ paddingLeft: 15, paddingTop: 5 }}>First name</Text>
						<TextInput
						    placeholder="First name"
					        style={{ height: 40,  borderWidth: 0, paddingLeft: 15, paddingBottom: 15}}
					        onChangeText={(text) => this.setState({text})}
					        value={this.state.text}
					    />
				    </View>

				    <View style={ styles.container }>
					    <Text style={{ paddingLeft: 15, paddingTop: 5 }}>Last name</Text>
						<TextInput
						    placeholder="Last name"
					        style={{ height: 40,  borderWidth: 0, paddingLeft: 15, paddingBottom: 15}}
					        onChangeText={(text) => this.setState({text})}
					        value={this.state.text}
					    />
				    </View>

				    <View style={ styles.container }>
					    <Text style={{ paddingLeft: 15, paddingTop: 5 }}>Identity number</Text>
						<TextInput
						    placeholder="Identity number"
					        style={{ height: 40,  borderWidth: 0, paddingLeft: 15, paddingBottom: 15}}
					        onChangeText={(text) => this.setState({text})}
					        value={this.state.text}
					    />
				    </View>

				    <View style={ [styles.container, {flexDirection:'row'}] }>
					    <Text style={{ paddingLeft: 15, paddingTop: 10 }}>Country</Text>
					    <Text style={{ paddingLeft: 215, paddingTop: 11}}>{ this.state.nationality }</Text>
					    <View style={{ flex: 1, alignItems: 'flex-end',paddingTop: 1 }}>
							<CountryPicker
				                onChange={(value) => {
				                  this.setState({ nationality: value.cca2 });
				                }}
				                closeable
				                filterable
				                cca2={this.state.nationality}
				                translation="eng"
				                filterPlaceholder=" Search country"
							/>
						</View>
				    </View>

				    <View style={ [styles.container, {flexDirection:'row'}] }>
					    <Text style={{ paddingLeft: 15, paddingTop: 2 }}>Language</Text>
					    <View style={{ flex: 1, paddingTop: 2, alignItems: 'flex-end' }}>
							<ModalDropdown 
								options={['English', 'Afrikaans']} 
								dropdownTextStyle={{ fontSize:16, color:'black', underlayColor:'black'  }}
								dropdownTextHighlightStyle={{ fontSize:16 , fontWeight:'bold',color:'white',backgroundColor:'black' }}
								dropdownStyle={{ height:80, width: 150, borderColor:'black' }}
								onSelect = { (index,value)=>{ this.setState({ language:value }) } }

							>
							    <Text style={{ paddingRight:15 }}>{this.state.language}{"   "}▼</Text>
							</ModalDropdown>
						</View>
				    </View>

				</View>    

				<TouchableHighlight style={ styles.wrap} onPress={ ()=> {} }>
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
