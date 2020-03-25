import React from 'react';
import {Text, StyleSheet, View, FlatList, Modal, Button} from 'react-native';
import {Picker} from 'native-base';
import CartCard from './CartCard';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  removeFromCart,
  modifyMedicineQuantity,
} from '../../Actions/dashbaord.action';
import {bskyStyles as styles} from '../../styles';

import { Button as PaperButton } from 'react-native-paper';

class Cart extends React.Component {
  state= {
      modalOpen: false,
      itemDetails: {},
      itemId: null,
      itemQuantity: null,
    };
  componentDidUpdate(prevSt) {
    if (
      this.props.mainReducer.cartItemsList !==
      prevSt.mainReducer.cartItemsList
    ) {
      this.setState({
        itemDetails: {},
        modalOpen: false,
      });
    }
  }
  displayModal = () => {
    return (
      <Modal
       animationType={'slide'}
        transparent={true}
        visible={this.state.modalOpen}>
        <View style={styles.modalConatinerStyle}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Icon
                onPress={() =>
                  this.setState({
                    modalOpen: false,
                    itemDetails: {},
                  })
                }
                name="close"
                size={30}
                color={'#000'}
              />
            </View>
            <View style={styles.pickerCotainer}>
              <Text style={styles.description}> Modify Quantity </Text>
              <View style={styles.pickerStyle}>
                <Picker
                  style={{width: undefined}}
                  mode="dropdown"
                  onValueChange={value => {
                    let valueToInt = parseInt(value);
                    this.setState({
                      ...this.state,
                      itemDetails: {
                        ...this.state.itemDetails,
                        quantity: valueToInt,
                      },
                    });
                  }}
                  selectedValue={`${this.state.itemDetails.quantity}`}
                  >
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                </Picker>
              </View>
            </View>
            <View style={styles.buttonConatiner}>
              <Button
                onPress={() =>
                  this.props.modifyMedicineQuantity(this.state.itemDetails)
                }
                title="MOdify changes"
                color="#0681C7"
              />
              <Button
                color="#0681C7"
                onPress={() =>
                  this.props.removeFromCart(this.state.itemDetails)
                }
                title="Delete"
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  render() {
    const {cartItemsList} = this.props.mainReducer;
    const total =
      Math.round(
        cartItemsList.reduce((accumulator, currentValue) => {
          let itemPrice = currentValue.quantity * currentValue.price;
          return accumulator + itemPrice;
        }, 0) * 100,
      ) / 100 || 0;
    const buttonisDisabled = total > 0 ? false : true;
    const transparent = this.state.modalOpen ? {opacity: 0.5} : '';


    return (
      <View style={[styles.container, transparent]}>
        {this.displayModal()}
        <View style={{flex: 0.5}}>
          <Text style={styles.headerStyle}> Basket </Text>
        </View>
        <View style={{flex: 9}}>
          {cartItemsList.length ? (
            <FlatList
              data={cartItemsList}
              ItemSeparatorComponent={() => <View style={{height: 15}} />}
              renderItem={({item}) => (
                <CartCard
                  item={item}
                  showModalFun={itemDetails =>
                    this.setState({
                      modalOpen: true,
                      itemDetails: itemDetails,
                    })
                  }
                />
              )}
              keyExtractor={(item, index) => `${index}`}
            />
          ) : (
            <Text style={styles.emptyText}> YOU CART IS EMPTY </Text>
          )}
        </View>
        <View style={styles.displaytltOCntainer}>
          <Text style={styles.finaltext}>
            Total <Text style={styles.fianlCamount}> £ {total} </Text>
          </Text>
          <PaperButton
            color="#0681C7"
            disabled={buttonisDisabled}
            onPress={() =>  this.props.navigation.navigate('ViewOrder')}
          >
          Checkout !
          </PaperButton>
        </View>
      </View>
    );
  }
}

// redux
const mapStateToProps = state => {
  return {
    mainReducer: state.mainReducer,
  };
};

export default connect(
  mapStateToProps,
  {removeFromCart, modifyMedicineQuantity},
)(Cart);
