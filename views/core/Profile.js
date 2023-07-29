import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "../../assets/styles/ProfileStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile({ navigation }) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [kelas, setKelas] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user").then((value) => {
      const user = JSON.parse(value);
      if (user !== null) {
        setUsername(user.username);
        setName(user.name);
        setKelas(user.class);
      }
    });
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.profilContainer}>
            <Image
              source={require("../../assets/profile.png")}
              style={styles.profil}
            />
          </View>
          <View style={styles.detailProfil}>
            <Text style={styles.textProfil}>{username}</Text>
          </View>
          <View style={styles.detailProfil}>
            <Text style={[styles.textProfil, { color: "#AF1F22" }]}>
              {name}
            </Text>
          </View>
          <View style={styles.detailProfil}>
            <Text style={styles.textProfil}>{kelas}</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Update Password")}
            style={styles.btnRedirect}
          >
            <Text style={styles.txtBtn}>Update Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
