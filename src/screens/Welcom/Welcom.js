import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MedLinkLogo from '../../assets/img/Logo.png';

const Bubble = ({ delay }) => {
  const scale = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1,
          duration: 400,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.6,
          duration: 400,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={[styles.dot, { transform: [{ scale }] }]} />
  );
};

const Welcom = () => {
  return (
    <View style={styles.container}>
      <Image
        source={MedLinkLogo}
        style={styles.logo}
      />
      {/* Bubbles loading animation */}
      <View style={styles.bubblesContainer}>
        <Bubble delay={0} />
        <Bubble delay={200} />
        <Bubble delay={400} />
      </View>
    </View>
  );
};

export default Welcom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  bubblesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ff6600',
    marginHorizontal: 5,
  },
});
