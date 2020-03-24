import {View, FlatList} from 'react-native';
import {addtoCartAction} from '../../Actions/dashbaord.action';
import {dadshBoardstyles as styles} from './dashboard.styles';
import Display from '../molecules/Display';
import React from 'react';
import {connect} from 'react-redux';

class Medicine extends React.Component {
  addMedicinetoCart = (item, quantity) => {
    let {cartItemsList} = this.props.itemReducer;

    let foundInCart = cartItemsList.find(
      cartItemId => cartItemId.id === item.id,
    );
    foundInCart
      ? alert('It is been added previousle')
      : this.props.addtoCartAction({...item, quantity});
  };

  render() {
    let colNo = 2;
    return (
      <View style={styles.bin}>
        <FlatList
          keyExtractor={(i, x) => `${x}`}
          numColumns={colNo}
          renderItem={({item}) => (
            <Display
              item={item}
              buyItem={() =>
                this.props.navigation.navigate('medicineInformation', {
                  item: item,
                  addItemtoCart: quantity =>
                    this.addMedicinetoCart(item, quantity),
                })
              }
            />
          )}
          data={this.props.itemReducer.list}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemReducer: state.itemReducer,
    adminLogin: state.adminLogin,
  };
};

export default connect(
  mapStateToProps,
  {addtoCartAction},
)(Medicine);

// need to fix redux
//   card compoennt
// dashborad componentnanme

