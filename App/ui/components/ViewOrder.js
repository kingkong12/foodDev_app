import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {Text, View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {viewOrderStyles as styles} from '../../styles';

export default class ViewOrder extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <Text style={styles.headerTextStyle}>Details</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.detailContainer}>
            <Text style={styles.fieldHeader}>Medical Store Specifics</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.label}>Name :</Text>
              <Text>Boots Pharmacy</Text>
            </View>
            <View stylse={styles.restaurentAddressConatiner}>
              <Text style={styles.label}>Address :</Text>
              <View style={styles.addressField}>
                <Text> Diamond Road, New shire, London</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
