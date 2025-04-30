import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';

const AboutMeScreen = ({ route }) => {
  const { isDarkMode } = route.params;

  const backgroundColor = isDarkMode ? '#121212' : '#FFFFFF';
  const textColor = isDarkMode ? '#FFFFFF' : '#000000';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Image
        source={require('./assets/profile.jpg')}
        style={styles.profileImage}
      />
      <Text style={[styles.summaryText, { color: textColor }]}>
        Hello! I'm Kalvakuntla Sai Santhoshi, a passionate Android developer
        with experience in mobile and embedded projects. I love building
        real-time apps and integrating them with hardware. I'm enthusiastic
        about learning and always ready to take on new challenges.
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#888',
  },
  summaryText: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
});
