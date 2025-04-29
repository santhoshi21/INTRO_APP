import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';

const AboutMeScreen = ({ route }) => {
  // Accessing 'isDarkMode' passed through navigation params
  const { isDarkMode } = route.params;


  return (
    <SafeAreaView
      style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}
    >
      <Image
        source={require('./assets/profile.jpg')} // update path if image is elsewhere
        style={[styles.profileImage, isDarkMode ? styles.darkProfileImage : styles.lightProfileImage]}
      />
      <Text style={[styles.summaryText, isDarkMode ? styles.darkText : styles.lightText]}>

        Hello! I'm Kalvakuntla Sai Santhoshi, a passionate Android developer with experience in mobile and embedded projects. I love building real-time apps and integrating them with hardware. I'm enthusiastic about learning and always ready to take on new challenges.
      </Text>
    </SafeAreaView>
  );
};

export default AboutMeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  lightContainer: {
    backgroundColor: '#f7f7f7', // Light background for light mode
  },
  darkContainer: {
    backgroundColor: '#333', // Dark background for dark mode
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  lightProfileImage: {
    borderColor: '#3498db', // Blue border for light mode
  },
  darkProfileImage: {
    borderColor: '#ffffff', // White border for dark mode
  },
  summaryText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 16,
    lineHeight: 22,
  },
  lightText: {
    color: '#000000',
  },
  darkText: {
    color: '#ffffff',
  },
  
});
