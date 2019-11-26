import React from 'react';
import {Text, View, TouchableOpacity,Button, Image, StyleSheet} from 'react-native';
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
  render() {
    const {
      addtoCart = false,
      addItemtoCart,
      item,
    } = this.props.navigation.state.params;
    return (
      <View style={{flex:1}}> 
      <Container>
        <Header style={{backgroundColor: '#fff'}}>
          <Left>
            <NativeButton
              transparent
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="close" size={40} color={'#000'} />
            </NativeButton>
          </Left>
          <Body>
            <Title style={{color: '#000'}}>INFO</Title>
          </Body>
          <Right />
        </Header>

        <View>
          <Image
            source={{
              uri: item.url,
            }}
            style={styles.image}
          />
          <View style={styles.ItemDetails}>
            <Text style={styles.headingText}> {item.itemName} </Text>
            {addtoCart
              ? this.displayCalories(item.calories)
              : this.displayPrice(item.price)}
            <View style={styles.quantitystyles}>
              <Text sty={styles.description}> Select Quantity </Text>
              <View style={styles.pickerStyle}>
                <Picker
                  mode="dropdown"
                  style={{width: undefined}}
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
              <Text style={styles.descriptionTextTitle}>Description</Text>
              <Text style={styles.description}>{item.information}</Text>
            </View>
          <Button  
          title="Press me"
          color={'tomato'}
          onPress={() => {
              let quantityInInteger = parseInt(this.state.selectedQuantity);
              addItemtoCart(quantityInInteger);
            }}
          />
        </View>
      </Container>
      </View>
    );
  }
}
export default Information;

const styles = StyleSheet.create({
  container: {
    height: '40%',
    width: '45%',
    marginBottom: '2%',
    marginLeft: '2%',
  },
  calorieTextStyle: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
  image: {
    width: '100%',
    height: '60%',
  },
  ItemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  headingText: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  descriptionTextTitle: {
    fontSize: 20,
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },
  description: {
    marginTop: 20,
    marginLeft: 15,
  },
  quantitystyles: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pickerStyle: {
    width: '20%',
    borderWidth: 1,
    borderRadius: 16,
    marginRight: 5,
    borderColor: 'tomato',
  },
  buyButtonContainer: {
    marginTop: 10,
  },
  buyButtonStyle: {
    backgroundColor: 'tomato',
    width: '80%',
    height: '25%',
  },
  buttonTexts: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    marginLeft: 10,
  },
  descriptionContainer: {
    flexGrow: 1,
     marginLeft: 10, 
  }

});
