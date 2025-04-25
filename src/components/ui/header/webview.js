import React from 'react';
import {Platform} from 'react-native';
import {Header, ThemeProvider, Text} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import {logClick} from '../../apis';

import theme from '../../../styles/headerTheme';
import { useNavigation } from '@react-navigation/native';
const buttonStyle = {
  transform: [{rotate: '45deg'}],
  fontSize: 42,
  color: 'white',
};

const finalStyle =
  Platform.OS === 'android' ? buttonStyle : {...buttonStyle, lineHeight: 42};

const WebviewHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <ThemeProvider theme={theme}>
      <Header
        leftComponent={
          <Text
            style={finalStyle}
            onPress={() => {
              logClick('back_button');
              navigation.goBack();
            }}>
            +
          </Text>
        }
        centerComponent={title ? <Text>{title}</Text> : null}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ['#32323A', '#000'],
        }}
      />
    </ThemeProvider>
  );
};

export default WebviewHeader;
