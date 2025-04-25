/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { Text, Button, ThemeProvider } from 'react-native-elements';

import CustomIcon from '../customIcon';
import Call from '../call';

// Style
import theme from '../../../styles/upperMaintenanceTheme';
const bg = { backgroundColor: 'white' };

// Constants
const title = 'Recommended\nScheduled\nMaintenance';
const content = [
  'Regular maintenance will avoid problems and prolong the life of the chassis. The information presented here is not meant to override component manufacturer recommendations; rather it is supplied to enhance the ownership experience by grouping certain maintenance items as a convenience to the owner.',
  'Please be sure to read all maintenance information available for this chassis components. If any information is unclear or you have questions or concerns, please contact the Spartan Customer & Product Support Group.',
];

const call = '1-800-543-4277';

const UpperPanel = ({ children }) => (
  <>
    <View style={bg}>
      <ThemeProvider theme={theme}>
        <Text h2>{title}</Text>
        <Call phoneNumber={call}>
          <Button
            icon={

              <CustomIcon
                style={{
                  fontWeight: 'bold',
                  marginTop: 5,
                  color: 'white',
                  paddingRight: 10,
                  paddingLeft: 10,
                }}
                size={20} name="call-outline"
              />
            }
            title="Call Customer Service"
          />
        </Call>
      </ThemeProvider>
    </View>
    {children}
    <View style={{ ...bg, paddingTop: 20 }}>
      <ThemeProvider theme={theme}>
        <Text>{content[0]}</Text>
        <Text>{content[1]}</Text>
      </ThemeProvider>
    </View>
  </>
);

export default UpperPanel;
