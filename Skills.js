import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Skills = ({ route }) => {
  const isDarkMode = route.params?.isDarkMode;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#f7f7f7' }]}>
      <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>
        Kotlin, Android Studio, C (MISRA), React Native, IoT, Flutter, HTML/CSS
      </Text>
    </SafeAreaView>
  );
};

export default Skills;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});
