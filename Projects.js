import React from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';

const Projects = ({ route }) => {
  const isDarkMode = route.params?.isDarkMode;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#f7f7f7' }]}>
      <ScrollView>
        <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>
          • Visiting Card App - Kotlin, categorizes contacts{'\n'}
          • Custom Shell - C with POSIX system calls{'\n'}
          • Solar Tracking System - Arduino with LDR & Servo{'\n'}
          • OneM2M Elder Care - IoT, ESP32, CAM, mic
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Projects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
});
