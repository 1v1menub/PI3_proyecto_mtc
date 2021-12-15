import {StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

export const rootStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
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
});

export const containerStyles = StyleSheet.create({
  containerTitle: {
    flex: 0.2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
  },
  containerRed: {
    flex: 0.45,
    width: '88%',
    height: '90%',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.primary,
    marginBottom: 20,
  },
  containerSpinLoader: {
    flex: 0.7,
  },
  containerUserCard: {
    flex: 1,
  },
  containerButton: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
});

export const userCardStyles = StyleSheet.create({
  divider: {
    flex: 0.006,
    backgroundColor: colors.dividerCard,
  },
  textBox: {
    flex: 0.3,
    flexDirection: 'row',
    marginHorizontal: 20,
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
    borderRadius: 50,
    backgroundColor: colors.primary,
    width: '90%',
  },
  text: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
