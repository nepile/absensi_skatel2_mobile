import { StyleSheet } from "react-native";
import _width, { _height } from "../../utils/Dimenssion";

export const styles = StyleSheet.create({
  container: {
    width: _width,
    height: _height,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  formContainer: {
    marginTop: "30%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: 10,
    width: 250,
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  btnLogin: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AF1F22",
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 15,
  },
  textBtn: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
});
