import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "../../assets/styles/LoginStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await axios.post(
        "http://192.168.43.219:19001/api/login",
        {
          username: username,
          password: password,
        }
      );

      const data = response.data;

      if (response.status === 200) {
        AsyncStorage.setItem("token", data.token);
        AsyncStorage.setItem("user", JSON.stringify(data.data));
        navigation.replace("Home");
      }
    } catch (error) {
      if (error.response) {
        Alert.alert("Perhatian", error.response.data.message);
      }
    }
  };

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
          <TouchableOpacity onPress={login} style={styles.btnLogin}>
            <Text style={styles.textBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
