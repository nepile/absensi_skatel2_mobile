import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../assets/styles/HomeStyle";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text>Ini Halaman Login</Text>
      </View>
    </SafeAreaView>
  );
}
