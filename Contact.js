import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Contact = ({ route }) => {
  const isDarkMode = route.params?.isDarkMode;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#f7f7f7' }]}>
      <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>
        Email: santhoshi.kalvakuntla@gmail.com{'\n'}
        Phone: +91-XXXXXXXXXX{'\n'}
        LinkedIn: linkedin.com/in/kalvakuntla-santhoshi
      </Text>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
