import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

export default function AssetExample() {
  return (
    
    <ImageBackground
     source = { require('/assets/for_sleep.jpg')}
     style={{ width: '100%', height: '100%' }} >
     </ImageBackground>
  );
}

