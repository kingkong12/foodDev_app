import React from 'react';
import {View, StyleSheet, Text, Image, FlatList, Button} from 'react-native';
import Card from '../molecules/Card';
import {addtoCartAction} from '../../Actions/dashbaord.action';
import {connect} from 'react-redux';

class DashBoard extends React.Component {
  addItemtoCart = (item, quantity) => {
    let {cartItemsList} = this.props.itemReducer;

    let foundInCart = cartItemsList.find(
      cartItemId => cartItemId.id === item.id,
    );
    if (foundInCart) {
      alert('ITEM ALREADY ADDED TO CART');
    } else {
      this.props.addtoCartAction({...item, quantity});
    }
  };

  card = props => {
    return (
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: 'https://facebook.github.io/react/logo-og.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.description}>
          <Text> Price {'\u20AC'} 59 </Text>
          <Button title="button" />
        </View>
      </View>
    );
  };
  render() {
    const {list} = this.props.itemReducer;
    return (
      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={({item}) => (
            <Card
              item={item}
              itemInfo={() =>
                this.props.navigation.navigate('MyModal', {
                  item: item,
                })
              }
              buyItem={() =>
                this.props.navigation.navigate('MyModal', {
                  addtoCart: true,
                  item: item,
                  addItemtoCart: quantity => this.addItemtoCart(item, quantity),
                })
              }
            />
          )}
          keyExtractor={(item, index) => `${index}`}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    marginTop: '2%',
    marginHorizontal: '1%',
  },
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
});

//  redux

const mapStateToProps = state => {
  return {
    itemReducer: state.itemReducer,
  };
};

export default connect(
  mapStateToProps,
  {addtoCartAction},
)(DashBoard);
