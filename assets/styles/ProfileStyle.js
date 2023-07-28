import { StyleSheet } from "react-native";
import { _width } from "../../utils/Dimenssion";

export const styles = StyleSheet.create({
  card: {
    width: _width,
    justifyContent: "center",
    alignItems: "center",
  },
  profilContainer: {
    backgroundColor: "#D9D9D9",
    height: 200,
    width: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  profil: {
    width: 110,
    height: 110,
    resizeMode: "contain",
  },
  detailProfil: {
    marginTop: 5,
  },
  textProfil: {
    fontWeight: "bold",
    fontSize: 16,
  },
  btnRedirect: {
    backgroundColor: "#85D1D6",
    paddingVertical: 15,
    width: "80%",
    marginTop: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  txtBtn: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
