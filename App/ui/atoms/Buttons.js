import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <View style={styles.buttonStyle}>
        <Text style={styles.buttonTexts}>Buy - Tomatos</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    height: '70%',
    width: '70%',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'tomato',
  },
  buttonTexts: {
    color: 'tomato',
  },
});

export default Button;
