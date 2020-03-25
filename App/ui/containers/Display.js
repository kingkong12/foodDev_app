import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import CstBtn from './cstBtn.js';
import {Card} from 'react-native-paper';

const Display = ({item, buyItem, itemInfo, ...props}) => {
  return (
    <Card style={styles.cardContainer}>
      <Image
        source={{
          uri: item.url,
        }}
        style={styles.cardImage}
      />
      <View style={styles.description}>
        <Text style={styles.priceText}>
          {item.itemName}
        </Text>
        <View style={styles.buttonContainer}>
          <CstBtn price={item.price} title="Buy" onPress={buyItem} />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '48%',
    marginBottom: '5%',
    marginHorizontal: '1%',
  },
  imageConatiner: {
    flex: 1,
    width: '40%',
    height: '40%',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  description: {
    alignSelf: 'center',
  },
  priceText: {
    color: '#0681C7',
    marginVertical: 8,
    textAlign: 'center',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',

    width: '100%',
  },
});

export default Display;
