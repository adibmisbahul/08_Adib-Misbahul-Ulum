import {
  Text,
  ImageBackground,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

import BckImage from "../assets/images/back90.jpeg";
import Navbar from "../component/navbar";
import { useNavigation } from "@react-navigation/native";

export default function Eskulpage() {
  
  const navigation = useNavigation();

  const [text, onChangeText] = React.useState("masukan nama");
  const [text2, onChangeText2] = React.useState("masukan nis");
  const [text3, onChangeText3] = React.useState("Kelas");

  const Eskul = [
    { eskul: "Data Kelas" },
    { eskul: "Data Eskul" },
    { eskul: "List" },
  ];

  return (
    <>
      <Navbar />
      <ImageBackground source={BckImage} style={styles.bck1}>
        <View style={styles.wraphalo}>
          <Text style={styles.halo}>Data Siswa,</Text>
          <Text style={styles.Welcome}>Lihat Berbagai data</Text>
        </View>
        <View className="flex justify-center">
          <View>
            <TextInput
              style={styles.input}
              value={text}
              onChangeText={onChangeText}
            />
            <TextInput
              style={styles.input}
              value={text2}
              onChangeText={onChangeText2}
            />
            <TextInput
              style={styles.input}
              value={text3}
              onChangeText={onChangeText3}
            />
            <TouchableOpacity onPress={() => navigation.navigate("datakelas")}>
              <Text style={styles.daftar2}>Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View></View>
        {Eskul.map((post) => {
          return (
            <View style={styles.poeskul}>
              <TouchableOpacity
              onPress={() => navigation.navigate("datakelas")}
              >
              <Text className="text-white text-center mt-3">{post.eskul}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  wraphalo: {
    marginTop: 30,
    marginLeft: 20,
  },

  halo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },

  Welcome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  bck1: {
    flex: 1,
    resizeMode: "cover",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    color: "white",
    marginTop: 30,
  },

  daftar2: {
    color: "white",
    backgroundColor: "purple",
    width: 100,
    height: 30,
    textAlign: "center",
    borderRadius: 5,
    marginLeft: 130,
    paddingTop: 5,
    marginTop: 20,
  },
  poeskul: {
    width: 330,
    height: 50,
    marginTop: 30,
    marginLeft: 15,
    borderRadius: 5,
    backgroundColor: "#1c3141",
  },
});
