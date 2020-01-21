import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

export default class ViewOrder extends Component {
  render() {
    const mockData = {
      name: 'The Waterside Inn',
      address: 'Ferry Road, Maidenhead, Berkshire ',
    };
    return (
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <Text style={styles.headerTextStyle}> Order Details </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.detailContainer}>
            <Text style={styles.restaurentDetailHeader}>
              Restaurent Deatils
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.restauerentName}>Name :</Text>
              <Text> {mockData.name}</Text>
            </View>
            <View style={styles.restaurentAddressConatiner}>
              <Text style={styles.restauerentName}>Address :</Text>
              <View style={styles.addressField}>
                <Text> {mockData.address}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  headerStyle: {
    minHeight: '8%',
    width: '100%',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#EFEFEF',
    paddingTop: '4%',
  },
  headerTextStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 18,
    color: '#777777',
  },
  body: {
    margin: 15,
  },
  restaurentDetailHeader: {
    color: '#777777',
    fontWeight: 'bold',
    paddingBottom: 8,
    fontSize: 16,
  },
  detailContainer: {
    fontSize: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#EFEFEF',
    flexDirection: 'column',
    flexWrap: 'wrap',
    //    borderWidth: 1,
  },
  restauerentName: {
    color: '#777777',
    paddingBottom: 8,
    fontSize: 16,
  },
  restaurentAddressConatiner: {
    flexDirection: 'row',
  },
  addressField: {
    flexShrink: 1,
  },
});
