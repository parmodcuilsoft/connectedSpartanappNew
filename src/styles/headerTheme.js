import {Platform} from 'react-native';

const colors = {
  background: '#484849',
  white: 'white',
};

const components = {
  Header: {
    backgroundColor: colors.background,
    containerStyle: {
      width: '100%',
      flexDirection: 'row',
      height: 42,
      margin: 0,
      // borderBottomWidth: 0,
      padding: 0,
    },
    leftContainerStyle: {
      margin: 0,
      marginTop: -24,
      marginLeft: 8,
      height: 42,
    },
    centerContainerStyle: {
      flex: 5,
      margin: 0,
      height: 42,
      marginTop: Platform.OS === 'android' ? 0 : -28,
    },
  },
  Text: {
    style: {
      color: colors.white,
      fontSize: 24,
      fontFamily: 'SourceSansPro-Semibold',
    },
  },
};

export default {
  colors,
  ...components,
};
