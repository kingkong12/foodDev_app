import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import { Text, View} from 'react-native';
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
            <Text style={styles.fieldHeader}>Restaurent Specifics</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.label}>Name :</Text>
              <Text>The UK restaurent</Text>
            </View>
            <View stylse={styles.restaurentAddressConatiner}>
              <Text style={styles.label}>Address :</Text>
              <View style={styles.addressField}>
                <Text> Diamond Road, New shire, London</Text>
              </View>
            </View>
          </View>
          <View style={styles.progressbarContainer}>
            <Text style={styles.fieldHeader}>Order Deatils</Text>
            <Text style={styles.label}>Order ID : </Text>
            <Text style={styles.label}>Delievery Day & Time:</Text>
            <ProgressSteps activeStep={2}>
              <ProgressStep
                nextBtnDisabled
                previousBtnDisabled
                nextBtnText=""
                previousBtnText=""
                label="Place Order"
              />
              <ProgressStep
                nextBtnDisabled
                previousBtnDisabled
                label="Preparing Order"
              />
              <ProgressStep
                nextBtnText=""
                finishBtnText=""
                previousBtnText=""
                nextBtnDisabled
                label="Out Delievery"
              />
            </ProgressSteps>
          </View>
        </View>
      </View>
    );
  }
}

