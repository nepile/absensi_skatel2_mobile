import { loginApi } from "../routes/Api";
import { Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default HandleLogin = async (
  username,
  password,
  asParent,
  navigation
) => {
  try {
    const response = await axios.post(`${loginApi}`, {
      username: username,
      password: password,
      asParent: asParent,
    });

    const data = response.data;

    if (response.status === 200) {
      AsyncStorage.setItem("token", data.token);
      AsyncStorage.setItem("user", JSON.stringify(data.data));
      if (asParent != false) {
        navigation.replace("Home");
      } else {
        navigation.replace("Report");
      }
    }
  } catch (error) {
    if (error.response) {
      Alert.alert("Perhatian", error.response.data.message);
    }
  }
};
