import React from 'react';
import {Text, View, Image} from 'react-native';
import { cartCardStyles as styles } from './cartCard.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BucketCard = ({item, showModalFun, ...props}) => {
  let itemPrice = item.price * item.quantity;
  return (
    <View style={styles.cardsCss}>
      <View style={styles.description}>
        <View style={styles.moreDescription}>
          <Text style={styles.itemNameTitemNameTextext}>{item.itemName}</Text>
        </View>
         <View style={{ flex: 1, }}>
        <Image
          onPress={() => {}}
          source={{uri: item.url}}
          style={styles.pic}
        />
      </View>
        <View style={styles.modifyDetail}>
          <Text style={styles.prics}>£ {itemPrice} X {item.quantity}</Text>
          <Text style={styles.modifyamonut} onPress={() => showModalFun(item)}>
            <Icon
                onPress={() => showModalFun(item)}
                name="edit"
                size={18}
                color={'#0681C7'}
              />
          </Text>
        </View>
      </View>
    </View>
  );
};


export default BucketCard;
