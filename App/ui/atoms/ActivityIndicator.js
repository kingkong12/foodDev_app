import * as React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';

const Spinner = ({animate, ...props}) => (
  <ActivityIndicator animating={animate} color={Colors.red800} {...props} />
);

export default Spinner;
