import React from 'react';
import {Text, ScrollView, View, Button, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../atoms/Card';
import helathyItems from '../../constants/MockData/listofItems';

class DashBoard extends React.Component {
  render() {
    const dummyIterator = [0, 1, 2, 3, 4, 5, 6, 3, 32, 4, 3, 3, 4, 3, 2, , 2];
    return (
      <View style={styles.container}>
        {helathyItems.map((ary, index) => (
          <Card
            key={index}
            item={ary}
            itemInfo={() =>
              this.props.navigation.navigate('MyModal', {
                item: ary,
              })
            }
            buyItem={() =>
              this.props.navigation.navigate('MyModal', {
                item: ary,
              })
            }
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
    flex: 1,
    width: '100%',
  },
});
export default DashBoard;
