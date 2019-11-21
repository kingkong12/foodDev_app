import React from 'react';
import {Text, StyleSheet, View, FlatList, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Cart extends React.Component {
  cartCard = () => {
    return (
      <View style={styles.cartCard}>
        <View style={styles.imageContainer}>
          <Image
            onPress={() => {}}
            source={{
              uri:
                'https://greatist.com/sites/default/files/lunch-wraps-feature-1800x1236.jpg',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.deatils}>
            <Text style={styles.itemNameText}>WRAP</Text>
            <Text style={styles.itemQuantityText}> Quantity: 2 </Text>
          </View>
          <View style={styles.editDetails}>
            <Text style={styles.itemPrice}>$5.99 </Text>
            <Text style={styles.editPrice}>Edit</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const mockarry = [1, 2, 3];
    return (
      <View style={styles.container}>
        <View style={{flex: 0.5}}>
          <Text style={styles.headerStyle}> Cart </Text>
        </View>
        <View style={{flex: 9}}>
          <FlatList
            data={mockarry}
            ItemSeparatorComponent={() => <View style={{height: 15}} />}
            renderItem={({item}) => this.cartCard()}
            keyExtractor={(item, index) => `${index}`}
          />
        </View>
        <View style={{flex: 2, borderTopWidth: 1, borderColor: '#808080'}}>
          <Text style={styles.totalText}>
            Total <Text style={styles.currency}> £ 50.57 </Text>
          </Text>
          <Button color="tomato" title="Checkout" onPress={() => {}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    top: '5%',
    marginLeft: '3%',
    marginRight: '3%',
  },
  headerStyle: {
    color: 'tomato',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
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
  editDetails: {
    flex: 1,
    paddingTop: 12,
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
  totalText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  currency: {
    color: '#85BB65',
    fontSize: 24,
  },
});

export default Cart;

/*  to dov
hide versical scroll bar
*/
