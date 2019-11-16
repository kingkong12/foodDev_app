import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Content} from 'native-base';
import Button from './Buttons';

const Card = ({itemInfo, buyItem, ...props}) => {
  let imageSrc = 'https://www.yasmall.ae/media/2814/fastfood.jpg';

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={buyItem} style={styles.card}>
        <Image
          onPress={itemInfo}
          source={{
            uri: imageSrc,
          }}
          style={styles.image}
        />
        <View style={styles.cardTextConatiner}>
          <Text style={styles.cardText}>$56</Text>
          <Button />
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
  buttonStyle: {
    color: 'red',
  },
  cardTextConatiner: {
    height: '25%',
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
});
export default Card;
