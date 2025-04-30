import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, FlatList, Modal, TouchableOpacity } from 'react-native';

const interestsData = [
  { id: '1', title: 'Internship Completion', image: require('./assets/cer_1.png') },
  { id: '2', title: 'Business English by Cambridge', image: require('./assets/cer_2.png') },
  { id: '3', title: 'Internet Of Things', image: require('./assets/cer_3.png') },
  { id: '4', title: 'International Conference', image: require('./assets/cer_4.png') },
  { id: '5', title: 'Prototype Competition', image: require('./assets/cer_5.png') },
];

const Interests = ({ isDarkMode }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#f5f5f5' }]}>
      <Text style={[styles.header, { color: isDarkMode ? '#fff' : '#000' }]}>My Interests</Text>
      
      {/* Grid Layout for Interests */}
      <FlatList
        data={interestsData}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.card, { backgroundColor: isDarkMode ? '#333' : '#fff' }]} onPress={() => openModal(item.image)}>
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#333' }]}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2} // Two items per row
        contentContainerStyle={styles.grid}
      />

      {/* Modal to show the selected image in full screen */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <TouchableOpacity style={styles.modalContainer} onPress={closeModal}>
          <Image source={selectedImage} style={styles.modalImage} />
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window'); // Get screen width and height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: (width / 2) - 24, // Adjust width for two items per row
    marginBottom: 20,
    borderRadius: 10,
    elevation: 5, // Shadow effect for card
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: '100%', // Make image width fill card width
    height: 120, // Fixed height for consistency
    marginBottom: 10,
    resizeMode: 'contain', // Ensures image scaling within the card
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
  },
  modalImage: {
    width: width - 40, // Image width will be a bit smaller than the screen width
    height: height - 80, // Adjust height to fit the screen
    resizeMode: 'contain', // Maintain image aspect ratio
  },
});

export default Interests;
