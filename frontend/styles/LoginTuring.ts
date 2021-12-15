import {StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

export const rootStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export const containerStyles = StyleSheet.create({
  containerNotLogo: {
    flex: 0.9,
    alignItems: 'center',
  },
  containerUpRed: {
    flex: 0.5,
  },
  containerRed: {
    flex: 1,
    width: '88%',
    height: '90%',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.primary,
    marginBottom: 60,
  },
  containerTitle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerTextLogin: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  containerTextEnterInfo: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTextFields: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButton: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0.5,
  },
  containerTextForgotPassword: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 38,
    letterSpacing: 0,
    textAlign: 'center',
    padding: 10,
  },
  inputStyle: {
    marginHorizontal: 32,
    borderWidth: 1,
    paddingVertical: 11,
    paddingHorizontal: 20,
    marginBottom: 10,
    color: colors.black,
    borderColor: colors.greyText,
    fontSize: 16,
    borderRadius: 50,
    backgroundColor: colors.white,
    width: '90%',
  },
  textLogin: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 38,
    letterSpacing: 0,
    textAlign: 'center',
    padding: 10,
  },
  textEnterInfo: {
    fontFamily: 'Roboto',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 38,
    letterSpacing: 0,
    textAlign: 'center',
  },
  textForgotPassword: {
    fontFamily: 'Roboto',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 38,
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});
