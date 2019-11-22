import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

const CartCard = ({item, ...props}) => {
  return (
    <View style={styles.cartCard}>
      <View style={styles.imageContainer}>
        <Image
          onPress={() => {}}
          source={{uri: item.url}}
          style={styles.image}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.deatils}>
          <Text style={styles.itemNameText}>{item.itemName}</Text>
          <Text style={styles.itemQuantityText}>Quantity: {item.quantity}</Text>
        </View>
        <View style={styles.editDetails}>
          <Text style={styles.itemPrice}>£ {item.price}</Text>
          <Text style={styles.editPrice}>Edit</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartCard: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    height: '35%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'tomato',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    minHeight: 70,
  },
  descriptionContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  deatils: {
    flex: 1,
    color: 'tomato',
    paddingTop: 12,
    paddingLeft: 12,
  },
  itemNameText: {
    color: 'tomato',
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemQuantityText: {
    flex: 1,
    opacity: 0.5,
  },
  editDetails: {
    flex: 1,
    paddingTop: 12,
  },
  itemPrice: {
    flex: 1,
    color: '#85BB65',
    fontSize: 18,
    textAlign: 'center',
  },
  editPrice: {
    flex: 1,
    color: 'red',
    textAlign: 'center',
  },
});

export default CartCard;
