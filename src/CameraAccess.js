// CameraAccess.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CameraAccess = () => {
  return (
    <View style={styles.container}>
      <Text>Camera Access Screen</Text>
      {/* You can add camera-related components or functionality here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CameraAccess;
