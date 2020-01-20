import React from 'react';
import {Text, StyleSheet, View, FlatList, Modal, Button} from 'react-native';
import {Picker} from 'native-base';
import CartCard from '../atoms/CartCard';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  deletefromCart,
  udpateCartQuantity,
} from '../../Actions/dashbaord.action';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      itemDetails: {},
      itemId: null,
      itemQuantity: null,
    };
  }

  componentDidUpdate(prevState) {
    if (
      this.props.itemReducer.cartItemsList !==
      prevState.itemReducer.cartItemsList
    ) {
      this.setState({
        showModal: false,
        itemDetails: {},
      });
    }
  }

  openViewOrderScreen = props => this.props.navigation.navigate('ViewOrder');

  renderModal = () => {
    return (
      <Modal
        transparent={true}
        animationType={'slide'}
        visible={this.state.showModal}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Icon
                onPress={() =>
                  this.setState({
                    showModal: false,
                    itemDetails: {},
                  })
                }
                name="close"
                size={30}
                color={'#000'}
              />
            </View>
            <View style={styles.pickerCotainer}>
              <Text style={styles.description}> Change Quantity </Text>
              <View style={styles.pickerStyle}>
                <Picker
                  mode="dropdown"
                  style={{width: undefined}}
                  selectedValue={`${this.state.itemDetails.quantity}`}
                  onValueChange={value => {
                    let valueToInt = parseInt(value);
                    this.setState({
                      ...this.state,
                      itemDetails: {
                        ...this.state.itemDetails,
                        quantity: valueToInt,
                      },
                    });
                  }}>
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                </Picker>
              </View>
            </View>
            <View style={styles.buttonConatiner}>
              <Button
                color="tomato"
                onPress={() =>
                  this.props.udpateCartQuantity(this.state.itemDetails)
                }
                title="Update"
              />
              <Button
                color="tomato"
                onPress={() =>
                  this.props.deletefromCart(this.state.itemDetails)
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
    const {cartItemsList} = this.props.itemReducer;
    const total =
      Math.round(
        cartItemsList.reduce((accumulator, currentValue) => {
          let itemPrice = currentValue.quantity * currentValue.price;
          return accumulator + itemPrice;
        }, 0) * 100,
      ) / 100 || 0;
    const buttonisDisabled = total > 0 ? false : true;
    console.log('total : ; : ; ', total, typeof total);
    const transparent = this.state.showModal ? {opacity: 0.5} : '';
    return (
      <View style={[styles.container, transparent]}>
        {this.renderModal()}
        <View style={{flex: 0.5}}>
          <Text style={styles.headerStyle}> Cart </Text>
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
                      showModal: true,
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
        <View style={{flex: 2, borderTopWidth: 1, borderColor: '#808080'}}>
          <Text style={styles.totalText}>
            Total <Text style={styles.currency}> £ {total} </Text>
          </Text>
          <Button
            color="tomato"
            title="Checkout"
            disabled={buttonisDisabled}
            onPress={() => this.openViewOrderScreen(this.props)}
          />
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
  {deletefromCart, udpateCartQuantity},
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
  modalContainer: {
    backgroundColor: '#fff',
    height: '20%',
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'tomato',
    alignItems: 'center',
  },
  pickerCotainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 2,
  },
  pickerStyle: {
    minWidth: '60%',
    height: '80%',
    borderWidth: 1,
    borderRadius: 16,
    marginRight: 5,
    textAlign: 'center',
    borderColor: 'tomato',
    alignContent: 'space-between',
  },
  description: {
    marginRight: 10,
    paddingTop: 10,
    alignItems: 'center',
  },
  buttonConatiner: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 5,
    paddingTop: 5,
  },
  modalHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 2,
    paddingRight: 2,
  },
});
