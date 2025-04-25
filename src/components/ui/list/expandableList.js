import React from 'react';
import {View} from 'react-native';

import {Expandable} from '..';

const ExpandableList = ({bg, expandableItems, toggleParentCount = null}) => {
  const keys = Object.keys(expandableItems);
  return (
    <View style={{backgroundColor: bg}}>
      {keys.map((key, index) => {
        // eslint-disable-next-line curly
        if (key === 'default') return null;
        const content = expandableItems[key];
        return (
          <Expandable
            key={index}
            category={key}
            content={content}
            toggleParentCount={toggleParentCount}
            opened={index === 0}
          />
        );
      })}
    </View>
  );
};

export default ExpandableList;
