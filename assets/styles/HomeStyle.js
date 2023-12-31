import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { _width } from "../../utils/Dimenssion";

export const styles = StyleSheet.create({
  gmapContainer: {
    height: 200,
    width: _width,
    backgroundColor: "gray",
  },
  gmap: {
    width: _width,
    height: "100%",
    resizeMode: "cover",
  },
  disclaimer: {
    marginTop: "18%",
    marginBottom: "25%",
    marginHorizontal: "10%",
  },
  disclaimer2: {
    marginVertical: 10,
    marginHorizontal: "20%",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "green",
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  btnText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  refreshButton: {
    backgroundColor: "gray",
    marginTop: 20,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  refreshButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
