import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Card from '../molecules/Card';
import {addtoCartAction} from '../../Actions/dashbaord.action';
import {connect} from 'react-redux';
import SearchBar from 'react-native-search-bar';
import {FAB, Portal, Provider} from 'react-native-paper';

class DashBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      openFab: false,
    };
  }

  addItemtoCart = (item, quantity) => {
    let {cartItemsList} = this.props.itemReducer;

    let foundInCart = cartItemsList.find(
      cartItemId => cartItemId.id === item.id,
    );
    if (foundInCart) {
      alert('ITEM ALREADY ADDED TO CART');
    } else {
      this.props.addtoCartAction({...item, quantity});
    }
  };

  render() {
    const {list} = this.props.itemReducer;
    const searchedList =
      list.filter(
        data =>
          data.itemName
            .toLowerCase()
            .indexOf(this.state.search.toLowerCase()) !== -1,
      ) || list;

    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <SearchBar
            placeholder="Search"
            onChangeText={value => this.setState({search: value})}
            onSearchButtonPress={() => {}}
            onCancelButtonPress={() => this.setState({search: ''})}
          />
        </View>

        <FlatList
          data={searchedList} // here ypu will passs array data eg: [ 'Granular Bar' , 'Avacado Toast' , 'Salad' , 'Wrap' ]
          renderItem={(
            {item}, // now we are looping through above data and generating multiple cards
          ) => (
            <Card
              item={item}
              itemInfo={() =>
                //  these are callback function which will  open modal from routes js  and pass inforation to modal for diaplying
                this.props.navigation.navigate('MyModal', {
                  item: item, // these are the property you are passing to maodla
                })
              }
              buyItem={() =>
                //  similar to itemInfo
                this.props.navigation.navigate('MyModal', {
                  // these are the property you are passing to maodla
                  addtoCart: true,
                  item: item,
                  addItemtoCart: quantity => this.addItemtoCart(item, quantity),
                })
              }
            />
          )}
          keyExtractor={(item, index) => `${index}`}
          numColumns={2} //  this will dispaly 2 coulmns in UI
        />
        {/* {this.props.adminLogin.isLoggedIn && ( */}
        <FAB
          style={styles.fab}
          color={'white'}
          icon="plus"
          onPress={() => this.props.navigation.navigate('addItem')}
        />
        {/* )} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    minHeight: '8%',
    justifyContent: 'center',
    marginHorizontal: '1%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    marginTop: '2%',
    marginHorizontal: '1%',
  },
  cardContainer: {
    width: '48%',
    marginBottom: '5%',
    marginHorizontal: '1%',
  },
  imageConatiner: {
    flex: 1,
    width: '40%',
    height: '40%',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  description: {
    alignSelf: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'tomato',
  },
});

const mapStateToProps = state => {
  return {
    itemReducer: state.itemReducer,
    adminLogin: state.adminLogin,
  };
};

export default connect(
  mapStateToProps,
  {addtoCartAction},
)(DashBoard);
