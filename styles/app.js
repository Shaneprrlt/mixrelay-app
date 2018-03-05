import {
  StyleSheet
} from 'react-native';

export const BLUE = '#0072F7';
export const DARKBLUE = '#2B435F';
export const LIGHTBLUE = '#D2E7FF';
export const DARKBLUEGRAY = '#4D5A68';
export const LIGHTBLUEGRAY = '#AEB3B9';
export const WHITE = '#FFFFFF';
export const DARKCHARCOAL = '#5C5C5C';
export const DARKGRAY = '#6D6D6D';
export const GRAY = '#B1B1B1';
export const LIGHTGRAY = '#F8F8F8';
export const DARKGREEN = '#008A6B';
export const LIGHTGREEN = '#50E3C2';

export default StyleSheet.create({
  topNavigationPrimary: {
    flexDirection: 'column'
  },
  topNavigationContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  topNavigationPrimaryIcon: {
  },
  topNavigationPrimaryText: {
    color: WHITE,
    fontFamily: 'Avenir Next',
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: 0,
    marginLeft: 8
  },
  formGroup: {

  },
  formLabel: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Avenir Next',
    fontWeight: '600',
    color: DARKGRAY,
    padding: 10,
    paddingLeft: 20
  },
  formInput: {
    backgroundColor: WHITE,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 22,
    fontFamily: 'Avenir Next',
    color: DARKCHARCOAL,
    fontWeight: '400'
  }
});
