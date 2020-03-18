import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Container,
  Left,
  Header,
  Button as NativeButton,
  Body,
  Title,
  Right,
  Picker,
} from 'native-base';
import {Chip} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuantity: '1',
    };
  }
  displayCalories = calories => {
    return <Text style={styles.calorieTextStyle}>Calories: {calories}</Text>;
  };

  displayPrice = price => (
    <Text style={styles.calorieTextStyle}>price: £{price}</Text>
  );

  renderChip = itemList => {
    return (
      <>
        {itemList.map((item, index) => (
          <Chip key={index} mode="outlined" style={styles.chipStyle}>
            {item}
          </Chip>
        ))}
      </>
    );
  };

  render() {
    const {
      addtoCart = false,
      addItemtoCart,
      item,
    } = this.props.navigation.state.params;

    const extraItemsList = [
      'cheese',
      'Dip',
      'salt',
      'pepper',
      'tomatos',
      'ketchup',
    ];
    return (
      <View style={{flex: 1}}>
        <View style={styles.imageConatier}>
          <Image
            source={{
              uri: item.url,
            }}
            style={styles.imageStyling}
          />
        </View>

        <View style={styles.itemsDetails}>
          <View style={styles.itemPriceDetail}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 16,
                paddingBottom: 4,
              }}>
              <Text style={styles.itemName}>{item.itemName.toUpperCase()}</Text>
              <Text style={styles.itemPrice}> £ {item.price} </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 4,
                paddingBottom: 16,
              }}>
              <Text style={styles.itemName}>{'Quantity'.toUpperCase()} </Text>

              <View style={styles.pickerStyle}>
                <Picker
                  mode="dropdown"
                  style={{width: 40}}
                  selectedValue={this.state.selectedQuantity}
                  onValueChange={value =>
                    this.setState({selectedQuantity: value})
                  }>
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.itemName}>DESCRIPTION </Text>
            <View style={{marginTop: 8}}>
              <Text style={styles.itemsDescription}>{item.information}</Text>
            </View>
            <Text style={styles.itemName}>NUTRIENTS </Text>
            <View
              style={{
                marginTop: 8,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
              }}>
              {this.renderChip(item.nutrients)}
            </View>
          </View>
        </View>

        <View style={styles.footerButtons}>
          <View style={styles.buttonConatiner}>
            <TouchableOpacity
              style={styles.transparentBUtton}
              onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            {addtoCart && (
              <TouchableOpacity
                style={styles.coloredButton}
                onPress={() => {
                  let quantityInInteger = parseInt(this.state.selectedQuantity);
                  addItemtoCart(quantityInInteger);
                }}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}
export default Information;

const styles = StyleSheet.create({
  imageConatier: {
    height: '40%',
    width: '100%',
    backgroundColor: 'lightblue',
  },
  itemsDetails: {
    height: '53%',
    width: '100%',
    // backgroundColor: 'lightpink',
  },
  imageStyling: {
    width: '100%',
    height: '100%',
  },
  itemPriceDetail: {
    paddingHorizontal: 12,
    //paddingVertical: 16,
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#E9EEF7',
  },
  itemName: {
    fontSize: 16,
    color: '#747883',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowRadius: 1,
  },
  itemPrice: {
    fontSize: 16,
    color: 'tomato',
  },
  descriptionContainer: {
    backgroundColor: '#fff9f8',
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  itemsDescription: {
    fontSize: 14,
    color: '#747883',
    marginBottom: 8,
  },
  footerButtons: {
    height: '7%',
  },
  // button
  buttonConatiner: {
    flex: 1,
    flexDirection: 'row',
  },
  transparentBUtton: {
    backgroundColor: '#E2E6E9',
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coloredButton: {
    backgroundColor: 'tomato',
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  pickerStyle: {
    width: '20%',
    borderWidth: 1,
    borderRadius: 16,
    marginRight: 5,
    borderColor: 'tomato',
  },
  chipStyle: {
    marginRight: 8,
    marginBottom: 8,
  },
});
