import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Options extends React.Component{
	render(){
			return(
				<View>
					<TouchableHighlight underlayColor='lightgrey' style={ styles.container } onPress={ ()=>{ this.props.goTo(this.props.path)} }>
						<View style={ styles.item }>
						    <Text>{ this.props.name }</Text>
						    <View style={ styles.icon }>
							    <Icon
					                name="angle-right"
					                size={50}
					                color='black'
								/>
							</View>
						</View>
					</TouchableHighlight>
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
	}
});
