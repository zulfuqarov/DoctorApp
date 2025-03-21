import { StyleSheet, View, Dimensions, Text, Animated, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import DetailsInfoTop from "../../components/DoctorDetails/DetailsInfoTop";
import DetailsSelectDate from "../../components/DoctorDetails/DetailsSelectDate";

const { width, height } = Dimensions.get("window");

const DoctorDetails = () => {
  const animatedHeight = useRef(new Animated.Value(height * 0.57)).current;
  const [expanded, setExpanded] = useState(false);

  const toggleHeight = () => {
    Animated.timing(animatedHeight, {
      toValue: expanded ? height * 0.57 : height * 0.87,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  return (
    <Animated.View style={[styles.container, { height: animatedHeight }]}>
      <View style={styles.fullScreen}>
        <TouchableOpacity onPress={toggleHeight} style={styles.arrowContainer}>
          {/* <Text style={styles.arrow}>yuxari</Text>  */}
          <Ionicons name={`chevron-${expanded ? 'down' : 'up'}-outline`} size={24} color="white" />
        </TouchableOpacity>
        <DetailsInfoTop />
        <DetailsSelectDate />
      </View>
    </Animated.View>
  );
};

export default DoctorDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2E6FF3",
    // justifyContent: "center",
    // alignItems: "center",
    width: width,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  fullScreen: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  arrowContainer: {
    position: "absolute",
    backgroundColor: "#2E6FF3",
    bottom: 20,
    right: 20,
    padding: 10,
    borderRadius: 50
  },
  arrow: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
