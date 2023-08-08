import axios from "axios";
import { Alert } from "react-native";
import { presensiApi } from "../routes/Api";
import { getToken, getUserId } from "../utils/Session";

const HandlePresensi = async (category, navigation) => {
  try {
    const userId = await getUserId();
    const token = await getToken();

    const response = await axios.post(
      `${presensiApi}`,
      {
        userId: userId,
        category: category,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      Alert.alert("Berhasil", response.data.message);
    }
  } catch (error) {
    if (error.response) {
      Alert.alert("Perhatian", error.response.data.message);
    }
  }
};

export default HandlePresensi;
