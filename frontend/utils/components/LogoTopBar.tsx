import React from 'react';
import {View, Image, Text} from 'react-native';
import {containerStyles, topBarStyles} from '../../styles/App';
import CustomText from './CustomText';

const LogoTopBar = () => {
  return (
    <View style={containerStyles.containerTopBar}>
      <Image
        source={require('../../assets/images/escudo.png')}
        style={topBarStyles.logo}
        resizeMode="contain"
      />
      <View style={topBarStyles.divider} />
      <CustomText style={topBarStyles.textAfterLogo} typography="Lato-Regular">
        Plataforma digital única del Estado Peruano
      </CustomText>
    </View>
  );
};

export default LogoTopBar;
