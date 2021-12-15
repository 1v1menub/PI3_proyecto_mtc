import React, {useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Touchable,
  Keyboard,
} from 'react-native';
import {rootStyles, containerStyles, textStyles} from '../styles/LoginTuring';
import LogoTopBar from '../utils/components/LogoTopBar';
import {
  NavigationFunctionComponent,
  Navigation,
  NavigationComponentListener,
} from 'react-native-navigation';
import {CustomButton} from '../utils/components/Button';

import {colors} from '../utils/colors';

import {pages} from '../constants/pages';
import {Supervisor} from '../utils/requests/supervisor';
import {TouringInfoProps} from '../types/TouringInfo';
import Background from '../assets/images/background';
import BackgroundView from '../utils/components/BackgroundView';
import KeyboardAvoidingWrapper from '../utils/components/KeyboardAvoidingViewWrapper';

import CustomText from '../utils/components/CustomText';
import SplashScreen from 'react-native-lottie-splash-screen';

const LoginTouring: NavigationFunctionComponent = props => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const [showTitle, setShowTitle] = React.useState(true);

  const setShowTitleFalse = () => {
    setShowTitle(false);
  };

  const setShowTitleTrue = () => {
    setShowTitle(true);
  };

  useEffect(() => {
    SplashScreen.hide();
    let unsubscribeDidShow = Keyboard.addListener(
      'keyboardDidShow',
      setShowTitleFalse,
    );
    let unsubscribeDidHide = Keyboard.addListener(
      'keyboardDidHide',
      setShowTitleTrue,
    );

    const listener: NavigationComponentListener = {
      componentWillAppear: () => {
        unsubscribeDidShow = Keyboard.addListener(
          'keyboardDidShow',
          setShowTitleFalse,
        );
        unsubscribeDidHide = Keyboard.addListener(
          'keyboardDidHide',
          setShowTitleTrue,
        );
      },
      componentDidDisappear: () => {
        unsubscribeDidShow.remove();
        unsubscribeDidHide.remove();
      },
    };

    const unsubscribe = Navigation.events().registerComponentListener(
      listener,
      props.componentId,
    );

    return () => {
      unsubscribe.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingWrapper>
      <View style={rootStyles.root}>
        <BackgroundView />
        <LogoTopBar />
        <View style={containerStyles.containerNotLogo}>
          <View style={containerStyles.containerUpRed}>
            {showTitle && (
              <View style={containerStyles.containerTitle}>
                <CustomText style={textStyles.title} typography="Lato-Regular">
                  Examen de manejo en vía pública
                </CustomText>
              </View>
            )}
            <View style={containerStyles.containerTextLogin}>
              <CustomText style={textStyles.textLogin} typography="Lato-Bold">
                Iniciar sesión
              </CustomText>
            </View>
          </View>
          <View style={containerStyles.containerRed}>
            <View style={containerStyles.containerTextEnterInfo}>
              <CustomText
                style={textStyles.textEnterInfo}
                typography="Lato-Regular">
                Ingrese su correo electrónico y contraseña asignada
              </CustomText>
            </View>
            <View style={containerStyles.containerTextFields}>
              <TextInput
                style={textStyles.inputStyle}
                value={username}
                onChangeText={setUsername}
                placeholder="Usuario"
                placeholderTextColor={colors.greyText}
              />
              <TextInput
                style={textStyles.inputStyle}
                value={password}
                onChangeText={setPassword}
                placeholder="Contraseña"
                placeholderTextColor={colors.greyText}
                secureTextEntry={true}
              />
            </View>
            <View style={containerStyles.containerButton}>
              <CustomButton
                loading={loading}
                title="INGRESAR"
                action={async () => {
                  setLoading(true);
                  const supervisor = await Supervisor.getSupervisor(
                    username,
                    password,
                  );
                  setLoading(false);
                  Navigation.push<TouringInfoProps>(props.componentId, {
                    component: {
                      name: pages.TOURINGINFOPAGE,
                      passProps: {
                        ...supervisor,
                      },
                    },
                  });
                }}
              />
            </View>
            <View style={containerStyles.containerTextForgotPassword}>
              <CustomText
                style={textStyles.textForgotPassword}
                typography="Lato-Regular">
                Olvidé mi contraseña
              </CustomText>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

export default LoginTouring;
