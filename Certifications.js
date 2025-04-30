import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Certifications = ({ route }) => {
  const isDarkMode = route.params?.isDarkMode;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#f7f7f7' }]}>
      <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>
        • Google Kotlin for Android Certification{'\n'}
        • MISRA C Guidelines Training{'\n'}
        • OneM2M Standard Training
      </Text>
    </SafeAreaView>
  );
};

export default Certifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
});
