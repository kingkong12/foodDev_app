import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from '../molecules/Card';
import {addtoCartAction} from '../../Actions/dashbaord.action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class DashBoard extends React.Component {
  addItemtoCart = item => {
    this.props.addtoCartAction(item);
  };
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
                addtoCart: true,
                item: ary,
                addItemtoCart: () => this.addItemtoCart(ary),
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
  {addtoCartAction},
)(DashBoard);
