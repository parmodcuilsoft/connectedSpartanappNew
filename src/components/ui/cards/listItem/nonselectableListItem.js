import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

const NonSelectableListItem = ({ label, content }) => {
  const titleStyle = { color: '#000', fontSize: 20, }; // Set title color and font size
  const subtitleStyle = { color: '#000', fontSize: 20 }; // Set subtitle color and font size

  return (
    <View>
      <ListItem
        bottomDivider
      >
        <ListItem.Content>
          <ListItem.Title>
            <Text style={titleStyle}>{label}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            <Text style={subtitleStyle}>{content}</Text>
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default NonSelectableListItem;
