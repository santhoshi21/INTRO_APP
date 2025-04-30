import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Certifications = ({ isDarkMode }) => {
  // State to manage which section is expanded
  const [expandedWorkExperience, setExpandedWorkExperience] = useState(false);
  const [expandedEducation, setExpandedEducation] = useState(false);

  const toggleWorkExperience = () => setExpandedWorkExperience(!expandedWorkExperience);
  const toggleEducation = () => setExpandedEducation(!expandedEducation);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#f5f5f5' }]}>
      {/* Work Experience Section */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionHeader} onPress={toggleWorkExperience}>
          <Text style={[styles.sectionTitle, { color: isDarkMode ? '#fff' : '#000' }]}>Work Experience</Text>
        </TouchableOpacity>
        {expandedWorkExperience && (
          <ScrollView style={styles.sectionContent}>
            {/* Work Experience Intro */}
            <View style={[styles.card, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
              <Text style={[styles.cardTitle, { color: isDarkMode ? '#fff' : '#333' }]}>Work Experience at International Institute of Information Technology, Hyderabad</Text>
              <Text style={[styles.cardDescription, { color: isDarkMode ? '#ccc' : '#555' }]}>
                Duration: April 2023 - January 2024
              </Text>
            </View>

            {/* Existing Work Experience Cards */}
            <View style={[styles.card, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
              <Text style={[styles.cardTitle, { color: isDarkMode ? '#fff' : '#333' }]}>Messenger Application</Text>
              <Text style={[styles.cardDescription, { color: isDarkMode ? '#ccc' : '#555' }]}>
                A mobile application for retrieving data from vector nodes and displaying it on a PX Matrix.
              </Text>
              <Text style={[styles.cardSubtitle, { color: isDarkMode ? '#bbb' : '#777' }]}>Technologies: C, Kotlin</Text>
            </View>
            <View style={[styles.card, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
              <Text style={[styles.cardTitle, { color: isDarkMode ? '#fff' : '#333' }]}>Wi-SUN Dashboard</Text>
              <Text style={[styles.cardDescription, { color: isDarkMode ? '#ccc' : '#555' }]}>
                A dashboard to monitor Wi-SUN node connections across the campus. Integrated 300 streetlights.
              </Text>
              <Text style={[styles.cardSubtitle, { color: isDarkMode ? '#bbb' : '#777' }]}>Technologies: Embedded C</Text>
            </View>
          </ScrollView>
        )}
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionHeader} onPress={toggleEducation}>
          <Text style={[styles.sectionTitle, { color: isDarkMode ? '#fff' : '#000' }]}>Education</Text>
        </TouchableOpacity>
        {expandedEducation && (
          <ScrollView style={styles.sectionContent}>
            <View style={[styles.card, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
              <Text style={[styles.cardTitle, { color: isDarkMode ? '#fff' : '#333' }]}>Bachelor of Technology in Computer Science Engineering</Text>
              <Text style={[styles.cardDescription, { color: isDarkMode ? '#ccc' : '#555' }]}>
                College: XYZ University
              </Text>
              <Text style={[styles.cardSubtitle, { color: isDarkMode ? '#bbb' : '#777' }]}>GPA: 9.2</Text>
            </View>
            <View style={[styles.card, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
              <Text style={[styles.cardTitle, { color: isDarkMode ? '#fff' : '#333' }]}>Intermediate Education (12th Grade)</Text>
              <Text style={[styles.cardDescription, { color: isDarkMode ? '#ccc' : '#555' }]}>
                School: ABC High School
              </Text>
              <Text style={[styles.cardSubtitle, { color: isDarkMode ? '#bbb' : '#777' }]}>GPA: 8.5</Text>
            </View>
            <View style={[styles.card, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
              <Text style={[styles.cardTitle, { color: isDarkMode ? '#fff' : '#333' }]}>Secondary Education (10th Grade)</Text>
              <Text style={[styles.cardDescription, { color: isDarkMode ? '#ccc' : '#555' }]}>
                School: DEF High School
              </Text>
              <Text style={[styles.cardSubtitle, { color: isDarkMode ? '#bbb' : '#777' }]}>GPA: 9.0</Text>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 20,
    borderRadius: 10,
    padding: 16,
    elevation: 8, // for shadow
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  sectionHeader: {
    backgroundColor: '#5D5C61',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionContent: {
    maxHeight: 250,  // To limit the height for scrolling
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 5, // Shadow for cards
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 16,
    marginVertical: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Certifications;
