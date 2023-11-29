import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DataTable } from "react-native-paper";

import BckImage2 from "../assets/images/back90.jpeg";

export default function Datakelas() {
  
  const navigation = useNavigation();

  const Datasiswa = [
    { nama: "Adib", kelas: "XII RPL 1", Nis: "4312876" },
    { nama: "Riza", kelas: "XII RPL 1", Nis: "4312876" },
    { nama: "Andre", kelas: "XII RPL 1", Nis: "4312876" },
    { nama: "Fahri", kelas: "XII RPL 1", Nis: "4312876" },
    { nama: "Rendra", kelas: "XII RPL 1", Nis: "4312876" },
    { nama: "Amar", kelas: "XII RPL 1", Nis: "4312876" },
    { nama: "Arif", kelas: "XII RPL 1", Nis: "4312876" },
    { nama: "Arif", kelas: "XII RPL 1", Nis: "4312876" },
    { nama: "Arif", kelas: "XII RPL 1", Nis: "4312876" },
    { nama: "Arif", kelas: "XII RPL 1", Nis: "4312876" },
    { nama: "Arif", kelas: "XII RPL 1", Nis: "4312876" },
  ];

  return (
    <>
      <View className="flex-1">
        <ImageBackground source={BckImage2} style={styles.bck1}>
          <View style={styles.container}>
            <DataTable>
              <DataTable.Header style={styles.head}>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title>Kelas</DataTable.Title>
                <DataTable.Title numeric>Nis</DataTable.Title>
              </DataTable.Header>
              {Datasiswa.map((post) => {
                return (
                  <DataTable.Row style={styles.row}>
                    <DataTable.Cell>{post.nama}</DataTable.Cell>
                    <DataTable.Cell>{post.kelas}</DataTable.Cell>
                    <DataTable.Cell numeric>{post.Nis}</DataTable.Cell>
                  </DataTable.Row>
                );
              })}
            </DataTable>
          </View>
          <View className="flex flex-row my-20 gap-11 ml-16"> 
            <TouchableOpacity className="w-1/5 h-8 bg-purple-500 rounded-md">
              <Text className="text-white mt-1 text-center">Update</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-1/5 h-8 bg-purple-500 rounded-md">
              <Text className="text-white mt-1 text-center">Delete</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bck1: {
    flex: 1,
    resizeMode: "cover",
  },

  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
  },

  head: { height: 44, backgroundColor: "lavender" },
  row: { height: 40, backgroundColor: "lightyellow" },
});
