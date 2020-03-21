import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Headline} from 'react-native-paper';

class AddINewtem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Headline style={styles.headingStyle}> Add item to list</Headline>
        <View style={styles.rowCss}>
          <TextInput dense label="Price" value={''} onChangeText={text => {}} />
        </View>
        <View style={styles.rowCss}>
          <TextInput
            multiline
            label="Description"
            value={''}
            onChangeText={text => {}}
          />
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
});

export default AddINewtem;
