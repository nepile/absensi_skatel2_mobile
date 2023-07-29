import { StyleSheet } from "react-native";
import { _width } from "../../utils/Dimenssion";

export const styles = StyleSheet.create({
  container: {
    width: _width,
    padding: 10,
  },
  iptContainer: {
    marginTop: 14,
  },
  textInput: {
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
  },
  btn: {
    backgroundColor: "#AF1F22",
    paddingVertical: 14,
    width: "100%",
    marginTop: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  txtBtn: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
  },
});
