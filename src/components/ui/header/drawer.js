import React from 'react';
import { Header, ThemeProvider } from 'react-native-elements';

import theme from '../../../styles/headerTheme';

const DrawerHeader = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

export default DrawerHeader;
