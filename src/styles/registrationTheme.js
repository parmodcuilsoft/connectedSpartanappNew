const colors = {
  background: '#E2231A',
  white: 'white',
};

const theme = {
  Text: {
    style: {
      fontSize: 20,
      color: colors.white,
      marginTop: 40,
      width: '65%',
      marginLeft: 10,
      alignSelf: 'center',
      fontFamily: 'SourceSansPro-Semibold',
    },
  },
  Button: {
    buttonStyle: {
      width: '40%',
      alignSelf: 'center',
      margin: 30,
      borderRadius: 35,
      backgroundColor: colors.background,
      paddingTop: 18,
      paddingBottom: 18,
    },
    titleStyle: {
      fontSize: 24,
      fontFamily: 'SourceSansPro-Semibold',
    },
  },
};

export default {
  colors,
  ...theme,
};
