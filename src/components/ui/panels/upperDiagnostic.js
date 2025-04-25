import React from 'react';
import { View, Alert } from 'react-native';
import { Input, Button, ThemeProvider } from 'react-native-elements';

import { logClick } from '../../apis';
import MapBack from '../mapBack';
import CustomIcon from '../customIcon';

import theme from '../../../styles/upperDiagnosticTheme';
const containerStyle = {
  backgroundColor: '#979797',
};
const iconStyle = {
  color: 'white',
  paddingRight: 10,
};

const UpperPanel = ({ search, updateSearch }) => {
  return (
    <View style={containerStyle}>
      <MapBack>
        <ThemeProvider theme={theme}>
          <Input
            placeholder="Enter diagnostic code"
            value={search}
            onChange={e => updateSearch(e.nativeEvent.text)}
            returnKeyType="search"
          />
          <Button
            type="clear"
            title="How do I retrieve diagnostic codes?"
            icon={<CustomIcon style={iconStyle} size={20} name="information-circle-outline" />}
            onPress={() => {
              logClick('How_to_retrieve_codes');
              Alert.alert(
                'How do I retrieve diagnostic codes?',
                'To retrieve active engine fault codes through the Light Message Center (LMC), perform the following process with ignition key on, park brake set. Press the down arrow until "Fault Codes" is displayed. Again, press the down arrow, any active fault code(s) will be displayed.',
              );
            }}
          />
        </ThemeProvider>
      </MapBack>
    </View>
  );
};

export default UpperPanel;
