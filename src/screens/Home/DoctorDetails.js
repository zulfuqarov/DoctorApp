import { StyleSheet, View, Dimensions, Text, Animated, TouchableOpacity, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import DetailsInfoTop from "../../components/DoctorDetails/DetailsInfoTop";
import DetailsSelectDate from "../../components/DoctorDetails/DetailsSelectDate";
import DetailsAbout from "../../components/DoctorDetails/DetailsAbout";
import DetailsWorkInfo from "../../components/DoctorDetails/DetailsWorkInfo";
import DetailsCustomHeader from "../../components/DoctorDetails/DetailsCutomHeader";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";

const DoctorDetails = () => {
  const animatedHeight = useRef(new Animated.Value(hp("50%"))).current;
  const [expanded, setExpanded] = useState(false);

  const toggleHeight = () => {
    Animated.timing(animatedHeight, {
      toValue: expanded ? hp("50%") : hp("86%"),
      duration: 300,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  return (
       <View style={{
        backgroundColor: "#2E6FF3",
        flex: 1,
      }}> 

        <DetailsCustomHeader />
        <View style={{ flex: 1 }}>
          <Animated.View style={[styles.InfoContainer, { height: animatedHeight }]}>

            <TouchableOpacity onPress={toggleHeight} style={styles.arrowContainer}>
              <Ionicons name={`chevron-${expanded ? 'down' : 'up'}-outline`} size={24} color="white" />
            </TouchableOpacity>
            <DetailsInfoTop />
            <ScrollView
              showsHorizontalScrollIndicator={false}
            >
              <DetailsAbout />
              <DetailsWorkInfo />
              <DetailsSelectDate />
            </ScrollView>
          </Animated.View>
        </View>

       </View> 
  );
};

export default DoctorDetails;

const styles = StyleSheet.create({

  InfoContainer: {
    width: wp("100%"),
    backgroundColor: 'white',
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  arrowContainer: {
    position: "absolute",
    backgroundColor: "#2E6FF3",
    bottom: 20,
    right: 20,
    padding: 10,
    borderRadius: 50,
    zIndex: 1,
  },
  arrow: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
