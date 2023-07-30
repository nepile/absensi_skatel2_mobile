import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../assets/styles/LoginStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import HandleLogin from "../../api/HandleLogin";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 100, height: 100, marginTop: 20 }}
        />

        <View style={styles.formContainer}>
          <Text style={{ fontWeight: "bold" }}>Login into Your Account</Text>
          <TextInput
            style={styles.textInput}
            placeholder="NIP/NIS"
            keyboardType="numeric"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity
            onPress={() => HandleLogin(username, password, navigation)}
            style={styles.btnLogin}
          >
            <Text style={styles.textBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
