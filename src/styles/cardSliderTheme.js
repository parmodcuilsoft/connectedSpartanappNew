const colors = {
  primary: '#3d3d3d',
  white: 'white',
};

const theme = {
  Text: {
    h4Style: {
      color: colors.white,
      padding: 30,
      textAlign: 'center',
      marginTop: 30,
      fontSize: 28,
      fontFamily: 'SourceSansPro-Semibold',
    },
  },
  Button: {
    titleStyle: {
      color: colors.white,
      fontSize: 18,
      fontFamily: 'SourceSansPro-Semibold',
    },
    buttonStyle: {
      marginTop: 40,
      marginBottom: 40,
    },
  },
};

export default {
  colors,
  ...theme,
};
