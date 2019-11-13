import {Platform} from 'react-native';

const human = Platform.OS === 'ios';

export default {
  display4: {
    fontSize: 96.0,
    fontWeight: '100',
    fontFamily: human ? '.SF UI Display' : 'Roboto',
  },
  display3: {
    fontSize: 60.0,
    fontWeight: '100',
    fontFamily: human ? '.SF UI Display' : 'Roboto',
  },
  display2: {
    fontSize: 48.0,
    fontWeight: '400',
    fontFamily: human ? '.SF UI Display' : 'Roboto',
  },
  display1: {
    fontSize: 34.0,
    fontWeight: '400',
    fontFamily: human ? '.SF UI Display' : 'Roboto',
  },
  headline: {
    fontSize: 24.0,
    fontWeight: '400',
    fontFamily: human ? '.SF UI Display' : 'Roboto',
  },
  title: {
    fontSize: 21.0,
    fontWeight: '500',
    fontFamily: human ? '.SF UI Display' : 'Roboto',
  },
  subhead: {
    fontSize: 17.0,
    fontWeight: '400',
    fontFamily: human ? '.SF UI Text' : 'Roboto',
  },
  body2: {
    fontSize: 17.0,
    fontWeight: '400',
    fontFamily: human ? '.SF UI Text' : 'Roboto',
  },
  body1: {
    fontSize: 15.0,
    fontWeight: '400',
    fontFamily: human ? '.SF UI Text' : 'Roboto',
  },
  caption: {
    fontSize: 13.0,
    fontWeight: '400',
    fontFamily: human ? '.SF UI Text' : 'Roboto',
  },
  button: {
    fontSize: 15.0,
    fontWeight: '500',
    fontFamily: human ? '.SF UI Text' : 'Roboto',
  },
  subtitle: {
    fontSize: 15.0,
    fontWeight: '500',
    fontFamily: human ? '.SF UI Text' : 'Roboto',
  },
  overline: {
    fontSize: 11.0,
    fontWeight: '400',
    fontFamily: human ? '.SF UI Text' : 'Roboto',
  },
};
