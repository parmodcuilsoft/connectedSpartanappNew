const colors = {
  primary: '#282828',
  white: 'white',
};

const theme = {
  Input: {
    inputStyle: {
      color: colors.primary,
      fontFamily: 'SourceSansPro-Semibold',
      paddingLeft: 15,
      paddingRight: 15,
    },
    inputContainerStyle: {
      backgroundColor: colors.white,
      height: 60,
      borderRadius: 2,
      width: '85%',
      alignSelf: 'center',
      marginTop: 40,
    },
    placeholderTextColor: colors.primary,
  },
  Button: {
    titleStyle: {
      color: colors.white,
      textDecorationLine: 'underline',
      fontFamily: 'SourceSansPro-Semibold',
      fontSize: 19,
    },
    containerStyle: {
      marginTop: 10,
      marginBottom: 50,
    },
  },
};

export default {
  colors,
  ...theme,
};
