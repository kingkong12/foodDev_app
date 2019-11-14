import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../atoms/Card';
class DashBoard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'flex-start',
  },
});
export default DashBoard;
