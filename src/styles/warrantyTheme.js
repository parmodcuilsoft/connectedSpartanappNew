import {RFPercentage} from 'react-native-responsive-fontsize';
import {isTablet} from 'react-native-device-info';
const colors = {
  primary: 'white',
  secondary: 'black',
};

const theme = {
  Text: {
    h4Style: {
      color: colors.primary,
      marginTop: 60,
      alignSelf: 'center',
      fontSize: 32,
      fontFamily: 'SourceSansPro-Semibold',
      marginBottom: 20,
    },
  },
  Button: {
    buttonStyle: {
      backgroundColor: colors.primary,
      alignSelf: 'center',
      height: 80,
      margin: 10,
      marginLeft: 30,
      marginRight: 30,
      borderRadius: 0,
      padding: 10,
    },
    titleStyle: {
      color: colors.secondary,
      fontSize: RFPercentage(2.7),
      fontFamily: 'SourceSansPro-Black',
      textAlign: 'left',
      fontWeight: 'bold',
      flex: 5,
      marginLeft: isTablet() ? -30 : 0,
    },
  },
};

export default {
  colors,
  ...theme,
};
