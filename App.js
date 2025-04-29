import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutMeScreen from './AboutMeScreen';

// Screen 1: Welcome Screen
const WelcomeScreen = ({ navigation, toggleTheme, isDarkMode }) => (
  <SafeAreaView style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
    <Text style={[styles.welcomeText, isDarkMode ? styles.darkText : styles.lightText]}>
      Welcome to Santhoshi's Portfolio
    </Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Details')}
    >
      <Text style={styles.buttonText}>Click to Know More</Text>
    </TouchableOpacity>
    {/* Bulb icon to toggle theme */}
    <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
      <Image 
        source={require('./assets/bulb-icon.png')} 
        style={styles.bulbIcon} 
      />
      <Text style={[styles.themeText, { color: '#3498db' }]}>
        Click here to change mode
      </Text>
    </TouchableOpacity>
  </SafeAreaView>
);

// Screen 2: Details Screen with list of cards
const DetailsScreen = ({ navigation, isDarkMode }) => (
  <SafeAreaView style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
    <TouchableOpacity
      style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]} 
      onPress={() => navigation.navigate('AboutMe', { isDarkMode })}
    >
      <Text style={[styles.cardText, isDarkMode ? styles.darkText : styles.lightText]}>About Me</Text>
    </TouchableOpacity>
    <View style={styles.card}>
      <Text style={styles.cardText}>Education</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardText}>Skills</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardText}>Work Experience</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardText}>Projects</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardText}>Certifications</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardText}>Interests</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardText}>Contact Information</Text>
    </View>
  </SafeAreaView>
);

const Stack = createStackNavigator();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevState => !prevState);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={(props) => <WelcomeScreen {...props} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} 
        />
        <Stack.Screen 
          name="Details" 
          component={(props) => <DetailsScreen {...props} isDarkMode={isDarkMode} />} 
        />
        <Stack.Screen name="AboutMe" component={AboutMeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
    backgroundColor: '#333',
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
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  card: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 5, // adds shadow for Android
    shadowColor: '#000', // adds shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  themeButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bulbIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
