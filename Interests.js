import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Interests = ({ route }) => {
  const isDarkMode = route.params?.isDarkMode;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#f7f7f7' }]}>
      <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>
        Interested in Android Development, IoT projects, teaching, and helping startups with tech solutions.
      </Text>
    </SafeAreaView>
  );
};

export default Interests;

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
