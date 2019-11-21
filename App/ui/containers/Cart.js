import React from 'react';
import {Text, StyleSheet, View, FlatList, Button, Image} from 'react-native';
import CartCard from '../atoms/CartCard';

class Cart extends React.Component {
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
            renderItem={({item}) => <CartCard />}
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
