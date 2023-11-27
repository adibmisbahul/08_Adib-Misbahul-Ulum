import { StyleSheet, Text, View, Image,TouchableOpacity, TextInput } from 'react-native';

import Navbar from '../component/navbar';
const Home = ({navigation}) => {
	return (
		<>
		<Navbar/>
		<View style={styles.wraphalo}>
			<Text style={styles.halo}>Halo</Text>
			<Text style={styles.Welcome}>Welcome To Smk Telkom</Text>
		</View>
		<View style={styles.containerextra}></View>
		</>
	  )
}

export default Home

const styles = StyleSheet.create({
	wraphalo:{
		marginTop:30, 
		marginLeft:20
	},

	halo: {
		fontSize:40, 
		fontWeight:'bold' ,
	  },

	  Welcome:{
		fontSize:20, 
		fontWeight:'bold',
	  }, 

	  containerextra:{
		width:300,
		height:150, 
		backgroundColor: 'grey',
		borderRadius: 10, 
		marginLeft: 25,
		marginTop:20
	  }

	
	  
})