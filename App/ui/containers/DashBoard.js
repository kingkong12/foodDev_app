import React from 'react';
import {Text, ScrollView, View, Button, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../atoms/Card';

class DashBoard extends React.Component {
  render() {
    const dummyIterator = [0, 1, 2, 3, 4, 5, 6, 3, 32, 4, 3, 3, 4, 3, 2, , 2];
    return (
      <View style={styles.container}>
        {dummyIterator.map((ary, index) => (
          <Card
            key={index}
            itemInfo={() => this.props.navigation.navigate('MyModal')}
            buyItem={() => this.props.navigation.navigate('MyModal')}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
    flexDirection: 'row',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
  },
  scrollView: {
    flexGrow: 1,
  },
});
export default DashBoard;
