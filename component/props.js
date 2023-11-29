import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, navigate } from "react-native";

const Keluarha = (props , {navigation}) => {
  return (
    <View style={styles.containerextra}>
      <Image source={props.gambar} style={styles.animation1} />
      <TouchableOpacity style={styles.wrapeskul}
	   onPress={() => navigation.navigate("Dashboard")}
	  >
        <Text style={styles.eskul}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Keluarha;



const styles = StyleSheet.create({
  
  
	containerextra: {
	  width: 300,
	  height: 150,
	  backgroundColor: "white",
	  borderRadius: 10,
	  marginLeft: 25,
	  marginTop: 20,
	  shadowOpacity: 0.17,
	  shadowRadius: 3.05,
	  elevation: 4,
	  flexDirection: "row",
	},
  
	animation1: {
	  marginLeft: 20,
	  marginTop: 5,
	  width: 140,
	  height: 140,
	  resizeMode: "stretch",
	},
	wrapeskul: {
	  width: 100,
	  height: 40,
	  borderRadius: 5,
	  marginTop: 50,
	  backgroundColor: "#1c3141",
	},
  
	eskul: {
	  textAlign: "center",
	  marginTop: 12,
	  color: "white",
	},

  });
  
