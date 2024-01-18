import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Modal } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title="Open modal"
        onPress={() => setModalVisible(true)}
        color="midnightblue"
      />
      <Modal
        animationType='fade'
        onRequestClose={() => setModalVisible(false)}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.box}>
            <Text>Modal content</Text>
            <Button
              title="Close"
              color="midnightblue"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'lightgrey',
    padding: 30,
    borderRadius: 10,
    elevation: 5, // Add elevation for a shadow effect (Android)
    
  },
});
