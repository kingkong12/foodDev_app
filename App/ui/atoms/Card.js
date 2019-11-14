import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = props => {
  let imageSrc = '';
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Image
          source={{
            uri:
              'https://image.shutterstock.com/image-photo/healthy-food-clean-eating-selection-260nw-722718097.jpg',
          }}
          style={styles.image}
        />
        <Text> Card </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '35%',
    width: '45%',
    marginBottom: '2%',
    marginLeft: '2%',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '80%',
  },
});
export default Card;
