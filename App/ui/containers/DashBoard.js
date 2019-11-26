import React from 'react';
import {View, StyleSheet, Text, Image, FlatList, Button} from 'react-native';
import Card from '../molecules/Card';
import {addtoCartAction} from '../../Actions/dashbaord.action';
import {connect} from 'react-redux';

class DashBoard extends React.Component {
  // a callback fucntion that will add itms into cart
  addItemtoCart = (item, quantity) => {
    let {cartItemsList} = this.props.itemReducer;

    let foundInCart = cartItemsList.find(
      cartItemId => cartItemId.id === item.id,
    );
    if (foundInCart) {
      alert('ITEM ALREADY ADDED TO CART');
    } else {
      this.props.addtoCartAction({...item, quantity}); //  note:  function is beign importd from  Actions folder
    }
  };

 render() {
    const {list} = this.props.itemReducer;
    //  render() is a react method w2which will spit out ui in mobile devices
    //  faltlist :  is react native fucntin which will act like .mapfucntion but a better versiob for mobile devices

    return (
      <View style={styles.container}>
        <FlatList
          data={list} // here ypu will passs array data eg: [ 'Granular Bar' , 'Avacado Toast' , 'Salad' , 'Wrap' ]
          renderItem={(
            {item}, // now we are looping through above data and generating multiple cards
          ) => (
            <Card
              item={item}
              itemInfo={() =>
                //  these are callback function which will  open modal from routes js  and pass inforation to modal for diaplying
                this.props.navigation.navigate('MyModal', {
                  item: item, // these are the property you are passing to maodla
                })
              }
              buyItem={() =>
                //  similar to itemInfo
                this.props.navigation.navigate('MyModal', {
                  // these are the property you are passing to maodla
                  addtoCart: true,
                  item: item,
                  addItemtoCart: quantity => this.addItemtoCart(item, quantity),
                })
              }
            />
          )}
          keyExtractor={(item, index) => `${index}`}
          numColumns={2} //  this will dispaly 2 coulmns in UI
        />
      </View>
    );
  }
}
//  this is the css for mobile devises
// NOTE , the laws of cs sis exactly same as HTML css except here sytax is different
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

//  this is redux, mapstate to props is a fucntion which will connect to cart.reducer.js ( APP/Reducer/index.js)
//  from that reduceser w  get list of menu items to display eg:  wrapa , granualr bar , etc.

const mapStateToProps = state => {
  return {
    itemReducer: state.itemReducer,
  };
};

// connect is another redux fucntion whichh will tiew this dashboard file action file to redux store.
// for detail look at concepts in redux
export default connect(
  mapStateToProps,
  {addtoCartAction},
)(DashBoard);
