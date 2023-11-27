import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Navbar from "../component/navbar";
import Animation12 from "../assets/images/extra.png";

const Home = ({ navigation }) => {
  return (
    <>
      <Navbar />
      <View style={styles.wraphalo}>
        <Text style={styles.halo}>Halo,</Text>
        <Text style={styles.Welcome}>Student Smk Telkom</Text>
      </View>
      <View style={styles.containerextra}>
        <Image source={Animation12} style={styles.animation1} />
        <TouchableOpacity style={styles.wrapeskul}>
          <Text style={styles.eskul}>Daftar eskul</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  wraphalo: {
    marginTop: 30,
    marginLeft: 20,
  },

  halo: {
    fontSize: 40,
    fontWeight: "bold",
  },

  Welcome: {
    fontSize: 20,
    fontWeight: "bold",
  },

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
  wrapeskul:{
	width:100, 
	height:50,
	borderRadius:5,
	marginTop: 50,
	backgroundColor: "#2B2A4C",
  },

  eskul: {
	textAlign: "center",
	marginTop: 12,
    color: "white",
  },
});
