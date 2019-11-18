import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../atoms/Card';

import {connect} from 'react-redux';

class DashBoard extends React.Component {
  render() {
    const {Items} = this.props.menuItems;
    return (
      <View style={styles.container}>
        {Items.map((ary, index) => (
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

//  redux

const mapStateToProps = state => {
  return {
    menuItems: state.menuItems,
  };
};

export default connect(
  mapStateToProps,
  null,
)(DashBoard);
