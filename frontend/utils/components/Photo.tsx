import React from 'react';
import {View, Image, Text} from 'react-native';
import {containerStyles, imageStyles} from '../../styles/App';

const UserPhoto = () => {
  return (
    <View style={containerStyles.containerPhoto}>
      <Image
        source={require('../../assets/images/user.png')}
        style={imageStyles.photo}
        resizeMode="contain"
      />
    </View>
  );
};

export default UserPhoto;
