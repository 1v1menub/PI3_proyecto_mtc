import {StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

export const rootStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 38,
    // letterSpacing: 1.5,
    textAlign: 'center',
    padding: 10,
  },
});

export const containerStyles = StyleSheet.create({
  containerNotLogo: {
    flex: 0.9,
    alignItems: 'center',
  },
  containerTitle: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerPhoto: {
    flex: 0.2,
    width: '40%',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 10,
  },
  containerRed: {
    flex: 0.55,
    width: '88%',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.primary,
    marginBottom: 20,
  },
  containerButton: {
    flex: 0.2,
    alignItems: 'center',
  },
  containerUserCard: {
    flex: 1,
  },
});

export const userCardStyles = StyleSheet.create({
  divider: {
    backgroundColor: colors.dividerCard,
    flex: 0.006,
  },
  textBox: {
    flex: 0.3,
    flexDirection: 'row',
    marginHorizontal: 18,
  },
  key: {
    flex: 0.4,
    justifyContent: 'center',
    marginRight: 10,
  },
  value: {
    flex: 0.75,
    justifyContent: 'center',
  },
  valueText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  keyText: {
    fontSize: 17,
  },
});

export const buttonStyles = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: colors.secondary,
  },
  text: {
    color: colors.white,
    fontSize: 15,
  },
});
