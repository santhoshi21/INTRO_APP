import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';

const WelcomeScreen = ({ navigation, toggleTheme, isDarkMode }) => {
  return (
    <SafeAreaView style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.welcomeText, isDarkMode ? styles.darkText : styles.lightText]}>
        Welcome to Santhoshi's Portfolio
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
        <Text style={styles.buttonText}>Click to Know More</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
        <Image source={require('./assets/bulb-icon.png')} style={styles.bulbIcon} />
        <Text style={[styles.themeText, { color: '#3498db' }]}>
          Click here to change mode
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightContainer: {
    backgroundColor: '#f7f7f7',
  },
  darkContainer: {
    backgroundColor: '#000',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  themeButton: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bulbIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
