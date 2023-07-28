import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const _width = Dimensions.get("screen").width;
const _height = Dimensions.get("screen").height;

export const styles = StyleSheet.create({
  gmapContainer: {
    height: 300,
    width: _width,
    backgroundColor: "red",
  },
  gmap: {
    width: _width,
    height: "100%",
    resizeMode: "cover",
  },
  disclaimer: {
    marginTop: "35%",
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
});
