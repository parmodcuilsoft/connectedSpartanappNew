import React from 'react';

import {ListItem} from '../..';

// createListItem receives an itemNumber
// createListItem receives a label - type string
// createListItem receives a content - type string
// createListItem can receive onPress, a function
// createListItem can receive pressed, an array
// The itemNumber is used as a key
// onPress is called on the itemNumber, so the parent knows which child to mark
// we check pressed[itemNumber] !== 0 to see if the current ListItem is marked
const createListItem = (
  itemNumber,
  label,
  content,
  onPress = null,
  pressed = false,
) => {
  if (typeof onPress === 'function') {
    return (
      <ListItem
        key={itemNumber}
        label={label}
        content={content}
        onPress={() => onPress(itemNumber)}
        pressed={pressed[itemNumber] !== 0}
      />
    );
  } else {
    return <ListItem key={itemNumber} label={label} content={content} />;
  }
};

export default createListItem;


