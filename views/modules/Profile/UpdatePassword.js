import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Switch } from "react-native";
import { styles } from "../../../assets/styles/UpdatePasswordStyle";
import HandleUpdatePassword from "../../../api/HandleUpdatePassword";

export default function UpdatePassword({ navigation }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          HandleUpdatePassword(
            oldPassword,
            newPassword,
            retypePassword,
            navigation
          )
        }
      >
        <Text style={styles.txtBtn}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
}
