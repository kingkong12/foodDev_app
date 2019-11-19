import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

import Button from '../atoms/Buttons';

const Card = ({item, itemInfo, buyItem, ...props}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={buyItem} style={styles.card}>
        <Image
          onPress={itemInfo}
          source={{
            uri: item.url,
          }}
          style={styles.image}
        />
        <View style={styles.cardTextConatiner}>
          <Text style={styles.cardText}>£ {item.price}</Text>
          <Button title={item.itemName} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '40%',
    width: '45%',
    marginBottom: '2%',
    marginLeft: '2%',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '75%',
  },
  cardFooter: {
    textAlign: 'center',
  },
  cardText: {
    textTransform: 'uppercase',
    height: '50%',
    textAlign: 'center',

    color: 'tomato',
    fontSize: 14,
  },
  cardTextConatiner: {
    height: '25%',
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
});
export default Card;
