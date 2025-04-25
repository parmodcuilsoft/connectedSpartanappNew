import React from 'react';
import { ListItem } from 'react-native-elements';

import { createListItem } from '../functions';
import { logClick } from '../../../apis';
import { useNavigation } from '@react-navigation/native';

const containerStyle = { marginLeft: 15, width: '95%' };
const titleStyle = { textAlign: 'center', fontSize: 18 };

// ExpandableContent receives a contents array. The array can be of strings or objects
// ExandableContent can receive select, a function to call on an index mark it selected
// ExpandableContent can receive selected, an array of equal length to contents. Used to check if a list item has been selected
const ExpandableContent = ({
  contents,
  select = null,
  selected = null,
}) => {
  const navigation = useNavigation();
  return contents.map((content, index) => {
    if (typeof content === 'string') {
      return createListItem(index, '', content);
    } else if (typeof content === 'object') {
      if (Object.keys(content).length === 1) {
        // One item which is a link
        const item = Object.keys(content)[0];
        return (
          <ListItem
            key={index}
            title={item}
            containerStyle={containerStyle}
            titleStyle={titleStyle}
            bottomDivider
            onPress={() => {
              logClick(`open_link_${content[item]}`);
              navigation.navigate('External', {
                uri: content[item],
              });
            }}
          />
        );
      } else {
        return createListItem(
          index,
          content.label,
          content.content,
          select,
          selected,
        );
      }
    } else {
      return null;
    }
  });
};

export default ExpandableContent;
