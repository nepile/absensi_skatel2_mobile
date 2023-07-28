import { StyleSheet } from "react-native";
import { _width } from "../../utils/Dimenssion";

export const styles = StyleSheet.create({
  cardContainer: {
    width: _width,
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: 5,
    padding: 15,
  },
  menu: {
    marginTop: 20,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
