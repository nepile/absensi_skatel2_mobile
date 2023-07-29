import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "../../assets/styles/HomeStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const [token, setToken] = useState("");
// useEffect(() => {
//   AsyncStorage.getItem("token").then((value) => {
//     setToken(value);
//   });
// });
export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.gmapContainer}>
          <Image
            source={require("../../assets/gmap.png")}
            style={styles.gmap}
          />
        </View>

        <View style={styles.disclaimer}>
          <Text style={{ textAlign: "center" }}>
            Presensi Hanya Dapat Dilakukan Di lingkungan SMK Telkom 2 Medan{" "}
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={[styles.btn, { backgroundColor: "green" }]}>
            <Text style={styles.btnText}>Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "#AF1F22" }]}
          >
            <Text style={styles.btnText}>Pulang</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.disclaimer2}>
          <Text style={{ textAlign: "center", color: "#ABABAB" }}>
            Pastikan GPS Kamu Berjalan Normal
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
