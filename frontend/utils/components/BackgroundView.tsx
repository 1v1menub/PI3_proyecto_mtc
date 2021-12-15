import React from 'react';
import {View} from 'react-native';
import Background from '../../assets/images/background';

const BackgroundView = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}>
      <Background style={{flex: 1, opacity: 0.55}} width="100%" height="100%" />
    </View>
  );
};

export default BackgroundView;
