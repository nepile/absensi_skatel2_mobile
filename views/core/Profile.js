import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "../../assets/styles/ProfileStyle";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile({ navigation }) {
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
            <Text style={styles.textProfil}>5427126</Text>
          </View>
          <View style={styles.detailProfil}>
            <Text style={[styles.textProfil, { color: "#AF1F22" }]}>
              John Doe
            </Text>
          </View>
          <View style={styles.detailProfil}>
            <Text style={styles.textProfil}>XI RPL 1</Text>
          </View>

          <TouchableOpacity style={styles.btnRedirect}>
            <Text style={styles.txtBtn}>Ganti Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
