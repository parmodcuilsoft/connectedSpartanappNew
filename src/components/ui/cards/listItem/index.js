import React from 'react';
import {View} from 'react-native';

import SelectableListItem from './selectableListItem';
import NonSelectableListItem from './nonselectableListItem';

const ListItem = ({label, content, onPress = null, pressed = false}) => (
  <View>
    {onPress || pressed ? (
      <SelectableListItem
        label={label}
        content={content}
        select={onPress}
        marked={pressed}
      />
    ) : (
      <NonSelectableListItem label={label} content={content} />
    )}
  </View>
);

export default ListItem;
