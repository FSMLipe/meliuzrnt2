import React from 'react';

import {View, StyleSheet, Dimensions} from 'react-native';

import IsAuth from '../../components/IsAuth';

const dash: React.FC = () => {
  return (
    <View style={styles.default}>
      <IsAuth />
    </View>
  );
};

export default dash;

const styles = StyleSheet.create({
  default: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
