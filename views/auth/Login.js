import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../assets/styles/LoginStyle";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 100, height: 100, marginTop: 20 }}
        />

        <View style={styles.formContainer}>
          <Text style={{ fontWeight: "bold" }}>Login into Your Account</Text>
          <TextInput style={styles.textInput} placeholder="NIP/NIS" />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
