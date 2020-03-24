import {View, FlatList} from 'react-native';
import {addMedicine} from '../../Actions/dashbaord.action';
import {dadshBoardstyles as styles} from './dashboard.styles';
import Display from '../molecules/Display';
import React from 'react';
import {connect} from 'react-redux';

class Medicine extends React.Component {
  addMedicinetoCart = (item, quantity) => {
    let {cartItemsList} = this.props.medicine;
    let foundInCart = cartItemsList.find(
      cartItemId => cartItemId.id === item.id,
    );
    foundInCart
      ? alert('Medicine has been added previousle')
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
          data={this.props.medicine.list}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    medicine: state.itemReducer,
  };
};

export default connect(
  mapStateToProps,
  {addMedicine},
)(Medicine);