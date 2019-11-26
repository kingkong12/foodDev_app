import React from 'react';
import {Text, StyleSheet, View, FlatList, Button, Image} from 'react-native';
import CartCard from '../atoms/CartCard';
import {connect} from 'react-redux';

//  before you look code of this components , i advise you to look code of dashboard.js

class Cart extends React.Component {
  render() {
    // this is a js syntax which will help us get list o fitems added into cart
    const {cartItemsList} = this.props.itemReducer;
    //  total is fucntio  which will calcualte total of amounts in outr cart
    const total =
      Math.round(
        cartItemsList.reduce((accumulator, currentValue) => {
          let itemPrice = currentValue.quantity * currentValue.price;
          return accumulator + itemPrice;
        }, 0) * 100,
      ) / 100;

    // retrn mehtoud spits out ui
    // it is also advisisble to look at  cartCard.js  code,
    //cartCard.j it is being imported into thi sfile and rendered inside
    return (
      <View style={styles.container}>
        <View style={{flex: 0.5}}>
          <Text style={styles.headerStyle}> Cart </Text>
        </View>
        <View style={{flex: 9}}>
          {cartItemsList.length ? (
            <FlatList
              data={cartItemsList}
              ItemSeparatorComponent={() => <View style={{height: 15}} />}
              renderItem={({item}) => <CartCard item={item} />}
              keyExtractor={(item, index) => `${index}`}
            />
          ) : (
            <Text style={styles.emptyText}> YOU CART IS EMPTY </Text>
          )}
        </View>
        <View style={{flex: 2, borderTopWidth: 1, borderColor: '#808080'}}>
          <Text style={styles.totalText}>
            Total <Text style={styles.currency}> £ {total} </Text>
          </Text>
          <Button color="tomato" title="Checkout" onPress={() => {}} />
        </View>
      </View>
    );
  }
}

// redux
const mapStateToProps = state => {
  return {
    itemReducer: state.itemReducer,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Cart);

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
  emptyText: {
    color: '#000',
    marginTop: 150,
    textAlign: 'center',
    opacity: 0.5,
  },
});
