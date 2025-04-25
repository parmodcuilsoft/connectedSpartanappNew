import React, {useState} from 'react';

import ExpandableComponent from './components';

const Expandable = ({category, content, toggleParentCount, opened = false}) => {
  const [items, setItems] = useState(new Array(content.length).fill(0));
  if (typeof toggleParentCount === 'function') {
    const mark = num => {
      let arr = [...items];
      toggleParentCount(1 - items[num]);
      arr[num] = 1 - items[num];
      setItems(arr);
    };
    const count = () => items.reduce((acc, current) => acc + current);
    return (
      <ExpandableComponent
        category={category}
        content={content}
        counted={count()}
        total={content.length}
        mark={mark}
        marked={items}
        opened={opened}
      />
    );
  } else {
    return (
      <ExpandableComponent
        category={category}
        opened={opened}
        content={content}
      />
    );
  }
};

export default Expandable;
