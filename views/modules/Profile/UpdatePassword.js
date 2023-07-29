import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Switch } from "react-native";
import { styles } from "../../../assets/styles/UpdatePasswordStyle";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export default function UpdatePassword({ navigation }) {
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    // get user id
    AsyncStorage.getItem("user").then((value) => {
      const user = JSON.parse(value);
      if (user !== null) {
        setUserId(user.user_id);
      }
    });

    // get token
    AsyncStorage.getItem("token").then((value) => {
      setToken(value);
    });
  }, []); // Empty dependency array to run the effect only once

  const changePassword = async () => {
    try {
      const response = await axios.post(
        "http://192.168.43.219:19001/api/change-password",
        {
          userId: userId,
          oldPassword: oldPassword,
          newPassword: newPassword,
          retypePassword: retypePassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        navigation.navigate("Profile");
        Alert.alert("Info", response.data.message);
      }
    } catch (error) {
      if (error.response) {
        Alert.alert("Perhatian", error.response.data.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Type Old Password *</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={!showPassword}
          value={oldPassword}
          onChangeText={setOldPassword}
        />
      </View>
      <View style={styles.iptContainer}>
        <Text>Type New Password *</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={!showPassword}
          value={newPassword}
          onChangeText={setNewPassword}
        />
      </View>
      <View style={styles.iptContainer}>
        <Text>Re-Type New Password *</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={!showPassword}
          value={retypePassword}
          onChangeText={setRetypePassword}
        />
      </View>

      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
      >
        <Switch value={showPassword} onValueChange={togglePasswordVisibility} />
        <Text>{showPassword ? "Hide Password" : "Show Password"}</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={changePassword}>
        <Text style={styles.txtBtn}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
}
