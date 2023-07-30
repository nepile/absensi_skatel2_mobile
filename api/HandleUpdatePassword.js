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
    const response = await axios.post(
      `${updtPasswordApi}`,
      {
        userId: getUserId,
        oldPassword: oldPassword,
        newPassword: newPassword,
        retypePassword: retypePassword,
      },
      {
        headers: {
          Authorization: `Bearer ${getToken}`,
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
