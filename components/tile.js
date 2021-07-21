import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Header=({title})=> {
  return (
    <View style={styles.header}>
      <Text  style={styles.text}>{title}</Text>
      </View>
  );
};


export default Header;