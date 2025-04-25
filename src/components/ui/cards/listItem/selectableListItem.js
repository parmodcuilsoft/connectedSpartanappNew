import React from 'react';
import { View, Text } from 'react-native';
import { ThemeProvider, ListItem } from 'react-native-elements';

import SelectableIcon from '../../selectIcon';
// Styling
import theme from '../../../../styles/listItemTheme';

const SelectableListItem = ({ label, content, select, marked }) => (
  <View>
    <ThemeProvider theme={theme}>
      <ListItem onPress={select} bottomDivider>
        <SelectableIcon click={marked} />
        <ListItem.Content>
          <ListItem.Title>
            <Text style={{ color: '#000' }}>{label}</Text> {/* Set color to black */}
          </ListItem.Title>
          <ListItem.Subtitle>
            <Text style={{ color: '#000' }}>{content}</Text> {/* Set subtitle color as needed */}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </ThemeProvider>
  </View>
);

export default SelectableListItem;
