import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.buttonStyle} {...props}>
      <Text style={styles.btnTextStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const Card = ({item, buyItem, itemInfo, ...props}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: item.url,
        }}
        style={styles.cardImage}
      />
      <View style={styles.description}>
        <Text style={styles.priceText}>
          {item.itemName} - {'\u20AC'} {item.price}
        </Text>
        <View style={styles.buttonContainer}>
          <CustomButton title="Info" onPress={itemInfo} />
          <CustomButton title="Buy" onPress={buyItem} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  priceText: {
    color: 'tomato',
    marginVertical: 8,
    textAlign: 'center',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',

    width: '100%',
  },
  buttonStyle: {
    borderWidth: 1,
    flexGrow: 1,
    marginHorizontal: 3,
    borderColor: 'tomato',
    borderRadius: 8,
  },
  btnTextStyle: {
    textAlign: 'center',
    color: 'tomato',
  },
});

// const Card = ({item, itemInfo, buyItem, ...props}) => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={buyItem} style={styles.card}>
//         <Image
//           onPress={itemInfo}
//           source={{
//             uri: item.url,
//           }}
//           style={styles.image}
//         />
//         <View style={styles.cardTextConatiner}>
//           <Text style={styles.cardText}>£ {item.price}</Text>
//           <Button title={item.itemName} />
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: '40%',
//     width: '45%',
//     marginBottom: '2%',
//     marginLeft: '2%',
//   },
//   card: {
//     backgroundColor: '#fff',
//     flex: 1,
//   },
//   image: {
//     width: '100%',
//     height: '75%',
//   },
//   cardFooter: {
//     textAlign: 'center',
//   },
//   cardText: {
//     textTransform: 'uppercase',
//     height: '50%',
//     textAlign: 'center',

//     color: 'tomato',
//     fontSize: 14,
//   },
//   cardTextConatiner: {
//     height: '25%',
//     flex: 1,
//     justifyContent: 'space-between',
//     alignContent: 'space-between',
//   },
// });
export default Card;
