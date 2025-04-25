const colors = {
  primary: '#28282a',
  secondary: '#3d3d3d',
  white: 'white',
};

const theme = {
  Card: {
    containerStyle: {
      margin: 15,
      marginTop: 10,
      marginBottom: 10,
    },
    dividerStyle: {
      height: 0,
    },
    titleStyle: {
      fontSize: 22,
      textAlign: 'left',
      color: colors.primary,
      fontFamily: 'SourceSansPro-Semibold',
      marginBottom: 0,
      paddingBottom: 0,
    },
  },
  Text: {
    style: {
      fontSize: 19,
      color: colors.secondary,
      fontFamily: 'SourceSansPro-Semibold',
    },
  },
};

export default {
  colors,
  ...theme,
};
