import {RFPercentage} from 'react-native-responsive-fontsize';

const colors = {
  primary: '#3d3d3d',
  white: 'white',
};

const theme = {
  Card: {
    wrapperStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      margin: 0,
      position: 'relative',
    },
    containerStyle: {
      backgroundColor: colors.primary,
      borderWidth: 0,
      height: 75,
      margin: 0,
      marginTop: 10,
    },
  },
  Text: {
    h2Style: {
      fontSize: 32,
      color: colors.white,
      fontFamily: 'SourceSansPro-Semibold',
      marginRight: 20,
    },
    style: {
      fontSize: RFPercentage(2.5),
      color: colors.white,
      fontFamily: 'SourceSansPro-Semibold',
    },
  },
};

export default {
  colors,
  ...theme,
};
