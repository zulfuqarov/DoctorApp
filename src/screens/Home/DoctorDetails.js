import { StyleSheet, View, Dimensions, Text } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window"); // Ekran ölçülərini alır

const DoctorDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fullScreen}>
        <Text>nebiii</Text>
      </View>
    </View>
  );
};

export default DoctorDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2E6FF3",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height * 0.57 ,
  },
  fullScreen: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
