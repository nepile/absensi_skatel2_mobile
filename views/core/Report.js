import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { styles } from "../../assets/styles/ReportStyle";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Report({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <TouchableOpacity style={[styles.menu, { marginTop: 5 }]}>
              <Text style={{ marginBottom: 10, fontSize: 17 }}>Hari ini</Text>
              <View style={{ width: 10, height: 10 }}>
                <Image
                  source={require("../../assets/arrow.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu}>
              <Text style={{ marginBottom: 10, fontSize: 17 }}>
                Rekapan Presensi
              </Text>
              <View style={{ width: 10, height: 10 }}>
                <Image
                  source={require("../../assets/arrow.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
