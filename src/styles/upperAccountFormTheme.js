const colors = {
  white: 'white',
  buttonBackground: '#3d3d3d',
  textColor: '#6E6C7D',
  labelColor: '#000',
};
const theme = {
  Text: {
    h2Style: {
      fontSize: 34,
      color: colors.white,
      fontFamily: 'SourceSansPro-Regular',
    },
  },
  Button: {
    buttonStyle: {
      backgroundColor: colors.buttonBackground,
      borderRadius: 50,
      minWidth: 30,
      margin: 20,
      paddingLeft: 50,
      paddingRight: 50,
      padding: 15,
      marginTop: 60,
      marginBottom: 10,
    },
    titleStyle: {
      fontFamily: 'SourceSansPro-Semibold',
      fontSize: 18,
    },
  },
  Input: {
    inputStyle: {
      color: colors.textColor,
      fontFamily: 'SourceSansPro-Regular',
    },
    inputContainerStyle: {
      backgroundColor: colors.white,
      margin: 5,
      borderBottomWidth: 0,
      paddingLeft: 10,
      shadowColor: 'black',
      shadowOffset: {width: 4, height: 4},
      elevation: 4,
    },
    labelStyle: {
      color: colors.labelColor,
      fontFamily: 'SourceSansPro-Regular',
      marginTop: 20,
    },
  },
};

export default {
  colors,
  ...theme,
};
