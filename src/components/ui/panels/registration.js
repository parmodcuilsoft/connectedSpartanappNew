import React from 'react';
import {View} from 'react-native';
import {Text, Button, ThemeProvider} from 'react-native-elements';

import {logClick} from '../../apis';

import theme from '../../../styles/registrationTheme';
import { useNavigation } from '@react-navigation/native';

const Registration = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ThemeProvider theme={theme}>
        <Text>Need to register your Spartan chasis for warranty coverage?</Text>
        <Button
          title="Register"
          onPress={() => {
            logClick('open_link_https://www.spartanrvchassis.com/warranty/');
            navigation.navigate('External', {
              uri: 'https://www.spartanrvchassis.com/warranty/',
            });
          }}
        />
      </ThemeProvider>
    </View>
  );
};

export default Registration;
