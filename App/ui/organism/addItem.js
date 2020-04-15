import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Snackbar, Headline} from 'react-native-paper';
import ReactChipsInput from 'react-native-chips';
import {connect} from 'react-redux';
import axios from 'axios';
import {basceApiUrl} from '../../api/baseUrl';
import {updateDashboardItem} from '../../actions/dashbaord.action';

class AddINewtem extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: 'Granular Bars',
      imageUrl:
        'https://i2.wp.com/www.foodfaithfitness.com/wp-content/uploads/2018/08/sugar-free-keto-low-carb-granola-bars-photograph.jpg',
      price: 4,
      description:
        'A simple, soft and chewy granola bars recipe that’s delicious as-is or can be adapted based on your favorite dried fruits, nuts or chocolate',
      ingredients: [],
      snackBar: {
        visiblity: false,
        snackBarmessage: '',
      },
    };
  }

  renderSnackBar = props => {
    return (
      <Snackbar
        style={{
          backgroundColor: '#DC143C',
        }}
        visible={this.state.snackBar.visiblity}
        duration={900}
        onDismiss={() => this.toggleSnackBar()}>
        {this.state.snackBar.snackBarmessage}
      </Snackbar>
    );
  };

  toggleSnackBar = (status, messgae) => {
    this.setState({
      ...this.state,
      snackBar: {
        ...this.state.snackBar,
        visiblity: status || false,
        snackBarmessage: messgae || '',
      },
    });
  };
  onSubmitfun = () => {
    let {itemName, imageUrl, price, description, ingredients} = this.state;
    let priceAsInteger = parseInt(price) || 10;
    let {list} = this.props.itemReducer;
    const {updateDashboardItem} = this.props;

    var reg = /^\d+$/;
    if (
      itemName === '' ||
      imageUrl === '' ||
      price === '' ||
      description === ''
    ) {
      // price can accept integer with decimal
      this.toggleSnackBar(true, 'One or more Field is Emplty !');
    } else {
      if (itemName.length < 4) {
        this.toggleSnackBar(true, 'Name cannot be less then 4 charachetrs !');
        return;
      }

      let foundInCart = list.find(
        cartItemId =>
          cartItemId.itemName === itemName || cartItemId.url === imageUrl,
      );
      if (foundInCart) {
        this.toggleSnackBar(true, 'Item already exists');
      } else {
        let itemUrl = `${basceApiUrl}/items`;
        let newObejct = {
          itemName: itemName,
          url: imageUrl || '',
          price: priceAsInteger,
          information: description || '',
          nutrients: ingredients || [],
        };

        axios
          .post(itemUrl, newObejct)
          .then(resp => {
            updateDashboardItem(resp.data);
            this.props.navigation.goBack();
          })
          .catch(error => console.log('error', error));
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Headline style={styles.headingStyle}> Add item to list</Headline>
          <View style={styles.rowCss}>
            <TextInput
              dense
              label="Name"
              value={this.state.itemName}
              onChangeText={text => this.setState({itemName: text})}
              maxLength={30}
            />
          </View>
          <View style={styles.rowCss}>
            <TextInput
              dense
              label="Image URL"
              value={this.state.imageUrl}
              onChangeText={text => this.setState({imageUrl: text})}
            />
          </View>
          <View style={styles.rowCss}>
            <TextInput
              dense
              keyboardType="numeric"
              label="Price"
              value={`${this.state.price}`}
              onChangeText={text => this.setState({price: text})}
            />
          </View>
          <View style={styles.rowCss}>
            <TextInput
              multiline
              label="Description"
              type
              value={`${this.state.description}`}
              onChangeText={text => this.setState({description: text})}
            />
            <View style={styles.nutrientsContainer}>
              <ReactChipsInput
                label="Add nutrients lables"
                initialChips={this.state.ingredients}
                onChangeChips={chips => this.setState({ingredients: chips})}
                chipStyle={{
                  borderColor: 'white',
                  backgroundColor: 'tomato',
                }}
              />
            </View>
          </View>
          <View style={styles.buttonStyle}>
            <Button
              color={'tomato'}
              style={{width: '50%', marginRight: 2}}
              mode="contained"
              onPress={() => {
                this.setState({
                  itemName: '',
                  imageUrl: '',
                  pirce: '',
                  description: '',
                  ingredients: [],
                });
              }}
              onPress={() => this.props.navigation.goBack()}>
              Cancel
            </Button>
            <Button
              color={'tomato'}
              style={{width: '50%', marginRight: 2}}
              mode="contained"
              onPress={() => this.onSubmitfun()}>
              Add Item
            </Button>
          </View>
        </View>
        {this.renderSnackBar()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    backgroundColor: 'white',
  },
  headingStyle: {
    color: 'tomato',
    borderBottomWidth: 1,
    paddingBottom: 8,
    borderColor: '#DCDCDC',
    marginBottom: 8,
  },
  rowCss: {
    paddingBottom: 16,
    marginHorizontal: 8,
  },
  buttonStyle: {
    flexDirection: 'row',
    marginTop: 16,
  },
  nutrientsContainer: {
    minHeight: '30%',
  },
});

const mapStateToProps = state => {
  return {
    itemReducer: state.itemReducer,
  };
};

export default connect(
  mapStateToProps,
  {updateDashboardItem},
)(AddINewtem);
