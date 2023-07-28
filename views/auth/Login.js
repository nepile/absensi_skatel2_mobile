import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../assets/styles/LoginStyle";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text>Ini Halaman Login</Text>
      </View>
    </SafeAreaView>
  );
}
