import {
  Text,
  StyleSheet,
  View,
  Image,
  Select,
  SelectItem,
} from "react-native";
import React, { Component } from "react";
import Avatar from "../assets/images/avatar.jpg";

const navbar = () => {
  return (
    <>
      <View style={styles.navbar12}>
        <Text style={styles.username}>Adib Misbahul Ulum</Text>
        <Image style={styles.avatar12} source={Avatar} />
      </View>
    </>
  );
};

export default navbar;

const styles = StyleSheet.create({
  navbar12: {
    marginTop: 40,
    width: 360,
    height: 60,
    flexDirection: "row",
    backgroundColor: "#2B2A4C",
  },

  avatar12: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginTop: 5,
  },

  username: {
    marginTop: 20,
    color: "white",
    marginLeft:180,
  },
});
