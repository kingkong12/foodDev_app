import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Card from '../molecules/Card';
import {
  addtoCartAction,
  addDashboardItem,
  showActivityIndicator,
  hideActivityIndicator,
  deleteDashBoardItem,
} from '../../actions/dashbaord.action';
import {connect} from 'react-redux';
import SearchBar from 'react-native-search-bar';
import {FAB, Portal, Dialog, Paragraph, Button} from 'react-native-paper';
import axios from 'axios';
import Spinner from '../atoms/ActivityIndicator';
import {basceApiUrl} from '../../api/baseUrl';

class DashBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      openFab: false,
      showConfirmDialog: false,
      deleteItemId: undefined,
    };
  }

  componentDidMount() {
    const {
      addDashboardItem,
      showActivityIndicator,
      hideActivityIndicator,
    } = this.props;
    let itemUrl = `${basceApiUrl}/items`;

    showActivityIndicator();
    axios
      .get(itemUrl)
      .then(resp => addDashboardItem(resp.data))
      .catch(error => {
        console.log(error);
      });
    hideActivityIndicator();
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

  deleteItem = () => {
    const {deleteDashBoardItem} = this.props;
    console.log('deleteDashBoardItem', this.props);
    this.setState({showConfirmDialog: false});
    let itemUrl = `${basceApiUrl}/items/${this.state.deleteItemId}/`;
    axios
      .delete(itemUrl)
      .then(resp => deleteDashBoardItem(this.state.deleteItemId))
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {adminLogin} = this.props;
    const {list, spinner} = this.props.itemReducer;
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
        <Spinner animate={spinner} />
        <FlatList
          data={searchedList} // here ypu will passs array data eg: [ 'Granular Bar' , 'Avacado Toast' , 'Salad' , 'Wrap' ]
          renderItem={(
            {item}, // now we are looping through above data and generating multiple cards
          ) => (
            <Card
              adminLogin={adminLogin}
              onDelete={id =>
                this.setState({showConfirmDialog: true, deleteItemId: id})
              }
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
          numColumns={2}
        />
        {this.props.adminLogin.isLoggedIn && (
          <FAB
            style={styles.fab}
            color={'white'}
            icon="plus"
            onPress={() => this.props.navigation.navigate('addItem')}
          />
        )}

        <Portal>
          <Dialog
            visible={this.state.showConfirmDialog}
            onDismiss={() => this.setState({showConfirmDialog: false})}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                Are you sure you want to delete this item ?{' '}
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this.deleteItem}> Ok </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
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
  {
    addtoCartAction,
    deleteDashBoardItem,
    addDashboardItem,
    showActivityIndicator,
    hideActivityIndicator,
  },
)(DashBoard);
