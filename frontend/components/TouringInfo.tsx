import React from 'react';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import {TouringInfoProps} from '../types/TouringInfo';
import {
  rootStyles,
  containerStyles,
  textStyles,
  userCardStyles,
} from '../styles/TouringInfo';
import {View} from 'react-native';
import LogoTopBar from '../utils/components/LogoTopBar';
import {CustomButton} from '../utils/components/Button';
import {pages} from '../constants/pages';
import BackgroundView from '../utils/components/BackgroundView';
import Photo from '../utils/components/Photo';
import CustomText from '../utils/components/CustomText';

const TouringInfo: NavigationFunctionComponent<TouringInfoProps> = props => {
  return (
    <View style={rootStyles.root}>
      <BackgroundView />
      <LogoTopBar />
      <View style={containerStyles.containerNotLogo}>
        <View style={containerStyles.containerTitle}>
          <CustomText style={textStyles.title} typography="Lato-Regular">
            Bienvenido al Sistema de Examen de Manejo en vía pública
          </CustomText>
        </View>
        <View style={containerStyles.containerPhoto}>
          <Photo />
        </View>
        <View style={containerStyles.containerRed}>
          <View style={containerStyles.containerUserCard}>
            {/* <View style={userCardStyles.divider} /> */}
            <View style={userCardStyles.textBox}>
              <View style={userCardStyles.key}>
                <CustomText
                  style={userCardStyles.valueText}
                  typography="Lato-Regular">
                  Entidad:
                </CustomText>
              </View>
              <View style={userCardStyles.value}>
                <CustomText
                  style={userCardStyles.keyText}
                  typography="Lato-Regular">
                  {props.entity}
                </CustomText>
              </View>
            </View>
            <View style={userCardStyles.divider} />
            <View style={userCardStyles.textBox}>
              <View style={userCardStyles.key}>
                <CustomText
                  style={userCardStyles.valueText}
                  typography="Lato-Regular">
                  Tipo entidad:
                </CustomText>
              </View>
              <View style={userCardStyles.value}>
                <CustomText
                  style={userCardStyles.keyText}
                  typography="Lato-Regular">
                  {props.entityType}
                </CustomText>
              </View>
            </View>
            <View style={userCardStyles.divider} />
            <View style={userCardStyles.textBox}>
              <View style={userCardStyles.key}>
                <CustomText
                  style={userCardStyles.valueText}
                  typography="Lato-Regular">
                  Usuario:
                </CustomText>
              </View>
              <View style={userCardStyles.value}>
                <CustomText
                  style={userCardStyles.keyText}
                  typography="Lato-Regular">
                  {props.name}
                </CustomText>
              </View>
            </View>
            <View style={userCardStyles.divider} />
            <View style={userCardStyles.textBox}>
              <View style={userCardStyles.key}>
                <CustomText
                  style={userCardStyles.valueText}
                  typography="Lato-Regular">
                  Tipo perfil:
                </CustomText>
              </View>
              <View style={userCardStyles.value}>
                <CustomText
                  style={userCardStyles.keyText}
                  typography="Lato-Regular">
                  {props.type}
                </CustomText>
              </View>
            </View>
            {/* <View style={userCardStyles.divider} /> */}
          </View>
        </View>
        <View style={containerStyles.containerButton}>
          <CustomButton
            title="CONTINUAR"
            action={() => {
              Navigation.push(props.componentId, {
                component: {
                  name: pages.APP,
                },
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default TouringInfo;
