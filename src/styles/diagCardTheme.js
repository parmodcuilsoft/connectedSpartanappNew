const colors = {
  background: '#3C3D3C',
  white: 'white',
};

const theme = {
  Card: {
    containerStyle: {
      backgroundColor: colors.background,
      width: '100%',
      padding: 30,
      margin: 0,
      borderWidth: 0,
    },
  },
  Text: {
    style: {
      color: colors.white,
      fontSize: 19,
      fontFamily: 'SourceSansPro-Regular',
    },
  },
};

export default {
  colors,
  ...theme,
};
