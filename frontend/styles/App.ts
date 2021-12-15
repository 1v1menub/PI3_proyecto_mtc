import {StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

export const containerStyles = StyleSheet.create({
  containerTopBar: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  containerTitle: {
    flex: 0.46,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  left: {
    flex: 0.46,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    transform: [{scaleX: 1.5}],
  },
  generalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerPhoto: {
    flex: 1,
  },
});

export const arrowStyles = StyleSheet.create({
  arrowRect: {
    width: 20,
    height: 100,
    backgroundColor: 'white',
  },

  arrowTriangleDown: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    transform: [{rotate: '180deg'}],
  },
  triangleContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export const topBarStyles = StyleSheet.create({
  logo: {
    flex: 0.35,
    marginLeft: 12,
    maxHeight: 60,
  },
  divider: {
    height: 45,
    backgroundColor: colors.white,
    flex: 0.005,
    marginRight: 12,
    marginLeft: 12,
    maxWidth: 2,
  },
  textAfterLogo: {
    flex: 0.645,
    color: colors.white,
    marginRight: 12,
    fontSize: 14,
  },
});

export const imageStyles = StyleSheet.create({
  photo: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 500,
  },
});

export const textStyles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 38,
    letterSpacing: 0,
    textAlign: 'center',
    padding: 10,
  },

  location: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'center',
  },

  identifier: {
    marginTop: 80,
    marginBottom: 40,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'white',
  },
});
