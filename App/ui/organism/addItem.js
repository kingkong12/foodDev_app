import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Headline} from 'react-native-paper';
import ReactChipsInput from 'react-native-chips';

class AddINewtem extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: '',
      imageUrl: '',
      pirce: '',
      description: '',
      ingredients: [],
    };
  }

  onSubmitfun = () => {
    let {itemName, imageUrl, pirce, description, ingredients} = this.state;
    if (
      itemName === '' ||
      imageUrl === '' ||
      pirce === '' ||
      description === ''
    ) {
      //alert('cannot be empty');
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
              label="Price"
              value={this.state.price}
              onChangeText={text => this.setState({price: text})}
            />
          </View>
          <View style={styles.rowCss}>
            <TextInput
              multiline
              label="Description"
              value={this.state.description}
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
              }}>
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

export default AddINewtem;
