import { updtPasswordApi } from "../routes/Api";
import axios from "axios";
import { Alert } from "react-native";
import { getUserId, getToken } from "../utils/Session";

const HandleUpdatePassword = async (
  oldPassword,
  newPassword,
  retypePassword,
  navigation
) => {
  try {
    const userId = await getUserId(); // Call getUserId to get the actual value
    const token = await getToken(); // Call getToken to get the actual value

    const response = await axios.post(
      updtPasswordApi,
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

export default HandleUpdatePassword;
