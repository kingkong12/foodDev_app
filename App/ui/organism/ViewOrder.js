import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

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
            <Text style={styles.fieldHeader}>Restaurent Deatils</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.label}>Name :</Text>
              <Text> {mockData.name}</Text>
            </View>
            <View style={styles.restaurentAddressConatiner}>
              <Text style={styles.label}>Address :</Text>
              <View style={styles.addressField}>
                <Text> {mockData.address}</Text>
              </View>
            </View>
          </View>
          <View style={styles.progressbarContainer}>
            <Text style={styles.fieldHeader}>Order Deatils</Text>
            <Text style={styles.label}>Order ID : </Text>
            <Text style={styles.label}>Delievery Day & Time:</Text>
            <ProgressSteps borderStyle="1" activeStep={2}>
              <ProgressStep
                previousBtnDisabled
                nextBtnDisabled
                nextBtnText=""
                previousBtnText=""
                label="Place Order"
              />
              <ProgressStep
                previousBtnDisabled
                nextBtnDisabled
                nextBtnText=""
                previousBtnText=""
                label="Preparing Order"
              />
              <ProgressStep
                previousBtnDisabled
                nextBtnDisabled
                nextBtnText=""
                previousBtnText=""
                finishBtnText=""
                label="Delievery"
              />
            </ProgressSteps>
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
  fieldHeader: {
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
  label: {
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
  progressbarContainer: {
    flex: 1,
    paddingTop: 8,
  },
});
