import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Container,
  Left,
  Header,
  Button as NativeButton,
  Body,
  Titlon,
  Right,
  Picker,
} from 'native-base';

import { Button as PaperButton } from 'react-native-paper';

import {InformationStyles as styles} from '../../styles';

class BuyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuantity: '1',
    };
  }

  render() {
    const {
      addItemtoCart,
      item,
    } = this.props.navigation.state.params;

    return (
      <View style={{flex: 1}}>
        <View style={styles.cssImage}>
          <Image
            source={{
              uri: item.url,
            }}
            style={styles.cssImageStyle}
          />
        </View>
        <View style={styles.itemsHeders}>
          <View style={styles.priceCss}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 16,
                paddingBottom: 4,
              }}>
              <Text style={styles.itemNameCss}>{item.itemName}</Text>
              <Text style={styles.newPriceCss}> £ {item.price} </Text>
            </View>
            <View
              style={styles.styleContainer}>
              <Text style={styles.itemNameCss}>UNITS</Text>
              <View style={styles.dropDown}>
                <Picker
                  mode="dropdown"
                  style={{width: 40}}
                  selectedValue={this.state.selectedQuantity}
                  onValueChange={value =>
                    this.setState({selectedQuantity: value})
                  }>
                  <Picker.Item  value="1" label="1"/>
                  <Picker.Item value="2" label="2" />
                  <Picker.Item value="3" label="3" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.itemNameCss}>Details </Text>
            <View style={{marginTop: 8}}>
              <Text style={styles.itemsDescription}>{item.information}</Text>
            </View>
          </View>
        </View>

        <View style={styles.btnftr}>
          <View style={styles.btnCtr}>
            <PaperButton style={styles.trbtn}
              onPress={() => this.props.navigation.goBack()}
              mode={'contained'}
            >
            Cancel
            </PaperButton>
          <PaperButton 
          mode={'outlined'}
          style={styles.clr}
                onPress={() => {
                  let quantityInInteger = parseInt(this.state.selectedQuantity);
                  addItemtoCart(quantityInInteger);
                }}
          >
          Add To Cart</PaperButton>

          </View>
        </View>
      </View>
    );
  }
}
export default BuyInfo;