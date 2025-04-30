import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
} from 'react-native';

const { width } = Dimensions.get('window');

// Sample project data
const projects = [
  {
    id: '1',
    title: 'Visiting Card Organizer',
    description:
      'A mobile app that captures and organizes visiting cards by sectors like Food, Business, and Hotels.',
    image: require('./assets/visiting_card.png'),
  },
  {
    id: '2',
    title: 'Custom Shell in C',
    description:
      'A shell-like interface using POSIX system calls with input/output redirection and custom commands.',
    image: require('./assets/custom_shell.png'),
  },
  {
    id: '3',
    title: 'IoT-based Solar Tracker',
    description:
      'Real-time solar tracking system using LDRs and servo motors to improve energy efficiency.',
    image: require('./assets/solar_tracking.png'),
  },
  {
    id: '4',
    title: 'Elderly Care System',
    description:
      'Voice-command triggered system using ESP32 CAM and OneM2M to detect emergencies.',
    image: require('./assets/elderly_care.png'),
  },
];

export default function Projects({ isDarkMode }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderProject = ({ item }) => (
    <View style={[styles.card, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={[styles.textBox, { backgroundColor: isDarkMode ? '#444' : '#fff' }]}>
        <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#222' }]}>{item.title}</Text>
        <Text style={[styles.description, { color: isDarkMode ? '#ddd' : '#555' }]}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#222' : '#fefefe' }]}>
      <View style={styles.carouselContainer}>
        <Animated.FlatList
          data={projects}
          keyExtractor={(item) => item.id}
          renderItem={renderProject}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onMomentumScrollEnd={(event) => {
            const index = Math.round(event.nativeEvent.contentOffset.x / width);
            setCurrentIndex(index);
          }}
        />
      </View>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {projects.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index ? styles.dotActive : null]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContainer: {
    height: 400,
  },
  card: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 16,
    marginBottom: 20,
  },
  image: {
    width: width * 0.9,
    height: 250,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textBox: {
    width: width * 0.9,
    padding: 16,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#aaa',
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: '#333',
    width: 12,
    height: 12,
  },
});
