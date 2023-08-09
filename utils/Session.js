import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserId = async () => {
  try {
    const value = await AsyncStorage.getItem("user");
    const user = JSON.parse(value);
    if (user !== null) {
      const user_id = user.user_id;
      return user_id;
    }
    return null;
  } catch (error) {
    console.log("Error getting user ID from session:", error);
    return null;
  }
};

export const getRole = async () => {
  try {
    const value = await AsyncStorage.getItem("user");
    const user = JSON.parse(value);
    if (user !== null) {
      const role = user.role;
      console.log(role);
      return role;
    }
    return null;
  } catch (error) {
    console.log("Error getting user role from session:", error);
    return null;
  }
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    return value;
  } catch (error) {
    console.log("Error getting token from session:", error);
    return null;
  }
};
