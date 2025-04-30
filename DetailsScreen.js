import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const DetailsScreen = ({ navigation, isDarkMode }) => {
    const cardData = [
      { title: 'About Me', screen: 'AboutMe' },
      { title: 'Education', screen: 'Education' },
      { title: 'Skills', screen: 'Skills' },
      { title: 'Work Experience', screen: 'WorkExperience' },
      { title: 'Projects', screen: 'Projects' },
      { title: 'Certifications', screen: 'Certifications' },
      { title: 'Interests', screen: 'Interests' },
      { title: 'Contact Information', screen: 'ContactInfo' },
    ];
  
    return (
      <SafeAreaView style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
        {cardData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}
            onPress={() => navigation.navigate(item.screen, { isDarkMode })}
            activeOpacity={0.8}
          >
            <Text style={[styles.cardText, { color: isDarkMode ? '#000' : '#000' }]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    );
  };
  

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  card: {
    width: '85%',
    padding: 18,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
  },
  lightCard: {
    backgroundColor: '#ffffff',
    borderColor: '#ddd',
  },
  darkCard: {
    backgroundColor: '#ffffff', // keep card white even in dark mode
    borderColor: '#888',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

});
