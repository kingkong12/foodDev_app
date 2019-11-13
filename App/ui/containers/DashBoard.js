import React from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class DashBoard extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Dash Board</Text>
        <Icon name="rocket" size={44} />
      </View>
    );
  }
}

export default DashBoard;
