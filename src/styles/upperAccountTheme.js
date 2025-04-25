const colors = {
  white: 'white',
  buttonBackground: '#3d3d3d',
};
const theme = {
  Text: {
    h2Style: {
      fontSize: 34,
      color: colors.white,
      fontFamily: 'SourceSansPro-Semibold',
    },
    h4Style: {
      color: colors.white,
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'SourceSansPro-Semibold',
    },
    style: {
      color: colors.white,
      fontSize: 20,
      fontFamily: 'SourceSansPro-Semibold',
      fontWeight: 'normal',
    },
  },
  Button: {
    buttonStyle: {
      marginLeft: 0,
      paddingLeft: 0,
    },
    titleStyle: {
      color: colors.white,
      textDecorationLine: 'underline',
      fontSize: 20,
      fontFamily: 'SourceSansPro-Semibold',
    },
  },
};

export default {
  colors,
  ...theme,
};
