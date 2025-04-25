import {RFPercentage} from 'react-native-responsive-fontsize';

const colors = {
  buttonBackground: '#E2231A',
};

const theme = {
  Text: {
    h2Style: {
      fontSize: 34,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
      fontFamily: 'SourceSansPro-Semibold',
    },
    style: {
      fontSize: 18,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 20,
      fontWeight: 'bold',
      fontFamily: 'SourceSansPro-Semibold',
    },
  },
  Button: {
    buttonStyle: {
      backgroundColor: colors.buttonBackground,
      height: 82,
      alignSelf: 'center',
      paddingTop: 20,
      paddingBottom: 20,
      margin: 20,
      borderRadius: 6,
    },
    titleStyle: {
      fontSize: RFPercentage(2.3),
      fontFamily: 'SourceSansPro-Semibold',
      fontWeight: 'bold',
    },
  },
};

export default {
  colors,
  ...theme,
};
