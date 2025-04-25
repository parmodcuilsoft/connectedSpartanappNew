const colors = {
  primary: '#28282A',
  secondary: '#3d3d3d',
  white: 'white',
};

const theme = {
  Card: {
    containerStyle: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: "100%",
      minHeight: 320,
      marginRight: 0,
      marginLeft: 0,
      marginTop: 30,
    },
    dividerStyle: {
      height: 0,
    },
    titleStyle: {
      backgroundColor: colors.secondary,
      color: colors.white,
      padding: 18,
      textAlign: 'left',
      fontSize: 24,
      width: '100%',
      fontFamily: 'SourceSansPro-Semibold',
    },
  },
  Text: {
    style: {
      fontSize: 18,
      maxWidth: 325,
      fontFamily: 'SourceSansPro-Regular',
      color: colors.secondary,
    },
  },
  Button: {
    buttonStyle: {
      justifyContent: 'flex-start',
      marginLeft: -7,
    },
    titleStyle: {
      color: colors.primary,
      marginRight: 10,
      textAlign: 'left',
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'SourceSansPro-Semibold',
    },
  },
};

export default {
  colors,
  ...theme,
};
