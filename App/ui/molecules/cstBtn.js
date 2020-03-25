import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';


const CstBtn = props => {
  return (
         <TouchableOpacity style={styles.buttonStyle} {...props}>
<Text style={styles.btnTextStyle}>{props.title} - £ {props.price}</Text>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
     buttonStyle: {
      flexGrow: 1,
      marginHorizontal: 3,
    },
  btnTextStyle: {
    textAlign: 'center',
    color: '#0681C7',
  },
});
export default CstBtn;
