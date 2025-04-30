import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Projects from './Projects';
import Certifications from './Certifications';
import Interests from './Interests';
import Contact from './Contact';
import AboutMe from './AboutMe'; // Ensure this import is correct
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import Reanimated from 'react-native-reanimated'; // Renamed import from react-native-reanimated

const Stack = createNativeStackNavigator();

const Home = ({ navigation, isDarkMode, toggleTheme }) => {
  const cardData = [
    { title: 'About Me', screen: 'AboutMe' },
    { title: 'Projects', screen: 'Projects' },
    { title: 'Work Experience', screen: 'Certifications' },
    { title: 'Certif', screen: 'Interests' },
    { title: 'Contact', screen: 'Contact' },
  ];

  const [scale, setScale] = useState(new Animated.Value(1));
  const [text, setText] = useState('');
  const fullText = "Welcome to Santhoshi's Portfolio";  // Updated text
  const [isTypingDone, setIsTypingDone] = useState(false); // To track whether typing animation has finished
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has run

  // Typewriter animation for text
  useEffect(() => {
    if (!hasAnimated) {  // Only run the animation if it hasn't already run
      let index = 0;

      const interval = setInterval(() => {
        setText(prev => {
          if (index < fullText.length) {
            index += 1;
            return prev + fullText[index - 1]; // Add one character at a time
          }
          return prev; // Don't update text once all characters are typed
        });

        if (index === fullText.length) {
          clearInterval(interval);
          setIsTypingDone(true); // Mark typing as done once the text is fully displayed
          setHasAnimated(true); // Mark animation as complete
        }
      }, 150);  // Adjust the speed of the typing effect by changing the interval

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [hasAnimated]); // Add hasAnimated as a dependency so it doesn't restart

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.05,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const renderCard = (item, index) => {
    return (
      <Swipeable key={index} friction={2} overshootLeft={false}>
        <Animated.View
          style={[
            styles.card,
            {
              backgroundColor: isDarkMode ? '#333' : '#fff',
              transform: [{ scale }],
            },
          ]}
        >
          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => navigation.navigate(item.screen, { isDarkMode })}
          >
            <Text style={[styles.cardText, { color: isDarkMode ? '#fff' : '#000' }]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </Swipeable>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#f7f7f7' }]}>
      {/* Animated Welcome Text */}
      <View style={styles.welcomeContainer}>
        <Text style={[styles.welcomeText, { color: isDarkMode ? '#fff' : '#000' }]}>
          {text} {/* This is where the typing animation will show up */}
        </Text>
      </View>

      {/* Theme Toggle */}
      <View style={styles.switchRow}>
        <Text style={{ color: isDarkMode ? '#fff' : '#000', fontSize: 16 }}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      {/* Swipeable Cards */}
      <GestureHandlerRootView>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {cardData.map((item, index) => renderCard(item, index))}
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {props => <Home {...props} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
        </Stack.Screen>
        <Stack.Screen name="AboutMe">
          {props => <AboutMe {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Projects">
  {props => <Projects {...props} isDarkMode={isDarkMode} />}
</Stack.Screen>

        <Stack.Screen name="Certifications">
          {props => <Certifications {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Interests">
          {props => <Interests {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Contact">
          {props => <Contact {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5D5C61', // Slightly soft color for the text
    textShadowColor: 'rgba(0, 0, 0, 0.3)', // Adds a subtle shadow to the text
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 2,
    fontFamily: 'Arial', // Or any custom font you'd like to use
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
  },
  scrollViewContent: {
    paddingBottom: 30, // Adds spacing at the bottom of the ScrollView
  },
  card: {
    borderRadius: 15,
    padding: 30,
    marginBottom: 20,
    backgroundColor: '#fff',
    elevation: 8, // 3D shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 15,
    transform: [{ translateY: 8 }],
    transition: 'all 0.3s ease-in-out',
    marginHorizontal: 20,
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
});
