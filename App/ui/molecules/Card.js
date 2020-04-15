import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.buttonStyle} {...props}>
      <Text style={styles.btnTextStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const Card = ({
  item,
  buyItem,
  onDelete,
  adminLogin = false,
  itemInfo,
  ...props
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: item.url,
        }}
        style={styles.cardImage}
      />
      <View style={styles.description}>
        <Text style={styles.priceText}>
          {item.itemName} - £ {item.price}
        </Text>
        <View style={styles.buttonContainer}>
          {/* <CustomButton title="Info" onPress={itemInfo} /> */}

          {adminLogin ? (
            <CustomButton title="Delete" onPress={() => onDelete(item.id)} />
          ) : (
            <CustomButton title="Buy" onPress={buyItem} />
          )}
        </View>
      </View>
    </View>
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
    color: 'tomato',
    marginVertical: 8,
    textAlign: 'center',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',

    width: '100%',
  },
  buttonStyle: {
    borderWidth: 1,
    flexGrow: 1,
    marginHorizontal: 3,
    borderColor: 'tomato',
    borderRadius: 8,
  },
  btnTextStyle: {
    textAlign: 'center',
    color: 'tomato',
  },
});

export default Card;
