import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";
import { styles } from "../../assets/styles/LoginStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import HandleLogin from "../../api/HandleLogin";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [asParent, setAsParent] = useState(false);

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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Switch
              value={asParent}
              onValueChange={(newValue) => setAsParent(newValue)}
              onChangeText={setAsParent}
            />
            <Text>Login as parent</Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              HandleLogin(username, password, asParent, navigation)
            } // Pass asParent to HandleLogin
            style={styles.btnLogin}
          >
            <Text style={styles.textBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
