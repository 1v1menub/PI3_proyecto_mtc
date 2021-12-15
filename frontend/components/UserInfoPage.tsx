import React from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';
import {
  rootStyles,
  containerStyles,
  textStyles,
  userCardStyles,
} from '../styles/UserInfoPage';
import LogoTopBar from '../utils/components/LogoTopBar';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import {UserInfoProps} from '../types/UserInfoPage';
import {User, UserType} from '../utils/requests/user';
import {CustomButton} from '../utils/components/Button';
import {colors} from '../utils/colors';
import {pages} from '../constants/pages';
import {TimerPageProps} from '../types/TimerPage';
import BackgroundView from '../utils/components/BackgroundView';
import CustomText from '../utils/components/CustomText';

const UserInfoPage: NavigationFunctionComponent<UserInfoProps> = props => {
  const [user, setUser] = React.useState<UserType | undefined>(undefined);
  React.useEffect(() => {
    (async () => {
      const response = await User.getUser(props.dni);
      setUser(response);
    })();
  }, []);

  return (
    <View style={rootStyles.root}>
      <BackgroundView />
      <LogoTopBar />

      <View style={containerStyles.containerTitle}>
        <CustomText style={textStyles.title} typography="Lato-Regular">
          Información del postulante
        </CustomText>
      </View>
      {/* // WARNING activity indicator size only works in android */}
      {user === undefined ? (
        <>
          <View style={containerStyles.containerSpinLoader}>
            <ActivityIndicator size={56} color={colors.red} />
          </View>
        </>
      ) : (
        <>
          <View style={containerStyles.containerRed}>
            <View style={containerStyles.containerUserCard}>
              {/* <View style={userCardStyles.divider} /> */}
              <View style={userCardStyles.textBox}>
                <View style={userCardStyles.key}>
                  <CustomText
                    style={userCardStyles.valueText}
                    typography="Lato-Regular">
                    Nombre:
                  </CustomText>
                </View>
                <View style={userCardStyles.value}>
                  <CustomText
                    style={userCardStyles.keyText}
                    typography="Lato-Regular">
                    {user?.name}
                  </CustomText>
                </View>
              </View>
              <View style={userCardStyles.divider} />
              <View style={userCardStyles.textBox}>
                <View style={userCardStyles.key}>
                  <CustomText
                    style={userCardStyles.valueText}
                    typography="Lato-Regular">
                    Tipo documento:
                  </CustomText>
                </View>
                <View style={userCardStyles.value}>
                  <CustomText
                    style={userCardStyles.keyText}
                    typography="Lato-Regular">
                    {user.docType}
                  </CustomText>
                </View>
              </View>
              <View style={userCardStyles.divider} />
              <View style={userCardStyles.textBox}>
                <View style={userCardStyles.key}>
                  <CustomText
                    style={userCardStyles.valueText}
                    typography="Lato-Regular"
                    numberOfLines={3}>
                    Número documento:
                  </CustomText>
                </View>
                <View style={userCardStyles.value}>
                  <CustomText
                    style={userCardStyles.keyText}
                    typography="Lato-Regular">
                    {props.dni}
                  </CustomText>
                </View>
              </View>
              <View style={userCardStyles.divider} />
              <View style={userCardStyles.textBox}>
                <View style={userCardStyles.key}>
                  <CustomText
                    style={userCardStyles.valueText}
                    typography="Lato-Regular">
                    Categoría:
                  </CustomText>
                </View>
                <View style={userCardStyles.value}>
                  <CustomText
                    style={userCardStyles.keyText}
                    typography="Lato-Regular">
                    {user?.type}
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
                Navigation.push<TimerPageProps>(props.componentId, {
                  component: {
                    name: pages.TIMERPAGE,
                    passProps: {
                      dni: props.dni,
                    },
                  },
                });
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default UserInfoPage;
